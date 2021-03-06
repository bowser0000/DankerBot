const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
  console.log('Ready!');
  console.log('On ' + client.guilds.size + ' servers!');
  console.log('In ' + client.channels.size + ' channels!');
  console.log('Serving ' + client.users.size + ' users!');
  console.log('----------------------');
  console.log('In servers: ' + client.guilds.array().join('\n'));
  console.log('----------------------');
  client.user.setActivity(prefix + 'help', { type: 'PLAYING' });
});

client.on('error', console.error);
client.on('guildCreate', guild => {
  console.log('Joined a new guild: ' + guild.name);
});
client.on('guildDelete', guild => {
  console.log('Left a guild: ' + guild.name);
});

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message => {
  if (message.content.includes('bayonetta')) message.react('🤢');
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).split(/ +/);
  var commandName = args.shift().toLowerCase();
  var command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  if (command.args && !args.length) {
    return message.channel.send('You didn\'t provide any arguments!');
  }
  if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs!');
  }
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }
  var now = Date.now();
  var timestamps = cooldowns.get(command.name);
  var cooldownAmount = (command.cooldown || 3) * 1000;
  if (timestamps.has(message.author.id)) {
    var expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
    }
  }
  timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    if (message.guild === null) {
      console.log(commandName + ', in: DMs');
    } else {
      console.log(commandName + ', in: ' + message.guild);
    }
    command.execute(message, args);
  }
  catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(token);
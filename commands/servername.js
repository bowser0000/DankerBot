module.exports = {
    name: 'servername',
    description: 'Changes the server name.',
    usage: '<name>',
    guildOnly: 'true',
    args: true,
    execute(message, args) {
        var newName = args.slice(0).join(' ');
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('you don\'t have permission to do this!');
        message.guild.setName(newName)
            .then (message.channel.send('Set server name to ' + newName))
            .catch(console.error);
    },
};
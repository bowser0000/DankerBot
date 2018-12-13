module.exports = {
    name: 'server',
    description: 'Gives info about a server.',
    guildOnly: 'true',
    execute(message) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
    },
};
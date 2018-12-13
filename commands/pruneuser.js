module.exports = {
    name: 'pruneuser',
    description: 'Prunes messages from a specific user in the past 100 messages.',
    usage: '<mentioned user>',
    guildOnly: 'true',
    execute(message) {
        var taggedUser = message.mentions.members.first();
        if (!taggedUser) return message.reply('mention a user to prune!');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you don\'t have permission to do this!');
        if (taggedUser.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot prune this person!');
        message.channel.fetchMessages().then(messages => {
            var userMessages = messages.filter(msg => msg.author.id === taggedUser.id);
            message.channel.bulkDelete(userMessages, true).catch(err => {
                console.error(err);
                message.channel.send('There was in error trying to prune messages.');
            });
        });
    }
};
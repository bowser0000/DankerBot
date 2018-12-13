module.exports = {
    name: 'kick',
    description: 'Kicks a member from a server.',
    usage: '<mentioned user>',
    guildOnly: 'true',
    execute(message, args) {
        var taggedUser = message.mentions.members.first();
        var reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason provided.';
        if (!taggedUser) return message.reply('mention a user to kick!');
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you don\'t have permission to do this!');
        if (taggedUser.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot kick this person!');
        message.channel.send(`Kicking ${taggedUser.user.tag}.`);
        taggedUser.kick(reason).then(() => {
            message.reply(`successfully kicked ${taggedUser.user.tag}`);
        }).catch(err => {
            message.reply('I was unable to kick the member.');
            console.error(err);
        });
    }
};
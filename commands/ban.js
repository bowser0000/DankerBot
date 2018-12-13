module.exports = {
    name: 'ban',
    description: 'Bans a member from a server.',
    usage: '<mentioned user>',
    guildOnly: 'true',
    execute(message, args) {
        var taggedUser = message.mentions.members.first();
        var reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason provided.';
        if (!taggedUser) return message.reply('mention a user to ban!');
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to do this!');
        if (taggedUser.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot ban this person!');
        message.channel.send(`Banning ${taggedUser.user.tag}.`);
        taggedUser.ban(reason).then(() => {
            message.reply(`successfully banned ${taggedUser.user.tag}.`);
        }).catch(err => {
            message.reply('I was unable to ban the member.');
            console.error(err);
        });
    },
};
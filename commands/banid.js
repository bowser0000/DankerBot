module.exports = {
    name: 'banid',
    description: 'Bans a member from a server using their ID.',
    usage: '<user id>',
    guildOnly: 'true',
    execute(message, args) {
        var taggedUser = args[0];
        if (!taggedUser) return message.reply('enter an ID to ban!');
        var taggedMember = message.guild.members.get(args[0]);
        if (!taggedMember) return message.reply('that is not an ID of a user!');
        var reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason provided.';
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to do this!');
        if (taggedMember.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot ban this person!');
        message.channel.send('Banning <@' + taggedUser + '>');
        message.guild.ban(taggedUser, reason).then(() => {
            message.reply('successfully banned <@' + taggedUser + '>');
        }).catch(err => {
            message.reply('I was unable to ban the member.');
            console.error(err);
        });
    },
};
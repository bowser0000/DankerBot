module.exports = {
    name: 'unbanid',
    description: 'Unbans a member from a server using their ID.',
    usage: '<user ID>',
    guildOnly: 'true',
    execute(message, args) {
        var unbanUser = args[0];
        var reason = args.slice(1).join(' ');
        if (!reason) reason = 'No reason provided.';
        if (!unbanUser) return message.reply('enter an ID to unban!');
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you don\'t have permission to do this!');
        message.channel.send('Unbanning <@' + unbanUser + '>');
        message.guild.unban(unbanUser, reason).then(() => {
            message.reply('successfully unbanned <@' + unbanUser + '>');
        }).catch(err => {
            message.reply('I was unable to unban the member.');
            console.error(err);
        });
    },
};
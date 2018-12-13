module.exports = {
    name: 'unmute',
    description: 'Unmutes a member in the server.',
    usage: '<mentioned user>',
    guildOnly: 'true',
    execute(message) {
        var taggedUser = message.guild.member(message.mentions.members.first());
        if (!taggedUser) return message.reply('mention a user to unmute!');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('you don\'t have permission to do this!');
        var muteRole = message.guild.roles.find(role => role.name === 'Muted');
        if (!taggedUser.roles.some(role => role.name === 'Muted')) return message.reply(`${taggedUser.user.tag} is already unmuted!`);
        async function unmuteRole() {
            if (!muteRole) return message.reply('this person is not muted!');
            async function removeMutedRole() {
                await (taggedUser.removeRole(muteRole.id));
            }
            removeMutedRole();
            message.channel.send(`<@${taggedUser.id}> was unmuted!`);
        }
        unmuteRole();
    },
};
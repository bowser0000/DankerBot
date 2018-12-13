module.exports = {
    name: 'mute',
    description: 'Mutes a member in the server.',
    usage: '<mentioned user>',
    guildOnly: 'true',
    execute(message) {
        var taggedUser = message.guild.member(message.mentions.members.first());
        if (!taggedUser) return message.reply('mention a user to mute!');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('you don\'t have permission to do this!');
        if (taggedUser.highestRole.position >= message.member.highestRole.position) return message.reply('you cannot mute this person!');
        var muteRole = message.guild.roles.find(role => role.name === 'Muted');
        if (taggedUser.roles.some(role => role.name === 'Muted')) return message.reply(`${taggedUser.user.tag} is already muted!`);
        async function mutedRole() {
            if (!muteRole) {
                try {
                    muteRole = await message.guild.createRole({
                        name: 'Muted',
                        color: '#000000',
                        permissions: [],
                        hoist: true
                    });
                    message.guild.channels.forEach(async (channel) => {
                        await channel.overwritePermissions(muteRole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                        });
                    });
                } catch(e) {
                    console.log(e.stack);
                }
            }
            if (taggedUser.roles.some(role => role.name === 'Muted')) return message.reply(`${taggedUser.user.tag} is already muted!`);
            await (taggedUser.addRole(muteRole.id));
            message.channel.send(`<@${taggedUser.id}> was muted!`);
        }
        mutedRole();
    },
};
const ownerID = process.env.ownerID;

module.exports = {
    name: 'nick',
    description: 'Changes your\'s or someone\'s nickname.',
    usage: '[mentioned user] <name>',
    guildOnly: 'true',
    execute(message, args) {
        var taggedUser = message.mentions.members.first();
        var changeTo;
        if (taggedUser.roles.highest.position >= message.member.roles.highest.position) return message.reply('you cannot change this person\'s nickname!');
        if (!taggedUser) {
            if (!message.member.hasPermission('CHANGE_NICKNAME')) return message.reply('you don\'t have permission to do this!');
            changeTo = args.slice(0).join(' ');
            message.member.setNickname(changeTo).then(() => {
                message.reply('changed your nickname to ' + changeTo);
            }).catch(err => {
                message.reply('I was unable to change your nickname.');
                console.error(err);
            });
        } else {
            if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply('you don\'t have permission to do this!');
            changeTo = args.slice(1).join(' ');
            taggedUser.setNickname(changeTo).then(() => {
                message.channel.send(`Changed <@${taggedUser.user.id}>'s nickname to ` + changeTo);
            }).catch(err => {
                message.reply('I was unable to change the users nickname.');
                console.error(err);
            });
        }
    },
};
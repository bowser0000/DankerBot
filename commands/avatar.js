  module.exports = {
    name: 'avatar',
    description: 'Gives a link to one or more mentioned user\'s avatar, or yours if no one is mentioned.',
    aliases: ['icon', 'pfp', 'ava'],
    usage: '<mentioned users>',
    execute(message) {
        if(!message.mentions.users.size) return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        var avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });
        message.channel.send(avatarList);
    },
};
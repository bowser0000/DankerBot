module.exports = {
    name: 'user-info',
    description: 'Gives info about one or more mentioned user\'s ID, or yours if no one is mentioned.',
    usage: '[mentioned users]',
    execute(message) {
        if(!message.mentions.users.size) return message.channel.send(`Your username: ${message.author.tag}\nYour ID: ${message.author.id}\nCreated on: ${message.author.createdAt}`);
        var userInfoList = message.mentions.users.map(user => {
            return `Username: ${user.tag}\nID: ${user.id}\nCreated on: ${user.createdAt}\n\n`;
        });
        message.channel.send(userInfoList);
    },
};
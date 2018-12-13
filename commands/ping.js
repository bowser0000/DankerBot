module.exports = {
    name: 'ping',
    description: 'Returns ping for the bot.',
    execute(message) {
        message.channel.send(`Ping: ${Date.now() - message.createdTimestamp}ms`);
    },
};
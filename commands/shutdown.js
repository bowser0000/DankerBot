const ownerID = process.env.ownerID;

module.exports = {
    name: 'shutdown',
    description: 'Shuts down the bot. Only the owner can do this.',
    async execute(message) {
        if (message.author.id !== ownerID) return message.channel.send('You are not the owner of the bot!');
        await message.channel.send('Stopping bot...');
        process.exit();
    },
};
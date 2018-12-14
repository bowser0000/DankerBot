module.exports = {
    name: 'invite',
    description: 'Sends the invite link for the bot.',
    execute(message) {
        message.channel.send('Invite me!\n<https://discordapp.com/api/oauth2/authorize?client_id=514985392865542166&permissions=469888118&scope=bot>');
    },
};
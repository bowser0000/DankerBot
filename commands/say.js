module.exports = {
    name: 'say',
    description: 'Makes the bot say a message.',
    usage: '<text to say>',
    cooldown: 600,
    guildOnly: 'true',
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you don\'t have permission to do this!');
        var sayThis = args.slice(0).join(' ');
        message.channel.send(sayThis, {disableEveryone: true});
    },
};
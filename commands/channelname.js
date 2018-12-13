module.exports = {
    name: 'channelname',
    description: 'Changes the channel name.',
    usage: '<name>',
    guildOnly: 'true',
    args: true,
    execute(message, args) {
        var newName = args.slice(0).join('-');
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you don\'t have permission to do this!');
        message.channel.setName(newName)
            .then (message.channel.send('Set channel name to ' + newName))
            .catch(console.error);
    },
};
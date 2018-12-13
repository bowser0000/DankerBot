module.exports = {
    name: 'channeldesc',
    description: 'Changes the channel description.',
    usage: '<description>',
    guildOnly: 'true',
    execute(message, args) {
        var newDesc = args.slice(0).join(' ');
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you don\'t have permission to do this!');
        message.channel.setTopic(newDesc)
            .then (message.channel.send('Set channel description to ' + newDesc))
            .catch(console.error);
    },
};
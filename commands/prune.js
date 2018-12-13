module.exports = {
    name: 'prune',
    description: 'Prunes messages.',
    usage: '<amount>',
    guildOnly: 'true',
    execute(message, args) {
        var amount = parseInt(args[0]) + 1;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you don\'t have permission to do this!');
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        } else {
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('There was in error trying to prune messages.');
            });
        }
    },
};
module.exports = {
    name: 'vote',
    description: 'Adds reactions to vote.',
    usage: '<what to vote for>',
    args: true,
    execute(message) {
        message.react('✅')
            .then(() => message.react('❌'))
            .catch(() => console.error('One of the emojis failed to react.'));
    },
};
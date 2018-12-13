const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'Sends a picture of a random cat.',
    async execute(message) {
        var body = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(body.file);
    },
};
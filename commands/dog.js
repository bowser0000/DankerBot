const fetch = require('node-fetch');

module.exports = {
    name: 'dog',
    description: 'Sends a picture of a random dog.',
    async execute(message) {
        var body = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
        message.channel.send(body.message);
    },
};
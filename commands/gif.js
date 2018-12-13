const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: 'Sends a random PG gif from Giphy.',
    async execute(message) {
        var body = await fetch('https://api.giphy.com/v1/gifs/random?api_key=Q8tAfzNzfOHHOOnAKlVxJ0haZ4kKGWMX&tag=&rating=PG').then(response => response.json());
        message.channel.send(body.data.url);
    },
};
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    description: 'Sends the weather for a specified city or province/state.',
    usage: '<city/province/state name>',
    execute(message, args) {
        if (!args.length) return message.channel.send('You need to supply a search term!');
        var query = args.join(' ');
        weather.find({search: `${query}`, degreeType: 'C'}, function(err, result) {
            if (err) console.log(err);
            if (!result.length) return message.channel.send(`No results found for ${query}.`, {disableEveryone: true});
            message.channel.send('**' + result[0].location.name + ':**\nTemperature: ' + result[0].current.temperature + 'ºC\nWeather: ' + result[0].current.skytext + '\nFeels Like: ' + result[0].current.feelslike + 'ºC\nHumidity: ' + result[0].current.humidity + '%\nWind: ' + result[0].current.windspeed, {disableEveryone: true});
        });
    },
};
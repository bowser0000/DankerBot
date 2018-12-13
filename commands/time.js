const fetch = require('node-fetch');

module.exports = {
    name: 'time',
    description: 'Sends the time for a specified place. Returns the time in YYYY-MM-DD HH:MM',
    usage: '<place>',
    async execute(message, args) {
        if (!args.length) return message.channel.send('You need to supply a search term!');
        var query = args.join(' ');
        var body = await fetch(`https://geocode.xyz/${query}?json=1`).then(response => response.json());
        if (body.hasOwnProperty('error')) {
            if(body.error.code == '008') return message.channel.send(`No results found for ${query}.`, {disableEveryone: true});
        }
        var city = body.standard.city;
        var country = body.standard.countryname;
        var long = body.longt;
        var lat = body.latt;
        var timeJSON = await fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${long}&username=bowser0000`).then(timeresponse => timeresponse.json());
        var time = timeJSON.time;
        if (city === country) {
            message.channel.send('Time in ' + country + ': ' + time);
        } else {
            message.channel.send('Time in ' + city + ', ' + country + ': ' + time);
        }
    },
};
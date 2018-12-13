/*const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smashultmuchart.xlsx');
var muSheet = workbook.SheetNames[0];
const config = require('../config.json');

var addOne;
var addTwo;

module.exports = {
    name: 'matchupultimate',
    description: 'Shows matchups for Smash Ultimate. Make sure the character is one word, e.x. toonlink. Neutral is .',
    aliases: ['muu', 'mu5', 'muultimate', 'muult', 'matchupu', 'matchupult'],
    usage: '<character playing as> <character playing against>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case '1':
                addOne = '1';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case '1':
                addTwo = 'A';
                break;
            default:
                return message.channel.send('Your second character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        var cellAddress = addTwo + addOne;
        var worksheet = workbook.Sheets[muSheet];
        var desiredMU = worksheet[cellAddress];
        var matchupValue = (desiredMU ? desiredMU.v : undefined);
        if (bestWorst) return message.channel.send(matchupValue);
        if (matchupValue < -0.4) {
            message.channel.send('Negative: ' + matchupValue);
        } else if (matchupValue > -0.5 && matchupValue < 0.5) {
            message.channel.send('Neutral: ' + matchupValue);
        } else {
            message.channel.send('Positive: ' + matchupValue);
        }
    }
};
*/
const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smash64muchart.xlsx');
var muSheet = workbook.SheetNames[0];

var addOne;
var addTwo;

module.exports = {
    name: 'matchup64',
    description: 'Shows matchups for Smash 64. Make sure the character is one word, e.x. donkeykong. Neutral is 50.',
    aliases: ['mu64'],
    usage: '<character playing as> <character playing against>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case 'pikachu':
            case 'pika':
                addOne = '2';
                break;
            case 'kirby':
                addOne = '3';
                break;
            case 'captainfalcon':
            case 'falcon':
                addOne = '4';
                break;
            case 'fox':
                addOne = '5';
                break;
            case 'yoshi':
                addOne = '6';
                break;
            case 'jigglypuff':
            case 'puff':
                addOne = '7';
                break;
            case 'mario':
                addOne = '8';
                break;
            case 'samus':
                addOne = '9';
                break;
            case 'donkeykong':
            case 'dk':
                addOne = '10';
                break;
            case 'ness':
                addOne = '11';
                break;
            case 'link':
                addOne = '12';
                break;
            case 'luigi':
                addOne = '13';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. donkeykong.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case 'pikachu':
            case 'pika':
                addTwo = 'B';
                break;
            case 'kirby':
                addTwo = 'C';
                break;
            case 'captainfalcon':
            case 'falcon':
                addTwo = 'D';
                break;
            case 'fox':
                addTwo = 'E';
                break;
            case 'yoshi':
                addTwo = 'F';
                break;
            case 'jigglypuff':
            case 'puff':
                addTwo = 'G';
                break;
            case 'mario':
                addTwo = 'H';
                break;
            case 'samus':
                addTwo = 'I';
                break;
            case 'donkeykong':
            case 'dk':
                addTwo = 'J';
                break;
            case 'ness':
                addTwo = 'K';
                break;
            case 'link':
                addTwo = 'L';
                break;
            case 'luigi':
                addTwo = 'M';
                break;
            case 'best':
                bestWorst = true;
                addTwo = 'N';
                break;
            case 'worst':
                bestWorst = true;
                addTwo = 'O';
                break;
            default:
                return message.channel.send('Your second character is wrong. Make sure the character is one word, e.x. donkeykong.');
        }
        var cellAddress = addTwo + addOne;
        var worksheet = workbook.Sheets[muSheet];
        var desiredMU = worksheet[cellAddress];
        var matchupValue = (desiredMU ? desiredMU.v : undefined);
        if (bestWorst) return message.channel.send(matchupValue);
        if (matchupValue < 45) {
            message.channel.send('Negative: ' + matchupValue);
        } else if (matchupValue > 44 && matchupValue < 56) {
            message.channel.send('Neutral: ' + matchupValue);
        } else {
            message.channel.send('Positive: ' + matchupValue);
        }
    }
};
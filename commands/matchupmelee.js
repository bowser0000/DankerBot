const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smashmeleemuchart.xlsx');
var muSheet = workbook.SheetNames[0];

var addOne;
var addTwo;

module.exports = {
    name: 'matchupmelee',
    description: 'Shows matchups for Smash Melee. Make sure the character is one word, e.x. younglink. Neutral is 50.',
    aliases: ['mum', 'mumelee'],
    usage: '<character playing as> <character playing against>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case 'fox':
                addOne = '2';
                break;
            case 'falco':
                addOne = '3';
                break;
            case 'marth':
                addOne = '4';
                break;
            case 'sheik':
                addOne = '5';
                break;
            case 'jigglypuff':
            case 'puff':
                addOne = '6';
                break;
            case 'peach':
                addOne = '7';
                break;
            case 'iceclimbers':
            case 'icies':
                addOne = '8';
                break;
            case 'captainfalcon':
            case 'falcon':
                addOne = '9';
                break;
            case 'pikachu':
            case 'pika':
                addOne = '10';
                break;
            case 'samus':
                addOne = '11';
                break;
            case 'dr.mario':
            case 'drmario':
            case 'doc':
                addOne = '12';
                break;
            case 'yoshi':
                addOne = '13';
                break;
            case 'luigi':
                addOne = '14';
                break;
            case 'ganondorf':
            case 'ganon':
                addOne = '15';
                break;
            case 'mario':
                addOne = '16';
                break;
            case 'younglink':
                addOne = '17';
                break;
            case 'donkeykong':
            case 'dk':
                addOne = '18';
                break;
            case 'link':
                addOne = '19';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addOne = '20';
                break;
            case 'roy':
                addOne = '21';
                break;
            case 'mewtwo':
            case 'mew2':
                addOne = '22';
                break;
            case 'zelda':
                addOne = '23';
                break;
            case 'ness':
                addOne = '24';
                break;
            case 'pichu':
                addOne = '25';
                break;
            case 'bowser':
                addOne = '26';
                break;
            case 'kirby':
                addOne = '27';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. younglink.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case 'fox':
                addTwo = 'B';
                break;
            case 'falco':
                addTwo = 'C';
                break;
            case 'marth':
                addTwo = 'D';
                break;
            case 'sheik':
                addTwo = 'E';
                break;
            case 'jigglypuff':
            case 'puff':
                addTwo = 'F';
                break;
            case 'peach':
                addTwo = 'G';
                break;
            case 'iceclimbers':
            case 'icies':
                addTwo = 'H';
                break;
            case 'captainfalcon':
            case 'falcon':
                addTwo = 'I';
                break;
            case 'pikachu':
            case 'pika':
                addTwo = 'J';
                break;
            case 'samus':
                addTwo = 'K';
                break;
            case 'dr.mario':
            case 'drmario':
            case 'doc':
                addTwo = 'L';
                break;
            case 'yoshi':
                addTwo = 'M';
                break;
            case 'luigi':
                addTwo = 'N';
                break;
            case 'ganondorf':
            case 'ganon':
                addTwo = 'O';
                break;
            case 'mario':
                addTwo = 'P';
                break;
            case 'younglink':
                addTwo = 'Q';
                break;
            case 'donkeykong':
            case 'dk':
                addTwo = 'R';
                break;
            case 'link':
                addTwo = 'S';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addTwo = 'T';
                break;
            case 'roy':
                addTwo = 'U';
                break;
            case 'mewtwo':
            case 'mew2':
                addTwo = 'V';
                break;
            case 'zelda':
                addTwo = 'W';
                break;
            case 'ness':
                addTwo = 'X';
                break;
            case 'pichu':
                addTwo = 'Y';
                break;
            case 'bowser':
                addTwo = 'Z';
                break;
            case 'kirby':
                addTwo = 'AA';
                break;
            case 'best':
                bestWorst = true;
                addTwo = 'AB';
                break;
            case 'worst':
                bestWorst = true;
                addTwo = 'AC';
                break;
            default:
                return message.channel.send('Your second character is wrong. Make sure the character is one word, e.x. younglink.');
        }
        var cellAddress = addTwo + addOne;
        var worksheet = workbook.Sheets[muSheet];
        var desiredMU = worksheet[cellAddress];
        var matchupValue = (desiredMU ? desiredMU.v : undefined);
        if (bestWorst) return message.channel.send(matchupValue);
        if (matchupValue < 40) {
            message.channel.send('Negative: ' + matchupValue);
        } else if (matchupValue > 39 && matchupValue < 61) {
            message.channel.send('Neutral: ' + matchupValue);
        } else {
            message.channel.send('Positive: ' + matchupValue);
        }
    }
};
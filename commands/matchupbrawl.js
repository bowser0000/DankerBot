const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smashbrawlmuchart.xlsx');
var muSheet = workbook.SheetNames[0];

var addOne;
var addTwo;

module.exports = {
    name: 'matchupbrawl',
    description: 'Shows matchups for Smash Brawl. Make sure the character is one word, e.x. toonlink. Neutral is 0.',
    aliases: ['mubrawl', 'mub'],
    usage: '<character playing as> <character playing against>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case 'metaknight':
            case 'mk':
                addOne = '2';
                break;
            case 'iceclimbers':
            case 'icies':
                addOne = '3';
                break;
            case 'olimar':
                addOne = '4';
                break;
            case 'diddykong':
            case 'diddy':
                addOne = '5';
                break;
            case 'marth':
                addOne = '6';
                break;
            case 'snake':
                addOne = '7';
                break;
            case 'falco':
                addOne = '8';
                break;
            case 'pikachu':
            case 'pika':
                addOne = '9';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addOne = '10';
                break;
            case 'wario':
                addOne = '11';
                break;
            case 'lucario':
                addOne = '12';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addOne = '13';
                break;
            case 'toonlink':
                addOne = '14';
                break;
            case 'wolf':
                addOne = '15';
                break;
            case 'fox':
                addOne = '16';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addOne = '17';
                break;
            case 'pit':
                addOne = '18';
                break;
            case 'r.o.b.':
            case 'rob':
                addOne = '19';
                break;
            case 'peach':
                addOne = '20';
                break;
            case 'kirby':
                addOne = '21';
                break;
            case 'donkeykong':
            case 'dk':
                addOne = '22';
                break;
            case 'sonic':
                addOne = '23';
                break;
            case 'ike':
                addOne = '24';
                break;
            case 'sheik':
                addOne = '25';
                break;
            case 'ness':
                addOne = '26';
                break;
            case 'yoshi':
                addOne = '27';
                break;
            case 'luigi':
                addOne = '28';
                break;
            case 'pokemontrainer':
            case 'pkmntrainer':
            case 'trainer':
                addOne = '29';
                break;
            case 'lucas':
                addOne = '30';
                break;
            case 'mario':
                addOne = '31';
                break;
            case 'samus':
                addOne = '32';
                break;
            case 'bowser':
                addOne = '33';
                break;
            case 'captainfalcon':
            case 'falcon':
                addOne = '34';
                break;
            case 'link':
                addOne = '35';
                break;
            case 'jigglypuff':
            case 'puff':
                addOne = '36';
                break;
            case 'zelda':
                addOne = '37';
                break;
            case 'ganondorf':
            case 'ganon':
                addOne = '38';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case 'metaknight':
            case 'mk':
                addTwo = 'B';
                break;
            case 'iceclimbers':
            case 'icies':
                addTwo = 'C';
                break;
            case 'olimar':
                addTwo = 'D';
                break;
            case 'diddykong':
            case 'diddy':
                addTwo = 'E';
                break;
            case 'marth':
                addTwo = 'F';
                break;
            case 'snake':
                addTwo = 'G';
                break;
            case 'falco':
                addTwo = 'H';
                break;
            case 'pikachu':
            case 'pika':
                addTwo = 'I';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addTwo = 'J';
                break;
            case 'wario':
                addTwo = 'K';
                break;
            case 'lucario':
                addTwo = 'L';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addTwo = 'M';
                break;
            case 'toonlink':
                addTwo = 'N';
                break;
            case 'wolf':
                addTwo = 'O';
                break;
            case 'fox':
                addTwo = 'P';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addTwo = 'Q';
                break;
            case 'pit':
                addTwo = 'R';
                break;
            case 'r.o.b.':
            case 'rob':
                addTwo = 'S';
                break;
            case 'peach':
                addTwo = 'T';
                break;
            case 'kirby':
                addTwo = 'U';
                break;
            case 'donkeykong':
            case 'dk':
                addTwo = 'V';
                break;
            case 'sonic':
                addTwo = 'W';
                break;
            case 'ike':
                addTwo = 'X';
                break;
            case 'sheik':
                addTwo = 'Y';
                break;
            case 'ness':
                addTwo = 'Z';
                break;
            case 'yoshi':
                addTwo = 'AA';
                break;
            case 'luigi':
                addTwo = 'AB';
                break;
            case 'pokemontrainer':
            case 'pkmntrainer':
            case 'trainer':
                addTwo = 'AC';
                break;
            case 'lucas':
                addTwo = 'AD';
                break;
            case 'mario':
                addTwo = 'AE';
                break;
            case 'samus':
                addTwo = 'AF';
                break;
            case 'bowser':
                addTwo = 'AG';
                break;
            case 'captainfalcon':
            case 'falcon':
                addTwo = 'AH';
                break;
            case 'link':
                addTwo = 'AI';
                break;
            case 'jigglypuff':
            case 'puff':
                addTwo = 'AJ';
                break;
            case 'zelda':
                addTwo = 'AK';
                break;
            case 'ganondorf':
            case 'ganon':
                addTwo = 'AL';
                break;
            case 'best':
                bestWorst = true;
                addTwo = 'AM';
                break;
            case 'worst':
                bestWorst = true;
                addTwo = 'AN';
                break;
            default:
                return message.channel.send('Your second character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        var cellAddress = addTwo + addOne;
        var worksheet = workbook.Sheets[muSheet];
        var desiredMU = worksheet[cellAddress];
        var matchupValue = (desiredMU ? desiredMU.v : undefined);
        if (bestWorst) return message.channel.send(matchupValue);
        if (matchupValue < -1) {
            message.channel.send('Negative: ' + matchupValue);
        } else if (matchupValue > -2 && matchupValue < 2) {
            message.channel.send('Neutral: ' + matchupValue);
        } else {
            message.channel.send('Positive: ' + matchupValue);
        }
    }
};
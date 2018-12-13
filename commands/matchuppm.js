const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smashpmmuchart.xlsx');
var muSheet = workbook.SheetNames[0];

var addOne;
var addTwo;

module.exports = {
    name: 'matchuppm',
    description: 'Shows matchups for Project M. Make sure the character is one word, e.x. toonlink. Neutral is 0. Typing best or worst gives the best or worst matchup for that character.',
    aliases: ['matchupprojectm', 'mupm', 'muprojectm'],
    usage: '<character playing as> <character playing against/best/worst>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case 'bowser':
                addOne = '2';
                break;
            case 'captainfalcon':
            case 'falcon':
                addOne = '3';
                break;
            case 'charizard':
            case 'char':
            case 'zard':
                addOne = '4';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addOne = '5';
                break;
            case 'diddykong':
            case 'diddy':
                addOne = '6';
                break;
            case 'donkeykong':
            case 'dk':
                addOne = '7';
                break;
            case 'falco':
                addOne = '8';
                break;
            case 'fox':
                addOne = '9';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addOne = '10';
                break;
            case 'ganondorf':
            case 'ganon':
                addOne = '11';
                break;
            case 'iceclimbers':
            case 'icies':
                addOne = '12';
                break;
            case 'ike':
                addOne = '13';
                break;
            case 'ivysaur':
            case 'ivy':
                addOne = '14';
                break;
            case 'jigglypuff':
            case 'puff':
                addOne = '15';
                break;
            case 'kirby':
                addOne = '16';
                break;
            case 'link':
                addOne = '17';
                break;
            case 'lucario':
                addOne = '18';
                break;
            case 'lucas':
                addOne = '19';
                break;
            case 'luigi':
                addOne = '20';
                break;
            case 'mario':
                addOne = '21';
                break;
            case 'marth':
                addOne = '22';
                break;
            case 'metaknight':
            case 'mk':
                addOne = '23';
                break;
            case 'mewtwo':
            case 'mew2':
                addOne = '24';
                break;
            case 'ness':
                addOne = '25';
                break;
            case 'olimar':
                addOne = '26';
                break;
            case 'peach':
                addOne = '27';
                break;
            case 'pikachu':
                addOne = '28';
                break;
            case 'pit':
                addOne = '29';
                break;
            case 'r.o.b.':
            case 'rob':
                addOne = '30';
                break;
            case 'roy':
                addOne = '31';
                break;
            case 'samus':
                addOne = '32';
                break;
            case 'sheik':
                addOne = '33';
                break;
            case 'snake':
                addOne = '34';
                break;
            case 'sonic':
                addOne = '35';
                break;
            case 'squirtle':
                addOne = '36';
                break;
            case 'toonlink':
                addOne = '37';
                break;
            case 'wario':
                addOne = '38';
                break;
            case 'wolf':
                addOne = '39';
                break;
            case 'yoshi':
                addOne = '40';
                break;
            case 'zelda':
                addOne = '41';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addOne = '42';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case 'bowser':
                addTwo = 'B';
                break;
            case 'captainfalcon':
            case 'falcon':
                addTwo = 'C';
                break;
            case 'charizard':
            case 'char':
            case 'zard':
                addTwo = 'D';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addTwo = 'E';
                break;
            case 'diddykong':
            case 'diddy':
                addTwo = 'F';
                break;
            case 'donkeykong':
            case 'dk':
                addTwo = 'G';
                break;
            case 'falco':
                addTwo = 'H';
                break;
            case 'fox':
                addTwo = 'I';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addTwo = 'J';
                break;
            case 'ganondorf':
            case 'ganon':
                addTwo = 'K';
                break;
            case 'iceclimbers':
            case 'icies':
                addTwo = 'L';
                break;
            case 'ike':
                addTwo = 'M';
                break;
            case 'ivysaur':
            case 'ivy':
                addTwo = 'N';
                break;
            case 'jigglypuff':
            case 'puff':
                addTwo = 'O';
                break;
            case 'kirby':
                addTwo = 'P';
                break;
            case 'link':
                addTwo = 'Q';
                break;
            case 'lucario':
                addTwo = 'R';
                break;
            case 'lucas':
                addTwo = 'S';
                break;
            case 'luigi':
                addTwo = 'T';
                break;
            case 'mario':
                addTwo = 'U';
                break;
            case 'marth':
                addTwo = 'V';
                break;
            case 'metaknight':
            case 'mk':
                addTwo = 'W';
                break;
            case 'mewtwo':
            case 'mew2':
                addTwo = 'X';
                break;
            case 'ness':
                addTwo = 'Y';
                break;
            case 'olimar':
                addTwo = 'Z';
                break;
            case 'peach':
                addTwo = 'AA';
                break;
            case 'pikachu':
                addTwo = 'AB';
                break;
            case 'pit':
                addTwo = 'AC';
                break;
            case 'r.o.b.':
            case 'rob':
                addTwo = 'AD';
                break;
            case 'roy':
                addTwo = 'AE';
                break;
            case 'samus':
                addTwo = 'AF';
                break;
            case 'sheik':
                addTwo = 'AG';
                break;
            case 'snake':
                addTwo = 'AH';
                break;
            case 'sonic':
                addTwo = 'AI';
                break;
            case 'squirtle':
                addTwo = 'AJ';
                break;
            case 'toonlink':
                addTwo = 'AK';
                break;
            case 'wario':
                addTwo = 'AL';
                break;
            case 'wolf':
                addTwo = 'AM';
                break;
            case 'yoshi':
                addTwo = 'AN';
                break;
            case 'zelda':
                addTwo = 'AO';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addTwo = 'AP';
                break;
            case 'best':
                bestWorst = true;
                addTwo = 'AQ';
                break;
            case 'worst':
                bestWorst = true;
                addTwo = 'AR';
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
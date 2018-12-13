const XLSX = require('xlsx');
var workbook = XLSX.readFile('mucharts/smash4muchart.xlsx');
var muSheet = workbook.SheetNames[0];

var addOne;
var addTwo;

module.exports = {
    name: 'matchup4',
    description: 'Shows matchups for Smash 4. Make sure the character is one word, e.x. toonlink. Neutral is 0.',
    aliases: ['mu4'],
    usage: '<character playing as> <character playing against>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        var bestWorst = false;
        switch (args[0].toLowerCase()) {
            case 'bayonetta':
            case 'bayo':
                addOne = '2';
                break;
            case 'cloud':
                addOne = '3';
                break;
            case 'sheik':
                addOne = '4';
                break;
            case 'diddykong':
            case 'diddy':
                addOne = '5';
                break;
            case 'sonic':
                addOne = '6';
                break;
            case 'rosalina':
            case 'rosaluma':
                addOne = '7';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addOne = '8';
                break;
            case 'fox':
                addOne = '9';
                break;
            case 'mewtwo':
            case 'mew2':
                addOne = '10';
                break;
            case 'corrin':
                addOne = '11';
                break;
            case 'pikachu':
            case 'pika':
                addOne = '12';
                break;
            case 'ryu':
                addOne = '13';
                break;
            case 'metaknight':
            case 'mk':
                addOne = '14';
                break;
            case 'marth':
                addOne = '15';
                break;
            case 'mario':
                addOne = '16';
                break;
            case 'lucina':
                addOne = '17';
                break;
            case 'greninja':
                addOne = '18';
                break;
            case 'olimar':
                addOne = '19';
                break;
            case 'megaman':
                addOne = '20';
                break;
            case 'peach':
                addOne = '21';
                break;
            case 'lucas':
                addOne = '22';
                break;
            case 'villager':
                addOne = '23';
                break;
            case 'yoshi':
                addOne = '24';
                break;
            case 'toonlink':
                addOne = '25';
                break;
            case 'shulk':
                addOne = '26';
                break;
            case 'lucario':
                addOne = '27';
                break;
            case 'samus':
                addOne = '28';
                break;
            case 'pit':
                addOne = '29';
                break;
            case 'luigi':
                addOne = '30';
                break;
            case 'darkpit':
                addOne = '31';
                break;
            case 'captainfalcon':
            case 'falcon':
                addOne = '32';
                break;
            case 'bowser':
                addOne = '33';
                break;
            case 'duckhunt':
                addOne = '34';
                break;
            case 'r.o.b.':
            case 'rob':
                addOne = '35';
                break;
            case 'link':
                addOne = '36';
                break;
            case 'ness':
                addOne = '37';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addOne = '38';
                break;
            case 'palutena':
                addOne = '39';
                break;
            case 'donkeykong':
            case 'dk':
                addOne = '40';
                break;
            case 'robin':
                addOne = '41';
                break;
            case 'roy':
                addOne = '42';
                break;
            case 'ike':
                addOne = '43';
                break;
            case 'pac-man':
            case 'pacman':
                addOne = '44';
                break;
            case 'wario':
                addOne = '45';
                break;
            case 'littlemac':
            case 'mac':
                addOne = '46';
                break;
            case 'bowserjr.':
            case 'bowserjr':
                addOne = '47';
                break;
            case 'falco':
                addOne = '48';
                break;
            case 'charizard':
            case 'char':
            case 'zard':
                addOne = '49';
                break;
            case 'dr.mario':
            case 'drmario':
            case 'doc':
                addOne = '50';
                break;
            case 'kirby':
                addOne = '51';
                break;
            case 'zelda':
                addOne = '52';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addOne = '53';
                break;
            case 'wiifittrainer':
            case 'wiifit':
            case 'wft':
                addOne = '54';
                break;
            case 'ganondorf':
            case 'ganon':
                addOne = '55';
                break;
            case 'jigglypuff':
            case 'puff':
                addOne = '56';
                break;
            default:
                return message.channel.send('Your first character is wrong. Make sure the character is one word, e.x. toonlink.');
        }
        if (!args[1]) return message.channel.send('Please enter a second character!');
        switch (args[1].toLowerCase()) {
            case 'bayonetta':
            case 'bayo':
                addTwo = 'B';
                break;
            case 'cloud':
                addTwo = 'C';
                break;
            case 'sheik':
                addTwo = 'D';
                break;
            case 'diddykong':
            case 'diddy':
                addTwo = 'E';
                break;
            case 'sonic':
                addTwo = 'F';
                break;
            case 'rosalina':
            case 'rosaluma':
                addTwo = 'G';
                break;
            case 'zerosuitsamus':
            case 'zss':
                addTwo = 'H';
                break;
            case 'fox':
                addTwo = 'I';
                break;
            case 'mewtwo':
            case 'mew2':
                addTwo = 'J';
                break;
            case 'corrin':
                addTwo = 'K';
                break;
            case 'pikachu':
            case 'pika':
                addTwo = 'L';
                break;
            case 'ryu':
                addTwo = 'M';
                break;
            case 'metaknight':
            case 'mk':
                addTwo = 'N';
                break;
            case 'marth':
                addTwo = 'O';
                break;
            case 'mario':
                addTwo = 'P';
                break;
            case 'lucina':
                addTwo = 'Q';
                break;
            case 'greninja':
                addTwo = 'R';
                break;
            case 'olimar':
                addTwo = 'S';
                break;
            case 'megaman':
                addTwo = 'T';
                break;
            case 'peach':
                addTwo = 'U';
                break;
            case 'lucas':
                addTwo = 'V';
                break;
            case 'villager':
                addTwo = 'W';
                break;
            case 'yoshi':
                addTwo = 'X';
                break;
            case 'toonlink':
                addTwo = 'Y';
                break;
            case 'shulk':
                addTwo = 'Z';
                break;
            case 'lucario':
                addTwo = 'AA';
                break;
            case 'samus':
                addTwo = 'AB';
                break;
            case 'pit':
                addTwo = 'AC';
                break;
            case 'luigi':
                addTwo = 'AD';
                break;
            case 'darkpit':
                addTwo = 'AE';
                break;
            case 'captainfalcon':
            case 'falcon':
                addTwo = 'AF';
                break;
            case 'bowser':
                addTwo = 'AG';
                break;
            case 'duckhunt':
                addTwo = 'AH';
                break;
            case 'r.o.b.':
            case 'rob':
                addTwo = 'AI';
                break;
            case 'link':
                addTwo = 'AJ';
                break;
            case 'ness':
                addTwo = 'AK';
                break;
            case 'mr.gameandwatch':
            case 'mr.game&watch':
            case 'mrgameandwatch':
            case 'mrgame&watch':
            case 'gameandwatch':
            case 'game&watch':
            case 'g&w':
                addTwo = 'AL';
                break;
            case 'palutena':
                addTwo = 'AM';
                break;
            case 'donkeykong':
            case 'dk':
                addTwo = 'AN';
                break;
            case 'robin':
                addTwo = 'AO';
                break;
            case 'roy':
                addTwo = 'AP';
                break;
            case 'ike':
                addTwo = 'AQ';
                break;
            case 'pac-man':
            case 'pacman':
                addTwo = 'AR';
                break;
            case 'wario':
                addTwo = 'AS';
                break;
            case 'littlemac':
            case 'mac':
                addTwo = 'AT';
                break;
            case 'bowserjr.':
            case 'bowserjr':
                addTwo = 'AU';
                break;
            case 'falco':
                addTwo = 'AV';
                break;
            case 'charizard':
            case 'char':
            case 'zard':
                addTwo = 'AW';
                break;
            case 'dr.mario':
            case 'drmario':
            case 'doc':
                addTwo = 'AX';
                break;
            case 'kirby':
                addTwo = 'AY';
                break;
            case 'zelda':
                addTwo = 'AZ';
                break;
            case 'kingdedede':
            case 'dedede':
            case 'ddd':
                addTwo = 'BA';
                break;
            case 'wiifittrainer':
            case 'wiifit':
            case 'wft':
                addTwo = 'BB';
                break;
            case 'ganondorf':
            case 'ganon':
                addTwo = 'BC';
                break;
            case 'jigglypuff':
            case 'puff':
                addTwo = 'BD';
                break;
            case 'best':
                bestWorst = true;
                addTwo = 'BE';
                break;
            case 'worst':
                bestWorst = true;
                addTwo = 'BF';
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
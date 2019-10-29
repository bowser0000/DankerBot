const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'tierlist',
    description: 'Sends the tier list of the specified Smash game. Shortcuts are m, smelee, sillym, sm, b, brawl-, bm, b-, pm, f2, u, 5.',
    aliases: ['tl'],
    usage: '<64/melee/sillymelee/brawl/brawlminus/projectm/4/ultimate>',
    cooldown: 5,
    execute(message, args) {
        if (!args.length) return message.channel.send('You didn\'t specify a Smash game! (64/melee/sillymelee/brawl/brawlminus/projectm/4/ssf2/ultimate)');
        switch(args[0].toLowerCase()) {
            case '64':
                message.channel.send({files: ['tierlists/64tl.png']});
                break;
            case 'melee':
            case 'm':
                message.channel.send({files: ['tierlists/meleetl.png']});
                break;
            case 'sillymelee':
            case 'smelee':
            case 'sillym':
            case 'sm':
                message.channel.send({files: ['tierlists/smtl.png']});
                break;
            case 'brawl':
            case 'b':
                message.channel.send({files: ['tierlists/brawltl.png']});
                break;
            case 'brawlminus':
            case 'brawl-':
            case 'bm':
            case 'b-':
                message.channel.send({files: ['tierlists/brawl-tl.png']});
                break;
            case 'projectm':
            case 'pm':
                message.channel.send({files: ['tierlists/pmtl.png']});
                break;
            case '4':
                message.channel.send({files: ['tierlists/4tl.png']});
                break;
            case 'ssf2':
            case 'smashflash2':
            case' supersmashflash2':
            case 'flash2':
            case 'f2':
                message.channel.send({files: ['tierlists/ssf2tl.png']});
                break;
            case 'ultimate':
            case 'u':
            case '5':
                message.channel.send('This tier list is not an official tier list. It was made by averaging the tier lists from pro players. Last updated: 10/29/2019 (Does not include Terry)', {files: ['tierlists/ultimatetl.png']});
                break;
            default:
                message.channel.send('You didn\'t specify a Smash game! (64/melee/brawl/brawlminus/projectm/4/ultimate)');
        }
    },
};
module.exports = {
    name: 'info',
    description: 'Returns info for the bot.',
    execute(message) {
        function format(seconds){
            function pad(s){
                return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            seconds = Math.floor(seconds % 60);
            return pad(hours) + 'h:' + pad(minutes) + 'm:' + pad(seconds) + 's';
        }
        var uptime = process.uptime();
        message.channel.send('RAM Used: ' + process.memoryUsage().heapUsed / 1024 / 1024 + ' MB\nUptime: ' + format(uptime));
    },
};
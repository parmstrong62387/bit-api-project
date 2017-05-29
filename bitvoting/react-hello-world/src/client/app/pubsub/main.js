const TwitchPS = require('twitchps');

// Initial topics are required
let init_topics = [{topic: 'whispers.24566242', token: 'h3fcfsiyow087tg56u6avs5rvfy77e'}];
// Optional reconnect, debug options (Defaults: reconnect: true, debug: false)
// var ps = new TwitchPS({init_topics: init_topics});
var ps = new TwitchPS({init_topics: init_topics, reconnect: false, debug: true});

ps.on('stream-up', (data) => {
    console.log(data.time , data.channel_name);
    // Use data here
});
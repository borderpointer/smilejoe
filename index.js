var slackbot = require('node-slackbot');

var token = process.env.SLACK_API_TOKEN;

var joe = process.env.JOE_ID;

// U0AGC7WKH // hide this

var bot = new slackbot(token);

var smilejoe = function(message, cb) {

    var compliments = [
        "Hey Joe, you're the best!",
        "You're AWESOME",
        "I wish I was like you",
        "You're so cool",
        "You're my favorite!",
        "You changed the field of education and engineering!",
        "Wow Joe. So cool. Such amaze. Such wow",
        "I admire you quitting smoking!",
        "Keep going, champ!",
        "You're my role model",
        "You're my inspiration",
        "Jason loves you and so do all of us",
        "We'll miss you when we graduate!"
    ]

    function random_number(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if ('message' == message.type) {
        console.log("=========================MESSAGE============================");
        console.log(message);
        console.log("============================================================");
    }

    // send Joe a nice message
    if ( 'message' == message.type && message.text !== undefined && message.user ==  "U0AGC7WKH") {

        bot.sendMessage(message.channel, "<@U0AGC7WKH>: " + compliments[random_number(0, compliments.length - 1)]);

    }

    cb();

};

bot.use(smilejoe);

bot.connect();
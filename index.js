var slackbot = require('node-slackbot');

var token = process.env.SLACK_API_TOKEN;

var bot = new slackbot(token);

var smilejoe = function(message, cb) {

    var compliments = [
        ", you're the best!",
        ", you're AWESOME",
        ", I wish I was like you",
        ", you're so cool",
        ", you're my favorite!",
        ", you changed the field of education and engineering!",
        ", wow Joe. So cool. Such amaze. Such wow",
        ", I admire you for quitting smoking!",
        ", keep it going, champ!",
        ", you're my role model",
        ", you're my inspiration",
        ", Jason loves you and so do all of us",
        ", we'll miss you when we graduate!",
        ", sike, you're a potato :fries:"
    ];

    var smilejoe_mention = "<@U0FRMCW6A>";

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

        bot.sendMessage(message.channel, "<@U0AGC7WKH>" + compliments[random_number(0, compliments.length - 1)]);

    }

    if ( 'message' == message.type && message.text !== undefined && message.text.indexOf(smilejoe_mention) > -1) {

        if ( message.text.indexOf("bye") > -1 || message.text.indexOf("good bye") > -1 || message.text.indexOf("byeeeee") > -1 ) {

            bot.sendMessage(message.channel, "Bye errbody");

        } else if ( message.text.indexOf("hello") > -1 || message.text.indexOf("hi") > -1 ) {

            bot.sendMessage(message.channel, "Hello, <@" + message.user + ">");

        }

    }

    cb();

};

bot.use(smilejoe);

bot.connect();
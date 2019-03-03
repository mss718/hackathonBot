require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
var request=require('request');
//var googleTranslate = require('google-translate')('AIzaSyBo1L9ir-uEz97y2aFbanqmc0Sb2owlDGI');



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





var joke;
var advice;
var wordForGiph;
var giph;
var count = 0;
var sound;
var weather;
var textTrans;
var content;
var word;


var Sentencer = require('sentencer');






//this function runs whenver message is sent
client.on('message', msg => {
  if (msg.content === 'ping') {
    console.log(msg.author)
    msg.reply("test");
  }
  if (msg.content === 'joke') {
    request.get('https://geek-jokes.sameerkumar.website/api',function(err,res,body){
      joke = body;
    });
    msg.reply(joke);
  }

  if (msg.content === 'give me advice') {
    request.get('http://api.adviceslip.com/advice',function(err,res,body){
      advice = body;
    });
    msg.reply(advice);
  }

  if (msg.content === 'send me a cool gif') {

  wordForGiph =  msg.content;
  request.get('http://api.giphy.com/v1/gifs/random?api_key=pEhL6xZ3hiR75WEX2pv6GlvR5UCRktRf&tag=science',function(err,res,body){
  giph =  JSON.parse(body).data.url;
  msg.reply(giph);


});
}

if (msg.content.startsWith("speak")) {
    word = msg.content.substring(6,msg.content.length);
    content = Sentencer.make("This sentence has " + word+  " and {{ an_adjective }} {{ noun }} in it.");
    msg.reply(content, {tts: true})

  }





















});

client.login(process.env.TOKEN); //starts the bot

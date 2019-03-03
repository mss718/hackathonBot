require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
var request=require('request');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

// Creates a client
const translate = new Translate();

/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
const text = 'Hello, world!';
const target = 'ru';


var joke;
var advice;
var wordForGiph;
var giph;
var count = 0;
var sound;
var weather;






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

  if (msg.content === 'send me a cool giph') {
  wordForGiph =  msg.content;
  request.get('http://api.giphy.com/v1/gifs/random?api_key=pEhL6xZ3hiR75WEX2pv6GlvR5UCRktRf&tag=science',function(err,res,body){
  giph =  JSON.parse(body).data.url;
  msg.reply(giph);


});
}


  if (msg.content === 'weather') {

  request.get('api.openweathermap.org/data/2.5/weather?q=London',function(err,res,body){
    giph =  JSON.parse(body).data.url;
  msg.reply(weather);


});
}

if(ms.content === "translate"){


// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.
let [translations] = await translate.translate(text, target);
translations = Array.isArray(translations) ? translations : [translations];
console.log('Translations:');
translations.forEach((translation, i) => {
  console.log(`${text[i]} => (${target}) ${translation}`);
});
}





});

client.login(process.env.TOKEN); //starts the bot

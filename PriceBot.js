const TelegramBot = require('node-telegram-bot-api');
Web3 = require('WEB£')

// replace the value below with the Telegram token you receive from @BotFather
const token = 'xxx';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);

var volume = 0;

// Matches "/echo [whatever]"
bot.onText(/\/price/, (msg, match) => {

    const chatId = msg.chat.id;

       
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/simple/price?ids=moons&vs_currencies=usd',
          contentType: "application/json",
            success: function(data2){
  
               bot.sendMessage(chatId, data2.moon.usd +"$");
               
  
          }
        });
});

bot.onText(/\/bprice/, (msg, match) => {

    const chatId = msg.chat.id;

       
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/simple/price?ids=bricks&vs_currencies=usd',
          contentType: "application/json",
            success: function(data2){
  
               bot.sendMessage(chatId, data2.brick.usd +"$");
               
  
          }
        });
});

bot.onText(/\/cap/, (msg, match) => {

    const chatId = msg.chat.id;

   
    
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/simple/price?ids=moons&vs_currencies=usd',
          contentType: "application/json",
            success: function(data2){
  
                contractBrick.methods.totalSupply().call().then(async function(supply2){ 
               supply3 = supply2 * data2.moon.usd ;
               bot.sendMessage(chatId, ((supply3/1000000000000000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"$");
               
  
           })
          }
        });
    
  });

  bot.onText(/\/bcap/, (msg, match) => {

    const chatId = msg.chat.id;

   
    
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/simple/price?ids=bricks&vs_currencies=usd',
          contentType: "application/json",
            success: function(data2){

  
           contract.methods.totalSupply().call().then(async function(supply2){ 
               supply3 = supply2 * data2.brick.usd ;
               bot.sendMessage(chatId, ((supply3/1000000000000000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"$");
               
  
           })
          }
        });
    
  });



  bot.onText(/\/volume/, (msg, match) => {

    const chatId = msg.chat.id;

   
    
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/coins/moons/market_chart?vs_currency=usd&days=0',
          contentType: "application/json",
            success: function(data2){
  
               bot.sendMessage(chatId, (data2.total_volumes[0][1]).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +"$");
               
  
          }
        });
  });
  bot.onText(/\/bvolume/, (msg, match) => {

    const chatId = msg.chat.id;

   
    
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/coins/brick/market_chart?vs_currency=usd&days=0',
          contentType: "application/json",
            success: function(data2){
  
               bot.sendMessage(chatId, (data2.total_volumes[0][1]).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +"$");
               
  
          }
        });
  });
  bot.onText(/\/wenbinance/, (msg, match) => {

    const chatId = msg.chat.id;

               bot.sendMessage(chatId, "Soon");
               
  
          })
   
 


  bot.onText(/\/supply/, (msg, match) => {

    const chatId = msg.chat.id;

           contract.methods.totalSupply().call().then(async function(supply2){ 
               bot.sendMessage(chatId, ((supply2/1000000000000000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                   })

  });
  bot.onText(/\/bsupply/, (msg, match) => {

    const chatId = msg.chat.id;

    contractBrick.methods.totalSupply().call().then(async function(supply2){ 
               bot.sendMessage(chatId, ((supply2/1000000000000000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                   })

  });




  bot.onText(/\/moon/, (msg, match) => {

    const chatId = msg.chat.id;

    $.ajax({
        type: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/moon/market_chart?vs_currency=usd&days=0',
        contentType: "application/json",
          success: function(data2){

             var volume = ((data2.total_volumes[0][1]).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +"$");
             

        }
      });

   
    
      $.ajax({
          type: 'GET',
          url: 'https://api.coingecko.com/api/v3/simple/price?ids=moon&vs_currencies=usd',
          contentType: "application/json",
            success: function(data2){
  
           contract.methods.totalSupply().call().then(async function(supply2){ 
               var stats = "Market Cap: " + ((supply2/1000000000000000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"$"
               +" Price: " + data2.moon.usd +
               " Volume: " + volume + 
               +" Supply: " + supply2/1000000000000000000;
               supply3 = supply2 * data2.moon.usd ;
               bot.sendMessage(chatId, stats
                );
               
  
           })
          }
        });
    
  });
  




  const web3 = new Web3('https://testnt.redditspace.com/rpc');
  let moonAddress = "0x138fAFa28a05A38f4d2658b12b0671221A7d5728";
let minABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
let contract = new web3.eth.Contract(minABl,moonAddress);

let brickAddress = "0x2C3eEbC3Ec8553dD014084a3C44a277448e63a0F";
let minABI2 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
let contractBrick = new web3.eth.Contract(minABI2,brickAdress);

  

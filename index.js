const TeleBot = require("telebot")
const bot = new TeleBot("6744478065:AAH8UNQWfYWN5GYGtz6l4Bwgu-TjQz5N5Js")
bot.on(["/start", "/hello"], (msg) => msg.reply.text("Welcome!"))
bot.start()

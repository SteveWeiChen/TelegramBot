const TelegramBot = require("node-telegram-bot-api")

const token = '6744478065:AAH8UNQWfYWN5GYGtz6l4Bwgu-TjQz5N5Js'

const bot = new TelegramBot(token, { polling: true })

bot.on("message", (msg) => {
  const chatId = msg.chat.id

  if (chatId === "4012566687") {
    console.log(msg)
  }
})

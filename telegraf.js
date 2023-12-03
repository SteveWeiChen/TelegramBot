const { Telegraf } = require("telegraf")

const BOT_TOKEN = "6744478065:AAH8UNQWfYWN5GYGtz6l4Bwgu-TjQz5N5Js"

const GROUP_ID = 4012566687

const bot = new Telegraf(BOT_TOKEN)

bot.on("text", (ctx) => {
  if (ctx.chat.id === GROUP_ID) {
    console.log(`Received message in group: ${ctx.message.text}`)
  }
})

try {
  bot.launch({
    timeout: 10000,
  })
  console.log("Bot is running")
} catch (error) {
  console.error("Error during bot launch:", error.message)
}

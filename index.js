const { Bot } = require("grammy");

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("❌ TELEGRAM_BOT_TOKEN est manquant.");
  process.exit(1);
}

const bot = new Bot(token);

const DEVELOPER = "https://t.me/Mr_king_kayseur";
const WHATSAPP_CHANNEL =
  "https://whatsapp.com/channel/0029Vb8cfQn8V0te5K0atc1s";
const BOT_LINK = "https://t.me/CelestorixFamilyBot";

function menu() {
  return `
╭━━━〔 ♛ CELESTØRIX FAMILY BOT ♛ 〕━━━╮
┃
┃ ⚡ STATUS : ONLINE
┃ 🤖 MODE : PUBLIC
┃ 🧩 VERSION : 1.0.0
┃
┣━━〔 👑 DÉVELOPPEUR 〕━━
┃ 👤 Telegram : @Mr_king_kayseur
┃ 📢 WhatsApp : notre chaîne
┃ 🤖 Bot : @CelestorixFamilyBot
┃
┣━━〔 📋 COMMANDES 〕━━
┃ /menu
┃ /status
┃ /commands
┃ /help
┃ /about
┃ /ping
┃ /owner
┃ /version
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

♛ UNE FAMILLE • UNE FORCE • UNE DESTINÉE ♛
`;
}

bot.command("start", async (ctx) => {
  await ctx.reply(
    `♛ Bienvenue sur CELESTORIX FAMILY BOT ♛\n\nUtilise /menu pour afficher le menu.`
  );
});

bot.command("menu", async (ctx) => {
  await ctx.reply(menu(), {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "👑 Développeur", url: DEVELOPER },
          { text: "🤖 Bot", url: BOT_LINK }
        ],
        [
          { text: "📢 Chaîne WhatsApp", url: WHATSAPP_CHANNEL }
        ]
      ]
    }
  });
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    `♛ AIDE ♛\n\n/menu — Menu principal\n/status — État du bot\n/commands — Commandes\n/about — Informations\n/ping — Tester le bot\n/owner — Développeur\n/version — Version`
  );
});

bot.command("commands", async (ctx) => {
  await ctx.reply(
    `📋 COMMANDES DISPONIBLES\n\n/menu\n/status\n/help\n/about\n/ping\n/owner\n/version`
  );
});

bot.command("status", async (ctx) => {
  await ctx.reply(
    `🟢 STATUS\n\nBot : ONLINE\nMode : PUBLIC\nVersion : 1.0.0`
  );
});

bot.command("ping", async (ctx) => {
  await ctx.reply("🏓 PONG\n⚡ Celestorix Family Bot est actif.");
});

bot.command("owner", async (ctx) => {
  await ctx.reply(
    `👑 DÉVELOPPEUR\n\nTelegram : @Mr_king_kayseur`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "👤 Contacter le développeur", url: DEVELOPER }]
        ]
      }
    }
  );
});

bot.command("version", async (ctx) => {
  await ctx.reply("🧩 Celestorix Family Bot\nVersion : 1.0.0");
});

bot.command("about", async (ctx) => {
  await ctx.reply(
    `♛ CELESTØRIX FAMILY BOT ♛\n\nBot Telegram du projet CELESTØRIX FAMILY.\n\n👑 Développeur : @Mr_king_kayseur\n📢 Chaîne : WhatsApp\n🤖 Mode : Public`
  );
});

bot.catch((err) => {
  console.error("Erreur du bot :", err.error);
});

bot.start();

console.log("✅ CELESTØRIX FAMILY BOT démarré.");

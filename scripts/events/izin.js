const admin = global.GoatBot.config.adminBot;
module.exports = {
  config: {
    name: "izin",
    version: "1.0",
    author: "Hady Zen",
    category: "events"
  },

  onStart: async ({ message, event, api }) => { 
    const hadi = event.participantIDs;
    if (!admin.some(id => ayato.includes(id))) { 
      message.send('𝖺𝖽𝗆𝗂𝗇 𝗍𝗂𝖽𝖺𝗄 𝖺𝖽𝖺 𝖽𝗂𝖽𝖺𝗅𝖺𝗆 𝗀𝗋𝗎𝗉, luna 𝖺𝗄𝖺𝗇 𝗄𝖾𝗅𝗎𝖺𝗋 >~<');
      setTimeout(() => { api.removeUserFromGroup(botID, event.threadID); }, 3000);
      return;
    }
  }
};

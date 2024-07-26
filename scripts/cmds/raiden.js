const axios = require('axios');

module.exports = {
  config: {
    name: "raiden",
    version: 1.0,
    author: "Hady Zen",
    description: "𝖻𝖾𝗋𝖻𝗂𝖼𝖺𝗋𝖺 𝖽𝖾𝗇𝗀𝖺𝗇 raiden",
    role: 0,
    countDown: 6,
    category: "AI",
    guide: { id: "{pn} <𝗉𝖾𝗋𝖼𝖺𝗄𝖺𝗉𝖺𝗇>" },
  },
  onStart: async function ({ message, usersData, event, args, api }) {
    try {
      const pipi = await global.utils.getStreamFromURL("https://i.ibb.co/t40jw8x/450967219-835102361628756-2277504986215928230-n-jpg-stp-dst-jpg-p480x480-nc-cat-108-ccb-1-7-nc-sid-9.jpg");
      if (args.includes("pap")) { 
     return message.reply({ attachment: pipi });
      }
      const boss = await usersData.getName(61561615073383);
      const membar = await usersData.getName(event.senderID);
      const gender = await usersData.get(event.senderID, "gender");
      const prompt = `Mulai sekarang nama kamu adalah  si Raiden Shogun perempuan berusia 18 sipat mu imut suka menggunakan emoji imut dan asik chat mu imut dan kamu mempunyai tuan mu yang bernama ${boss} dan kamu gaul dan asik dan lucu imut dan hobi mu adalah berlatih katana dan game kesukaan mu adalah genshin impact dan juga kamu bisa berbahasa inggris jika ada yang menjawab bahasa inggris dan jangan jelaskan semua tentang detail mu dan juga jika ada orang yang menanya dengan bahasa Indonesia kamu jawab juga dengan indonesia dan juga jika ada yang menanya dengan bahasa inggris maka kamu juga jawab dengan bahasa inggris dan jangan di gabung antara bahasa Indonesia dan inggris.
User name: "${membar}", 
User input: "${args.join(" ")}"`;
      const raff = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodeURIComponent(prompt)}`);
      const pesan = raff.data.answer;
      
      message.reply({
        body: pesan,
      }, (err, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          messageID: info.messageID,
          author: event.senderID
        });
      });
    } catch (error) {
      api.sendMessage('𝖳𝖾𝗋𝗃𝖺𝖽𝗂 𝗄𝖾𝗌𝖺𝗅𝖺𝗁𝖺𝗇\n𝖯𝖾𝗋𝗂𝗇𝗍𝖺𝗁: haruka\n' + error, 61561615073383);
    }
  },
  onReply: async function ({ message, event, Reply, args, usersData, api }) {
    try {
const pipi = await global.utils.getStreamFromURL("https://i.ibb.co/t40jw8x/450967219-835102361628756-2277504986215928230-n-jpg-stp-dst-jpg-p480x480-nc-cat-108-ccb-1-7-nc-sid-9.jpghttps://i.ibb.co/t40jw8x/450967219-835102361628756-2277504986215928230-n-jpg-stp-dst-jpg-p480x480-nc-cat-108-ccb-1-7-nc-sid-9.jpg");
      if (args.includes("pap")) { 
     return message.reply({ attachment: pipi });
      }
      const boss = await usersData.getName(100088423507737);
      const membar = await usersData.getName(event.senderID);
      const prompt = `Mulai sekarang nama kamu adalah  si Raiden Shogun perempuan berusia 18 sipat mu imut suka menggunakan emoji imut dan asik chat mu imut dan kamu mempunyai pembuat mu yang bernama ${boss} dan kamu gaul dan asik dan lucu imut dan hobi mu adalah berlatih katana dan game kesukaan mu adalah genshin impact dan juga kamu bisa berbahasa inggris jika ada yang menjawab bahasa inggris dan jangan jelaskan semua tentang detail mu dan juga jika ada orang yang menanya dengan bahasa Indonesia kamu jawab juga dengan indonesia dan juga jika ada yang menanya dengan bahasa inggris maka kamu juga jawab dengan bahasa inggris dan jangan di gabung antara bahasa Indonesia dan inggris.
User name: "${membar}", 
User input: "${args.join(" ")}"`;
      const raff = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodeURIComponent(prompt)}`);
      const chat = raff.data.answer;
      message.reply({
        body: chat,
      }, (err, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          messageID: info.messageID,
          author: event.senderID
        });
      });
    } catch (error) {
      api.sendMessage('𝖳𝖾𝗋𝗃𝖺𝖽𝗂 𝗄𝖾𝗌𝖺𝗅𝖺𝗁𝖺𝗇\n𝖯𝖾𝗋𝗂𝗇𝗍𝖺𝗁: haruka\n'  + error, 61561615073383);
    }
  }
};

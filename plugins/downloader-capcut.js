const axios = require('axios');

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://www.capcut.com/template-detail/7273798219329441025?template_id=7273798219329441025&share_token=1ea9b68c-aa1b-4fc4-86c2-bf2b9136b6e0&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`;
    }
    try {
        if (!args[0].match(/capcut/gi)) {
            throw `URL Tidak Ditemukan!`;
        }
        m.reply('*Mohon tunggu..*');
        const response = await axios.get(`https://api.botcahx.eu.org/api/dowloader/capcut?url=${args[0]}&apikey=${btc}`);
        const res = response.data;
        const { 
            owner, 
            title,
            video
        } = res.result;
        conn.sendFile(m.chat, video, 'capcut.mp4', `Title: ${title}\nOwner: ${owner}`, m);
    } catch (e) {
        console.log(e);
        throw `Terjadi Kesalahan!`;
    }
};

handler.help = handler.command = ['capcut', 'cc', 'capcutdl', 'ccdl'];
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
module.exports = handler;

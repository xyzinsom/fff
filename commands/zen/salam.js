module.exports = {
    name: "salam",
    alias: ["assalamualaikum","assalamu'alaikum"],
    desc: "Jawab Salam",
    type: "zen",
    example: "%prefix%command",
    start: async (killua, m) => {
        let dlan = `Wa'alaikum Sallam Wr. Wb...

_وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ حَسِيبًا_

Artinya: _“Apabila kamu diberi penghormatan dengan sesuatu penghormatan, maka balaslah penghormatan itu dengan yang lebih baik dari padanya, atau balaslah penghormatan itu (dengan yang serupa). Sesungguhnya Allah memperhitungankan segala sesuatu”_
        
[ THIS IS AUTOMATIC MESSAGE by @mf4dhlan_24 ]`
        let buttons = [
            {buttonId: `verify`, buttonText: {displayText: 'Verify'}, type: 1},
            {buttonId: `profile`, buttonText: {displayText: 'Profile'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: 'https://telegra.ph/file/3cbcd55496fe07374d158.jpg' },
            caption: dlan,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    noLimit: true,
}
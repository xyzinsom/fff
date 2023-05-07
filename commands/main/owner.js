module.exports = {
    name: "owner",
    alias: ["owner"],
    desc: "Owner Information",
    type: "main",
    example: "%prefix%command",
    start: async (killua, m) => {
        let dlan = `Assalamualaikum Semuanya...
Ini nomor ownerku yaa....
wa.me/6281311268263
        `
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
const {MessageEmbed} = require("discord.js");
const db = require("quick.db");


module.exports={
    run: async(client, message, args) =>{

        if(!args[0]) return message.reply(`ayarlamak için **${client.config.info.prefix}alınacakrol ayarla @rol`)


if (args[0] === "ayarla") {
    let rol = message.mentions.roles.first()
    if(!rol) return message.reply(`Rol etikerlemelisiniz!`)
    const rvs = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor(client.config.colors.succes)
    .setDescription(`Başarılı bir şekilde kayıt olunca alınacak rol ${rol} olarak ayarlandı!`)
    message.channel.send(rvs)
    db.set(`kalınacakrol.${message.guild.id}`, rol.id)
}

if (args[0] === "sıfırla") {
    let sorgu = db.fetch(`kalınacakrol.${message.guild.id}`)
if(!sorgu) return message.reply(`sıfırlamam için ilk önce ayarlamalısın!`)
    const rvs = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor(client.config.colors.failed)
    .setDescription(`Başarılı bir şekilde kayıt olunca alınacak rol sıfırlandı!`)
    message.channel.send(rvs)
    db.delete(`kalınacakrol.${message.guild.id}`)
}



    },
    config:{
        name: "alınacakrol",
        category: "eğitim",
        permLevel: "3"
    }
}
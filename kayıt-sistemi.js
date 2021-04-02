const {MessageEmbed} = require("discord.js");
const db = require("quick.db");


module.exports={
    run: async(client, message, args) =>{
        let üye = message.mentions.members.first()
        let alınacak = db.fetch(`kalınacakrol.${message.guild.id}`)
        let verilecek = db.fetch(`kverilecekrol.${message.guild.id}`)
        let isim = args[1];
        let yas = args[2];
if(!verilecek) return message.reply(`verilecek rol ayarlanmamış!`)
if(!alınacak) return message.reply(`alınacak rol ayarlanmamış!`)
if(!üye) return message.reply(`kayıt edeceğin üyeyi etiketlemelisin!`)
if(!isim) return message.reply(`isim yazmalısın!`)
if(!yas) return message.reply(`yaş yazmalısın!`)

const reveloper = new MessageEmbed()
.setTitle(`${client.config.emoji.succes} | Başarılı!`)
.setColor(client.config.colors.default)
.setDescription(
    `
    Kayıt Edilen Kullanıcı: ${üye}
    alınan rol: <@&${alınacak}>
    verilen rol: <@&${verilecek}>
    kayıt eden yetkili: ${message.author.username}
    `
)
message.channel.send(reveloper)
üye.setNickname(`${isim} ${yas}`)
üye.roles.add(`${verilecek}`)
üye.roles.remove(`${alınacak}`)


    },
    config:{
        name: "s", // bende kayıt sistemi ekli oldugundan bu şekidle komutu adlandırdım.
        category: "eğitim",
        permLevel: "3"
    }
}
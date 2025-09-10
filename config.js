const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd5YWl5eGNhRjArTzhLS3pCTXpIT2VIMGZvbVVWaWVXakVRb3Evb0wwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianIwQjlWZ0h0SjJwS1poQjFwQkJxUm1YVlROZFhuNGNYR3ppRjJ3RGhVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTnRQODJua2E4ZUYrdkdlbHFDbm5EZ3VTWVFkYkhVSUlzRUpwTkQrT1Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeGRkbitYT0h0c2h3OHVSaHhmTitEc2lPWEYwbkM3TlNqN3VJaTlOWVFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHNmloRDdaakZtL1dlbEtZWFA3dk9qNVBRM1BKa0N5NVZ3V1lRR1p4Mjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklmSkFkakNsbXNFdXVUbVJpYXVUNTZkWGUwSzZYbEVkeVRweStRb2czR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhDUUZyeE9jUzRMYXpOU2lST28vNU9ZWC9kVk5mNkRoYVVneWl6YUhFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialFiZVpya1dHU0JKYU5waVM0bVdGWVlraWVEWlBMemUwNUFSL2tyRUd6az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY1RHFsRkdpRld0dHBWcGtyRXZaNkJDYTJ6WjhUNlR0M1JQNFBXTEpYbUJkWE51UFZRM0lSQWxXK3NTQ3NRZUV5SWpuOTRRcmZPV3dWNDYzSXhRc2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IlJ1b1dhTmpPZjVVNnI4UHR3NUFaN3lyUHM4bCs3clZPT3JKYnRROTdaQjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDIzNzkzNTUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDMjhDOENBMDExQURGNDZDODlBMDBCQ0QwQjFGNUZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0OTM3Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMzc5MzU1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQjYwQ0ZEMjYzMTQwNDFFMjQ1NjNGRjQ4MENGNERCOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NDkzNzM5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzNDIzNzkzNTUzOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBha2lzdGFuIGdyZWF0IiwibGlkIjoiMTU0ODk0MjIwNjg1NDA4OjE1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNua2pNUTRQT0V4Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWThkM2p5QVVkbElldVQyNm5hUElyMTF2MTlZb1BNUXBPQWhWWVBEeVFIMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMzVvT1FKTmQxeHowd0NIem5leGhqUkR4OHVQMS9PaVNWU1RPSEVXaXgxVnM1enUwK2JZQVRjVTdaUi9zdTlRa0J2QkFNN3lNTkZSbWJ6Y0VLaDZlQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImlCaEt3R3N4ZzdYTERCTXhuQVJqVnR1Wmszb1ZCNE9LajBjcTFBbkwrbU9neURSZjZjS25UY2xNZ0Y2S2tlai8yNlJJMk9yTjRXRGlBTmRSUEZZamhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIzNzkzNTUzOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldQSGQ0OGdGSFpTSHJrOXVwMmp5SzlkYjlmV0tEekVLVGdJVldEdzhrQjkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzQ5MzczMiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeU8ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DARKZONE-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4964gx.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DARKZONE-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DARKZONE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923248259064",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© CREATER 𝐸𝑅𝐹𝒜𝒩 𝒜𝐻𝑀𝒜𝒟 *",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4964gx.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY IM ALIVE NOW  *DARKZONE-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923306137477",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

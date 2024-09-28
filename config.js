//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sycoalak786@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923556159234@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaHJSUeC6Zvq89X23w2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaHJSUeC6Zvq89X23w2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/khanak1/Alexa/blob/main/20240928_154259.jpg";
global.devs = "923556159234";
global.sudo = process.env.SUDO || "923556159234";
global.owner = process.env.OWNER_NUMBER || "923556159234";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtoMFhkTUs2MmZFbG9kanpUam84VndFY1FSb3UzSEpPYUF3dEZxOVZuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEJCN3BTT0VBYVFRcmNtUlBma1NxOWtXVklnNVZpVWsrS0RRRGtUNExtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS0xiU2gwT1RKbDY0YUFHeGQvRzBnSTZKK0I0RXVObkxYNFhaNGMrNG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVndQLzRnOTR3T3BMT2pvMkpjMHpiY21SM3IrVUNUN0RjZVdCNU5sWjA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ENU5qVWRZd2FhTFFPdk5wdzNBTHNFcGtZUC9weEQvQU02Unh5aXVJVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJVGpDQVhwQXBoWXFQMVF5MklyUytIZXNWaE9TOFNXb3JFa0VuOC80WFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5WbWE3ZzhrdHdYT1haNTVrQ2lsaVI5SkdkQ0tOdUdpQ0kxRkF1ak8xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXpDM2N4ckRuQXNMUjU1UnJ0TVd5WHZObStZVitmaHRhMms2Ykc3YW53VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inhkc0tqdWNTRGg4Z0xXdVYvS1NkckdNN3pQZjN1VVNaYm9OTWlDblQvMG9BUUwyeWFuYUU3MUVtbnFwRDdlbFNkNkRoeFR5VVo2QTZHY0huUTFieUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiIwUkQ0VW8wM0k3MUpxVGQrMFhSV0hvdnllS0Y3VjRYSktGY0RhMkJhQVF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzU1NjE1OTIzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMjg2NTFBN0MwNUQ5QTI4QUY4NzlCRENBRDVBQTg1MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NTIyNzA0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1VU5YSnQ2TFM1U0NucHduYUVNU093IiwicGhvbmVJZCI6ImEzNGI2NzMyLTg0NGUtNGU4Mi1iNmIzLTBkNzcwOWRiOTI4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOVzlZT0krMjhNdk9Bb1lPTnF3Nk8zbkprazQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FiWFFWb1lXeFVhWSs0a1dVZFlvZkFhbzFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVKVFBINzFXIiwibWUiOnsiaWQiOiI5MjM1NTYxNTkyMzQ6NDBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09LTndkMEJFUDNPMzdjR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlZRDBzMDZScElsbTdMM0h1djVUYURuS0RqcE5aOWVPZlg5dXdwRDFlRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVMUnJhY1ZlZHg1U05OSUluNTVGRTZZa092ZEtzRlZzZi85c0hEazNqQU1VS2JyLzhDbHgvQ2pjUDFDN0FmMy9mSUdmVnB3L0xwN21YOGx3MXhrdUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFR2paUGhSS3RCN2ZOT3VldWFQSFQyVG1xclduQUthN0tjL0lmVTNCcVVHT3V5WWhjNnQwdXpDRnU1aGpHYkZiMmh0UmtyS212bndRLzB6bVVaK2ZDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzU1NjE1OTIzNDo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbUE5TE5Pa2FTSlp1eTl4N3IrVTJnNXlnNDZUV2ZYam4xL2JzS1E5WGhiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NTIyNjk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVvcCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "File Generated By Sarkar-AK 😍",
  author: process.env.PACK_AUTHER || "KHAN",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SARKAR-AK",
  ownername: process.env.OWNER_NAME || "Afzaal Khan",
  errorChat: process.env.ERROR_CHAT || "923556159234",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KHAN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

const Discord = require("discord.js");
const config = require("./../config.json");
const usersDB = require("./../base/User.js"),
guildsDB = require("./../base/Guild.js"),
membersDB = require("./../base/Member.js");
module.exports.getUserDB = async function(userID){

  let userDB = await usersDB.findOne( { id: userID } );
  if(userDB){
    return userDB;
  } else {
    userDB = new usersDB({
      id: userID
    })
    await userDB.save().catch(err => console.log(err));
    return userDB;
  }
}

module.exports.getGuildDB = async function (guildID){
  let guildDB = await guildsDB.findOne( { id: guildID } );
//   guildsDB.countDocuments({ prefix: ';;', number: { $gte: 89 // if larger than} }, function (err, count) {
//   console.log(count);
// });
  if(guildDB){
    return guildDB;
  } else {
    guildDB = new guildsDB({
      id: guildID
    })
    await guildDB.save().catch(err => console.log(err));
    return guildDB;
  }
}
module.exports.getMemberDB = async function (userID, guildID){
  let memeberDB = await membersDB.findOne( { id: userID, guildID: guildID } );
  if(memeberDB){
    return memeberDB;
  } else {
    memeberDB = new membersDB({
       id: userID,
       guildID: guildID
    })
    await memeberDB.save().catch(err => console.log(err));
    return memeberDB;
  }
}


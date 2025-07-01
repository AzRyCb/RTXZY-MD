global.owner = ['6281313918102']  
global.mods = ['6281313918102'] 
global.prems = ['6281313918102']
global.nameowner = 'Ariff'
global.numberowner = '6281313918102' 
global.mail = 'unitycentralofc@gmail.com' 
global.gc = 'https://chat.whatsapp.com/CXuojM2YzMRKvKb5X6zomh?mode=ac_c'
global.instagram = 'https://instagram.com/unity.central'
global.wm = '© Neu-WaBot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 's.id/unity_central'
global.maxwarn = '5' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = true // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = true // Set true/false untuk anti spam (default: false)
global.gcspam = true // Set true/false untuk menutup grup ketika spam (default: false)
    

// APIKEY INI WAJIB DI ISI! //
global.btc = 'putxd' 
//Daftar terlebih dahulu https://api.botcahx.eu.org



// INI HANYA OPTIONAL SAJA BOLEH DI ISI BOLEH JUGA ENGGA //
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti atau di ubah
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//Gausah diganti atau di ubah
global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

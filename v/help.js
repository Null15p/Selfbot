exports.menu = (ramadhan, pushname, sender, prefix, publik, offline, ucapanWaktu, wib, wita, wit, premi, latensii, totalgrouppp, totalkontakkk, totalchattt, Mr) => {
return`${ucapanWaktu} ${pushname}

β¦Ώ _Creator_ : @${Mr.split("@")[0]}
β¦Ώ _Hit Today_ : ${hit_today.length} π―ππ
β¦Ώ _Lib_ : π©ππππππ
β¦Ώ _Type_ : π΅ππππ±π
β¦Ώ _Prefix_ : γ π΄πππππ·πππππ γ
β¦Ώ _Mode_ : ${publik ? 'πΊπ¬π³π­' : 'π·πΌπ©π³π°πͺ'}
β¦Ώ _Status_ : ${offline ? 'πΆπ­π­π³π°π΅π¬' : 'πΆπ΅π³π°π΅π¬'}
β¦Ώ _User_ : ${premi}
β¦Ώ _Group Chats_ : ${totalgrouppp.length}
β¦Ώ _Private Chats_ : ${totalkontakkk.length}
β¦Ώ _Total Chats_ : ${totalchattt.length}
β¦Ώ _Speed_ : ${latensii.toFixed(4)} πΊππππππ
β¦Ώ Hitung Mundur Ramadhan : ${ramadhan.data.result}

*</INFO TIME>*
β¦Ώ _${wib}_ πππ½
β¦Ώ _${wita}_ ππππΌ
β¦Ώ _${wit}_ πππ

β γ PREMIUM  γ
βββββββββββββββββββββ
β ${prefix}addprem [number]
β ${prefix}dellprem [number]
β ${prefix}listprem

β γ ANYONYIMUS CHAT γ
βββββββββββββββββββββ
β ${prefix}start
β ${prefix}leave
β ${prefix}next

β γ MENU GROUP γ
ββββββββββββββββββββ
β ${prefix}listonline
β ${prefix}tutuptime
β ${prefix}bukatime
β ${prefix}leavetime
β ${prefix}getpict [ _@tag_ ]
β ${prefix}getname [ _reply target_ ]
β ${prefix}getbio [ _reply target_ ]
β ${prefix}promote [ _@tag_ ]
β ${prefix}demote [ _@tag_ ]
β ${prefix}antilink [ _1/0_ ]
β ${prefix}creategrup [ _nama|@tag_ ]
β ${prefix}tictactoe [ _@tag_ ]
β ${prefix}tebakgambar
β ${prefix}caklontong
β ${prefix}tebakkata
β ${prefix}familiy100
β ${prefix}delttt
β ${prefix}getpp
β ${prefix}kick [ _@tag_ ]
β ${prefix}add [ _nomor_ ]
β ${prefix}getdeskgc
β ${prefix}sider [ _reply pesan bot_ ]
β ${prefix}hacked [ _teks_ ]
β ${prefix}setnamegc [ _teks_ ]
β ${prefix}setdeskgc [ _teks_ ]
β ${prefix}fitnah [ _@tag|teks1|teks2_ ]
β ${prefix}kontak [ _@tag|nama_ ]
β ${prefix}kontag [ _@tag|nama_ ]
β ${prefix}grup buka/tutup
β ${prefix}resetlinkgc
β ${prefix}linkgrup
β ${prefix}tagall
β ${prefix}hidetag [ _teks_ ]
β ${prefix}sticktag [ _nama sticker_ ]
β ${prefix}totag [ _reply media_ ]

β γ MENU NULIS γ
βββββββββββββββββββββ
β ${prefix}nuliskanan
β ${prefix}nuliskiri
β ${prefix}nuliskiri
β ${prefix}foliokanan
β ${prefix}foliokiri

β γ MENU MAKER γ
βββββββββββββββββββββ
β ${prefix}hackereffect
β ${prefix}glitch [ _teks_ ]
β ${prefix}pornhub [ _teks_ ]
β ${prefix}avenger [ _teks_ ]
β ${prefix}space [ _teks_ ]
β ${prefix}ninjalogo [ _teks_ ]
β ${prefix}marvelstudio [ _teks_ ]
β ${prefix}lionlogo [ _teks_ ]
β ${prefix}wolflogo [ _teks_ ]
β ${prefix}steel3d [ _teks_ ]
β ${prefix}wallgravity [ _teks_ ]
β ${prefix}matrix [ _teks_ ]
β ${prefix}googletxt [ _teks_ ]
β ${prefix}spiderman [ _teks_ ]
β ${prefix}express [ _teks_ ]
β ${prefix}maker2d2 [ _teks_ ]
β ${prefix}maker2d3 [ _teks_ ]
β ${prefix}maker2d4 [ _teks_ ]
β ${prefix}maker3d [ _teks_ ]
β ${prefix}maker3d2 [ _teks_ ]
β ${prefix}maker3d3 [ _teks_ ]
β ${prefix}maker3d4 [ _teks_ ]
β ${prefix}transformer [ _teks_ ]
β ${prefix}battlefield [ _teks_ ]
β ${prefix}coffeecup [ _teks_ ]
β ${prefix}coffeecup2 [ _teks_ ]
β ${prefix}neon [ _teks_ ]
β ${prefix}glow [ _teks_ ]
β ${prefix}summer [ _teks_ ]
β ${prefix}flower [ _teks_ ]
β ${prefix}burn [ _teks_ ]
β ${prefix}quote [ _teks_ ]
β ${prefix}wooden [ _teks_ ]
β ${prefix}goolden [ _teks_ ]
β ${prefix}dance [ _teks_ ]
β ${prefix}blackbird [ _teks_ ]
β ${prefix}halloween [ _teks_ ]
β ${prefix}vampire [ _teks_ ]
β ${prefix}codetxt [ _teks_ ]
β ${prefix}text3d [ _teks_ ]
β ${prefix}warrior [ _teks_ ]

β γ MENU DOWNLOAD γ
βββββββββββββββββββββ
β ${prefix}infogempa
β ${prefix}herolist
β ${prefix}herodetail [ _hero_ ]
β ${prefix}google [ _search_ ]
β ${prefix}gimage [ _search_ ]
β ${prefix}wiki [ _search_ ]
β ${prefix}mediafire [ _link_ ]
β ${prefix}ytsearch [ _judul_ ]
β ${prefix}ytmp4 [ _link yt_ ]
β ${prefix}ytmp3 [ _link yt_ ]
β ${prefix}play [ _judul lagu_ ]
β ${prefix}video [ _judul video_ ]
β ${prefix}tinyurl [ _link_ ]
β ${prefix}fetch [ _link_ ]
β ${prefix}igdl [ _link_ ]
β ${prefix}tiktokdl [ _link_ ]
β ${prefix}pinterest [ _search_ ]
β ${prefix}lirik [ _judul_ ]
β ${prefix}tourl [ _reply image/video_ ]
β ${prefix}resepmasakan [ _judul_ ]
β ${prefix}artimimpi [ _teks_ ]
β ${prefix}bilangangka [ _angka_ ]
β ${prefix}kalkulator [ _angka_ ]
β ${prefix}fancytext [ _teks_ ]
β ${prefix}githubstalk [ _username_ ]
β ${prefix}translate [ _kodebhs|teks_ ]
β ${prefix}ss [ _link_ ]

β γ MENU OTHER γ
βββββββββββββββββββββ
β ${prefix}stickmeme
β ${prefix}onc
β ${prefix}hash
β ${prefix}stickmeme2
β ${prefix}stickmeme3
β ${prefix}join 
β ${prefix}hentai
β ${prefix}inspect
β ${prefix}sewalist
β ${prefix}bugreport
β ${prefix}bokep
β ${prefix}spamsms
β ${prefix}sepamcall
β ${prefix}leave
β ${prefix}start
β ${prefix}jadibot
β ${prefix}caripesan [ _teks|jumlah_ ]
β ${prefix}slots
β ${prefix}suit [ _gunting/batu/kertas_ ]
β ${prefix}tag [ _nomor_ ]
β ${prefix}tagme
β ${prefix}tts [ _kodebhs teks_ ]
β ${prefix}readmore [ _teks1|teks2_ ]
β ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
β ${prefix}chat [ _nomor|teks_ ]
β ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
β ${prefix}listimage
β ${prefix}liststicker
β ${prefix}listvn
β ${prefix}listgrup
β ${prefix}baileys [ _reply message_ ]
β ${prefix}q [ _reply message_ ]
β ${prefix}getcaption [ _reply message_ ]
β ${prefix}pantun
β ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
β ${prefix}sharelock [ _teks1|teks2_ ]
β ${prefix}sticker [SEDANG EROR]
β ${prefix}stickerwm [SEDANG EROR]
β ${prefix}takestick [SEDANG EROR]
β ${prefix}colong [SEDANG EROR]
β ${prefix}dadu
β ${prefix}semoji [SEDANG EROR]
β ${prefix}attp [SEDANG EROR]
β ${prefix}toimg
β ${prefix}tomp3 [ _reply video_ ]
β ${prefix}tomp4 [ _reply sticker gif_ ]
β ${prefix}robot [ _reply audio_ ]
β ${prefix}balik [ _reply audio_ ]
β ${prefix}bass [ _reply audio_ ]
β ${prefix}gemuk [ _reply audio_ ]
β ${prefix}detikvn [ _reply audio caption angka_ ]
β ${prefix}detikvideo [ _reply video caption angka_ ]

β γ WARNING!! γ
βββββββββββββββββββββ
β ${prefix}bug [ _jumlah_ ]
β ${prefix}sendbug [ _idGroup_ ]
β ${prefix}bugpc2 [ _jumlah_ ]
β ${prefix}bugtroli2 [ _jumlah_ ]
β ${prefix}bugpc
β ${prefix}bag
β ${prefix}philips
β ${prefix}bugcombine
β ${prefix}bugtroli
β ${prefix}bughole
β ${prefix}buatvilip
β ${prefix}jadivirgam [REPLY FOTO]
β ${prefix}jadivirgam2 [REPLY FOTO]
β ${prefix}jadivirgam3 [REPLY FOTO]
β ${prefix}jadivirgam4 [REPLY FOTO]
β ${prefix}jadivilip [REPLY FOTO]
β ${prefix}jadiviloc [REPLY FOTO]
β ${prefix}jadiselayer [REPLY FOTO]
β ${prefix}jadiselayer2 [REPLY FOTO]
β ${prefix}jadiselayer3 [REPLY FOTO]
β ${prefix}bugsw
β ${prefix}bugsw1
β ${prefix}bugsw2
β ${prefix}bugsw3
β ${prefix}bugsw4
β ${prefix}bugsw5
β ${prefix}stiktovirgam [REPLY STICKER]

β γ ANIME HD!! γ
βββββββββββββββββββββ
β ${prefix}bully 
β ${prefix}kiss
β ${prefix}pat
β ${prefix}baka
β ${prefix}slap
β ${prefix}poke
β ${prefix}loli
β ${prefix}husbu
β ${prefix}milf
β ${prefix}cosplay
β ${prefix}wallml
β ${prefix}sao
β ${prefix}hsdxd
β ${prefix}lovelive
β ${prefix}awoo
β ${prefix}yuri
β ${prefix}lesbian
β ${prefix}eroneko
β ${prefix}megumin
β ${prefix}blowjob
β ${prefix}naruto
β ${prefix}wibu
β ${prefix}aeshtetic
β ${prefix}wallpaperanime
β ${prefix}animefanart
β ${prefix}izumisagiri
β ${prefix}trapnime

β γ PENAMBAH MOOD!! γ
βββββββββββββββββββββ
β ${prefix}asupanbocil
β ${prefix}asupansantuy
β ${prefix}asupanukhty
β ${prefix}asupanrikagusriani
β ${prefix}asupanghea
β ${prefix}asupan
β ${prefix}fajar
β ${prefix}+62
β ${prefix}cecan
β ${prefix}cogan
β ${prefix}darkjokes
β ${prefix}quotesyt
β ${prefix}storyanime
β ${prefix}meme

β γ MENU OWNER γ
βββββββββββββββββββββ
β ${prefix}unpin
β ${prefix}pin
β ${prefix}archive
β ${prefix}unreadall
β ${prefix}readall
β ${prefix}unarchiveall
β ${prefix}sewa
β ${prefix}stopjadibot
β ${prefix}autorespon [ _on/off_ ]
β ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
β ${prefix}tobc [ _reply sticker/audio with caption_ ]
β ${prefix}return [ _javascript_ ]
β ${prefix}clearall
β ${prefix}delchat
β ${prefix}mute
β ${prefix}unmute
β ${prefix}public
β ${prefix}self
β ${prefix}spam [ _teks|jumlah_ ]
β ${prefix}demoteall
β ${prefix}promoteall
β ${prefix}addcmd [ _teks reply stc_ ]
β ${prefix}delcmd [ _reply stc_ ]
β ${prefix}listcmd
β ${prefix}spamsw [ _teks|jumlah_ ]
β ${prefix}upswteks [ _teks_ ]
β ${prefix}upswlokasi [ _teks_ ]
β ${prefix}upswaudio [ _reply audio_ ]
β ${prefix}upswvoice [ _reply audio_ ]
β ${prefix}upswsticker [ _reply sticker_ ]
β ${prefix}upswimage [ _reply image with caption_ ]
β ${prefix}upswgif [ _reply gif with caption_ ]
β ${prefix}upswvideo [ _reply video with caption_ ]
β ${prefix}shutdown
β ${prefix}offline [ _alasan_ ]
β ${prefix}online
β ${prefix}exif [ _nama|author_ ]
β ${prefix}setprofile [ _reply image_ ]
β ${prefix}setname [ _teks_ ]
β ${prefix}setprefix [ _multi/nopref/prefix_ ]
β ${prefix}setbio [ _teks_ ]
β ${prefix}addsticker [ _nama_ ]
β ${prefix}delsticker [ _nama_ ]
β ${prefix}addvn [ _nama_ ]
β ${prefix}delvn [ _nama_ ]
β ${prefix}addimage [ _nama_ ]
β ${prefix}delimage [ _nama_ ]
β ${prefix}leave
β ${prefix}restart
β ${prefix}join [ _link group_ ]
β ${prefix}addrespon [ _tanya|jawab_ ]
β ${prefix}delrespon [ _nama_ ]`
}
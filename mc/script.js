//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/compagnie.minesr.com";

//https://mcapi.us/server/status?ip=GAME-FR-60.MTXSERV.COM&port=27450

$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Serveur hors ligne');
   return false;
 }
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  }
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Joueurs en ligne:</b> '+r.players.online+"</br><b>IP:</b> compagnie.minesr.com"+"</br>"+"<a href=\"https://discord.gg/BERvkAF\"><i class=\"fab fa-discord\"></i></a>");
 $('#favicon').attr('src', r.favicon);

});

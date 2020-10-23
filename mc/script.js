//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.kodle.xyz";

//https://mcapi.us/server/status?ip=

$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Serveur hors ligne');
   return false;
 }
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  }
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Joueurs en ligne:</b> '+r.players.online+"</br></br>"+"<a href=\"http://www.kodle.xyz/don\"><i class=\"fab fa-paypal\"></i></a> • <a href=\"https://discord.gg/BERvkAF\"><i class=\"fab fa-discord\"></i></a>");
 $('#favicon').attr('src', r.favicon);

});

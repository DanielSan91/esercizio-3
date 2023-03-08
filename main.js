function showAlbum() {
    var album = document.getElementById("album");
    if (album.style.display === "none") {
      album.style.display = "flex";
    } else {
      album.style.display = "none";
    }
  }

// ottieni l'elemento top-album
var topAlbum = document.getElementById("top-album");
// ottieni l'elemento recensioni
var recensioni = document.getElementById("recensioni");

// nascondi le recensioni all'avvio
recensioni.style.display = "none";

// aggiungi un gestore eventi per il clic sull'elemento top-album
topAlbum.addEventListener("click", function() {
  // verifica se le recensioni sono già visibili
  if (recensioni.style.display === "none") {
    // se le recensioni sono nascoste, visualizzale
    recensioni.style.display = "flex";
  } else {
    // altrimenti, nascondile
    recensioni.style.display = "none";
  }
});


function footer() {
  let numeriAlbum = document.querySelectorAll('img').length - 1;
  let span = document.createElement('span');
  span.classList.add('text-black');
  span.innerHTML = 'stai vedendo ' + numeriAlbum + ' album';
  document.getElementById('appendice').appendChild(span);
}

window.onload = footer()
  





  

  
  
  
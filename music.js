const songs = ["morning.wav", "together.wav", "Young Folks.wav", "jungle.wav"]


function newSongList() {
    const list = document.createElement('ol')
    for(let i = 0; i < songs.length; i++) {
       const item = document.createElement('li');
       item.appendChild(document.createTextNode(songs[i]));
       list.appendChild(item);
    }
    return list
}

const songList = document.getElementById('playlist')
songList.appendChild(newSongList());

songList.onClick = function(e) {
   const source = document.getElementById('source')
   source.src = "songs/"+e.target.innerText;

   document.querySelector('#current-song').innerText = "" `Now Playing: ${e.target.innerText}`

   const player = document.getElementById('player')
    player.load()
    player.play()
};
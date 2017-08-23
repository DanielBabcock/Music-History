console.log("music.js");

var songs = [];

songs[songs.length] = "Rocky Road to Dublin by The Dubliners on the album The Dubliners"
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Ain't No Sunshine by Bill Withers on the album Just As I Am"



var splitSongs = [];

songs.forEach(function(song){
    var splitSong = song.split("");
    // splitSong breaks up all of the songs into individual characters.
    // console.log("splitSong: ", splitSong)
    splitSongs.push(splitSong);
})


splitSongs.forEach(function(splitSong){

    splitSong.forEach(function(letter, index){
        // removes selected characters and replaces them with a blank
        if (letter === "*" || letter === "!" || letter === "@" || letter === "("){

            splitSong.splice(index, 1);
        // removes > and replaces with -
        } else if (letter === ">"){

            splitSong.splice(index, 1, "-");
        }

    })

})
    // iterates over a function once
    splitSongs.forEach(function(splitSong){

        // 
        let joinedSong = splitSong.join("");
        // joins the letters back together with the removals and additions too
        // console.log("joinedSong: ", joinedSong);

        // 
        let bySplit = joinedSong.split("by");
        // splits the "by" out of the sentence
        // console.log("bySplit: ", bySplit);

        // 
        let song = bySplit[0];
        // array 0 which is everthing before splitting out "by"
        console.log("song:", song);

        let artistAndAlbumString = bySplit[1];
        // array 1 which is everthing after splitting out "by"
        // console.log("artistAndAlbum", artistAndAlbumString);

        let artistAndAlbumArray = artistAndAlbumString.split("on the album");
        // splits bySplit array 1 at "on the album" leaving just artist and album
        // console.log("artistAndAlbumArray:",artistAndAlbumArray);

        let artist = artistAndAlbumArray[0];
        // array 0 = artist
        // console.log("artist",artist);

        let album = artistAndAlbumArray[1];
        // array 2 = album
        // console.log("album:", album);
        
        let songDiv = document.getElementById("songs");
        // =s the template because sonDiv =s the above & songs is the 
        // templates ID in index.html
        // console.log("songDiv: ", songDiv);

        // songCard =s the template has artistAndAlbumArray (array 0 artist) 
        // & (array 1 album) & (song which is bySplit array 0) in the template
        let songCard = `<div class="song">
                            <h1>Song: ${song}</h1> 
                            <p>Artist: ${artist} | Album: ${album} </p>   
                        </div>`
        // this give it the command to send to the template
        // BUT it is only sending the last song in "songs array" 
        // the += 
        songDiv.innerHTML += songCard;
});

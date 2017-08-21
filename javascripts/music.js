console.log("music.js");
// (var songs = [];) is an empty array
var songs = [];
// until we add all of these guys on lines 5-11...
songs[songs.length] = "Rocky Road to Dublin by The Dubliners on the album The Dubliners"
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Ain't No Sunshine by Bill Withers on the album Just As I Am"


// now let's create (var splitSongs = [];) because inorder to filter 
// things from "songs" we need to break them down.
var splitSongs = [];
// EXPLAIN forEach HERE!
// *****EXPLAIN forEach HERE!*****
// EXPLAIN forEach HERE! song = taco but with a word that makes sense here
songs.forEach(function(song){
    var splitSong = song.split("");
// then 
// console.log(splitSong);
// *****EXPLAIN the push here*****
    splitSongs.push(splitSong);
})
// EXPLAIN the _____ here
splitSongs.forEach(function(splitSong){
// *****EXPLAIN the ________ here*****
    splitSong.forEach(function(letter, index){
// *****EXPLAIN the ________ here*****
        if (letter === "*" || letter === "!" || letter === "@" || letter === "("){
// *****EXPLAIN the ________ here*****
            splitSong.splice(index, 1);
// *****EXPLAIN the ________ here*****        
        } else if (letter === ">"){
// *****EXPLAIN the ________ here*****
            splitSong.splice(index, 1, "-");
        }

    })
// *****EXPLAIN the ________ here*****
    splitSongs.forEach(function(splitSongs){
// *****EXPLAIN the ________ here*****
    let joinedSong = splitSong.join("");
// *****EXPLAIN the ________ here*****
        console.log("Join: ", joinedSong);


})

})

// *****FINAL NOTES: *****

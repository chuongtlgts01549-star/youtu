const videos=[

{title:"Epic Music",id:"dQw4w9WgXcQ"},
{title:"Gaming Highlights",id:"L_jWHffIx5E"},
{title:"EDM Mix",id:"fLexgOxsZu0"},
{title:"Coding Tutorial",id:"3fumBcKC6RE"},
{title:"LoFi Chill",id:"5qap5aO4i9A"},
{title:"Relax Piano",id:"2OEL4P1Rz04"},
{title:"Nature Film",id:"aqz-KE-bpKQ"},
{title:"Drone Footage",id:"hHW1oY26kxQ"}

];


function loadVideos(){

const container=document.getElementById("videos");

if(!container) return;

videos.forEach(v=>{

container.innerHTML+=`

<div class="video">

<a href="watch.html?id=${v.id}">

<img src="https://img.youtube.com/vi/${v.id}/0.jpg">

<p>${v.title}</p>

</a>

</div>

`;

});

}



function loadWatch(){

const params=new URLSearchParams(window.location.search);

const id=params.get("id");

const player=document.getElementById("player");

if(player) player.src="https://www.youtube.com/embed/"+id;



const suggestions=document.getElementById("suggestions");

if(!suggestions) return;



videos.forEach(v=>{

suggestions.innerHTML+=`

<div class="video">

<a href="watch.html?id=${v.id}">

<img src="https://img.youtube.com/vi/${v.id}/0.jpg">

<p>${v.title}</p>

</a>

</div>

`;

});

}


loadVideos();

loadWatch();

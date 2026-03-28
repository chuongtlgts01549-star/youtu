const videos=[

{title:"Epic Music",id:"dQw4w9WgXcQ"},
{title:"Gaming Highlights",id:"L_jWHffIx5E"},
{title:"Best EDM Mix",id:"fLexgOxsZu0"},
{title:"Coding Tutorial",id:"3fumBcKC6RE"},
{title:"LoFi Chill",id:"5qap5aO4i9A"},
{title:"Relaxing Piano",id:"2OEL4P1Rz04"},
{title:"Space Documentary",id:"GOAEIMx39-w"},
{title:"Nature Film",id:"aqz-KE-bpKQ"},
{title:"Drone Footage",id:"hHW1oY26kxQ"},
{title:"Motivation",id:"ZXsQAXx_ao0"}

];


function loadVideos(){

let container=document.getElementById("videos");

if(!container) return;

container.innerHTML="";

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

loadVideos();

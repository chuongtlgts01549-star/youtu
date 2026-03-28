const videos=[

{title:"Music",id:"dQw4w9WgXcQ"},

{title:"Gaming",id:"L_jWHffIx5E"}

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

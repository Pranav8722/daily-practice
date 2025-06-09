

let heading=document.createElement("h1")
heading.innerText="one piece"
console.log(heading)
heading.style.color="blue"
heading.style.fontSize="70px"
heading.style.fontWeight.align="center"



let image=document.createElement("img");
console.log(image)
image.setAttribute("src","http://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Luffy-One-Piece-Wallpaper-HD-Anime.jpg")
image.style.height="700px"
image.style.width="1000px"



let print1=document.getElementById("anime");
console.log(print1)
print1.append(heading)
print1.append(image)

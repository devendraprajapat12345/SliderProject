let main = document.getElementById("main");
let container = document.getElementById("imageContainer");
let previous = document.getElementById("previousButton");
let next = document.getElementById("next");
let images = document.getElementById("images")
let image1  = [
    "https://5.imimg.com/data5/ECOM/Default/2022/9/JK/XU/IL/152820152/1-8486c109-8156-4616-abda-92e69d807842-500x500.png",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",

    "https://5.imimg.com/data5/ECOM/Default/2022/9/JK/XU/IL/152820152/1-8486c109-8156-4616-abda-92e69d807842-500x500.png",

    "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxM7bqUhVW4EaLOR21oEaV0sj7bb05kCNDg&s",

    "https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg?s=612x612&w=0&k=20&c=t38FJQ6YhyyZGN91A8tpn3nz9Aqcy_aXolImsOXOZ34=" ,
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qYRVsovp7ZtGKAXRId0MRQdlVisR996X-A&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82Mp551tn0oWURg4NGGeYWfIEW-sjWBBzIw&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhbj92w1AUQ6YPQC_jVge05NACANqajtogg&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgQi0cwikCKmDBDmLUsC2DlHRcNYPHctvWg&s"
];

let i =0;
images.src = image1[i];

next.addEventListener("click" , function(){
     i = (i+1)%image1.length;
     images.src = image1[i];
})

previous.addEventListener("click" , function(){
     i = (i-1+image1.length)%image1.length;
     images.src = image1[i];
})


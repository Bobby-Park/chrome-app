const images = [
    "ire.jpg",
    "plane grass.jpg",
    "rock house.jpg",
    "snow house.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
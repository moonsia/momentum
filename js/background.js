/* background */

const images = [
    "image0.jpg","image1.jpg","image2.jpg","image3.jpg"
];


const randomBackGround = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${randomBackGround}`;

document.body.appendChild(bgImage);
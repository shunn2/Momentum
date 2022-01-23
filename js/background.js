const images = ["forestsunset.jpg", "illustration.jpg", "moon.jpg", "pinksky.jpg", "temple.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

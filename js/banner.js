window.onload = function () {
  let current = 0;

  const banner = document.getElementById("banner-container");
  const contents = document.querySelectorAll("#banner-content");
  const circles = document.querySelectorAll(".circle");
  const imagesList = [
    "banner_one.jpg",
    "banner_two.png",
    "banner_three.jpg",
    "banner_four.jpg",
    "banner_five.jpg",
  ];

  setInterval(() => {
    // get current content and circle
    let thisContent = contents[current];
    let thisCircle = circles[current];

    if (current == 4) {
      current = 0;
    } else {
      current++;
    }

    banner.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    // change background
    const host = window.location.href;
    banner.style.backgroundImage = `url(${host}images/${imagesList[current]})`;

    // add hidden class to current content element
    thisContent.classList.add("hidden");
    contents[current].classList.remove("hidden");

    // change green circle
    thisCircle.classList.remove("green");
    circles[current].classList.add("green");
  }, 5000);
};

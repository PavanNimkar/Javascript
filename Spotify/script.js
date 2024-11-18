console.log("Welcome to spotify");

// Var list
let songIndex = 1;
let audioElement = new Audio("songs/1.mpeg");
let masterPlay = document.querySelector("#master-play");
let myProgressBar = document.querySelector("#my-progress-bar");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.querySelectorAll(".song-item"));
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let songInfo = document.querySelector(".song-info");

const songs = [
  {
    songName: "Dil Se Dil",
    filePath: ".songs/1.mpeg",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Love You Zindagi",
    filePath: ".songs/2.mpeg",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Pasori",
    filePath: ".songs/3.mpeg",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Shakkarte Shivray",
    filePath: ".songs/4.mpeg",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Titali",
    filePath: ".songs/5.mpeg",
    coverPath: "covers/5.jpg",
  },
];

songItems.forEach((element, i) => {
  element.querySelector(".song-cover").src = songs[i].coverPath;
  element.querySelector(".song-name").innerText = songs[i].songName;
});

let songPlayIcons = Array.from(document.querySelectorAll(".song-item-play"));

let makeCurrentSongPlay = () => {
  songPlayIcons[songIndex - 1].classList.remove("fa-regular", "fa-circle-play");
  songPlayIcons[songIndex - 1].classList.add("fa-solid", "fa-pause");
};

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-solid", "fa-pause");
    // gif.style.opacity = 1;
    makeCurrentSongPlay();
    changeSongName();
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-solid", "fa-pause");
    masterPlay.classList.add("fa-regular", "fa-circle-play");
    makeAllPlay();
    gif.style.opacity = 0;
    // makeCurrentSongPlay();
  }
});

let makeAllPlay = () => {
  songPlayIcons.forEach((element) => {
    element.classList.remove("fa-solid", "fa-pause");
    element.classList.add("fa-circle-play", "fa-regular");
  });
};

songPlayIcons.forEach((element) => {
  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    songIndex = parseInt(element.id);
    makeAllPlay();
    element.classList.remove("fa-circle-play", "fa-regular");
    element.classList.add("fa-solid", "fa-pause");
    audioElement.src = `songs/${songIndex}.mpeg`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-solid", "fa-pause");
    changeSongName();
  });
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

previous.addEventListener("click", () => {
  console.log("clicked");
  if ((songIndex) => 1 && songIndex <= 5) {
    songIndex--;
    audioElement.src = `songs/${songIndex}.mpeg`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-solid", "fa-pause");
    makeAllPlay();
    makeCurrentSongPlay();
    changeSongName();
  } else {
    songIndex = 1;
    audioElement.src = `songs/${songIndex}.mpeg`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-solid", "fa-pause");
    makeAllPlay();
    makeCurrentSongPlay();
  }
});

next.addEventListener("click", () => {
  console.log(songIndex);
  if ((songIndex) => 1 && songIndex < 5) {
    console.log(songIndex);
    songIndex++;
    audioElement.src = `songs/${songIndex}.mpeg`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-solid", "fa-pause");
    makeAllPlay();
    makeCurrentSongPlay();
    changeSongName();
  } else {
    songIndex = 1;
    audioElement.src = `songs/${songIndex}.mpeg`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-solid", "fa-pause");
    makeAllPlay();
    makeCurrentSongPlay();
    // changeSongName();
  }
});

let changeSongName = () => {
  songInfo.innerText = songs[songIndex - 1].songName;
  gif.style.opacity = 1;
};

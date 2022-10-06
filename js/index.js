function playSound(e) {
	const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
	if (!audio) return; // stop the function from running all together

	audio.play();
	audio.currentTime = 0; // the audio will rewind to start
	key.classList.add("playing");
}

const removeTransition = (e) => {
	// if (e.propertyName !== "transform") return; //  skip it if it's not transform
	e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

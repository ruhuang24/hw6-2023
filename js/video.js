var video;
video = document.querySelector("#player1");
let slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");
let mute_button = document.querySelector("#mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});
//play the video
 document.querySelector("#play").addEventListener("click", function() {
	video.play();
 });

 //change volumn
 //show current volumn
slider.addEventListener('change', function(e){
	video.volume = e.currentTarget.value / 100;
	volume.textContent = e.currentTarget.value + "%";
})

//pause video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
 });

 //slow down current video speed by 10% and log new speed to console
 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("Current Speed is " + video.playbackRate);
 });

 //Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
 document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("Current Speed is " + video.playbackRate);
 });

 //Skip Ahead:Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
 document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Current Time is " + video.currentTime);
 });

 //Mute/unmute the video and update the text in the button.
 document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	mute_button.textContent = video.muted ? "Unmute" : "Mute";
 });
 //add and remove style
 document.querySelector("#vintage").addEventListener("click", function () {
	let video = document.querySelector("#player1");
	video.classList.add("oldSchool");
  });
  
  document.querySelector("#orig").addEventListener("click", function () {
	let video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
  });
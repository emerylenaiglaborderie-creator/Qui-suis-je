function toggleContent(element) {
  element.classList.toggle('active');
}

const move =document.getElementById("move");
let isFollowing = false;

move.addEventListener("click",() => {
  isFollowing = !isFollowing;
  move.style.cursor = isFollowing ? "default" : "pointer";
});

document.body.onpointermove = event => {
  if (!isFollowing) return;

  const {clientX, clientY} = event;

  move.animate({
    left:`${clientX - move.width / 2}px`,
    top: `${clientY - move.height / 2}px`
  }, { duration: 100, fill: "forwards" });
};
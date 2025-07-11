const textarea = document.getElementById("textareaa");
const liveCount = document.querySelector(".livecount");

const maxChars = 100;

textarea.addEventListener("input", () => {
  const count = textarea.value.length;
  let emoji = "";

  if (count <= 50) {
    emoji = "🟢";
  } else if (count <= maxChars) {
    emoji = "🟡";
  } else {
    emoji = "🔴";
  }

  liveCount.innerHTML = `Character count: ${count} / ${maxChars} ${emoji}`;

  if (count > maxChars) {
    liveCount.style.color = "red";
  } else {
    liveCount.style.color = "blue";
  }
});

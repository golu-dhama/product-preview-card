// ================= AUDIO =================

const clickSound = new Audio("loud.wav");
clickSound.volume = 1.0;

// ================= ELEMENTS =================

const button = document.querySelector("button");
const cartMessage = document.getElementById("cartMessage");

const originalBtnText = button.textContent;


// ================= CLICK EVENT =================

button.addEventListener("click", () => {

  // Sound
  clickSound.currentTime = 0;
  clickSound.play();

  // 1️⃣ Please wait
  button.textContent = "⏳ Please wait...";
  button.disabled = true;

  // 2️⃣ After 1.5s → Done
  setTimeout(() => {
    button.textContent = "✅ Done";
  }, 1500);

  // 3️⃣ Shortly after Done → reset button + show popup
  setTimeout(() => {
    button.textContent = originalBtnText;
    button.disabled = false;

    cartMessage.classList.add("show");
  }, 1900);

  // 4️⃣ Hide popup
  setTimeout(() => {
    cartMessage.classList.remove("show");
  }, 4000);

});

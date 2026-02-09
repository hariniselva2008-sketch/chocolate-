let isOpened = false;
let biteCount = 0;

function goToPage(pageNo) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + pageNo).classList.add("active");
}

function openChocolate() {
  let cover = document.querySelector(".cover");
  let msg = document.getElementById("msg");
  let nextBtn = document.getElementById("nextBtn");

  if (!isOpened) {
    cover.style.transform = "translateY(-100%)";
    msg.innerHTML = "Now bite bite pannunga 😋🍫";
    isOpened = true;
    return;
  }

  biteChocolate();
  
  if (biteCount >= 4) {
    msg.innerHTML = "Chocolate full ah saptaachu 😭🍫💖";
    nextBtn.classList.remove("hidden");
  }
}

function biteChocolate() {
  biteCount++;

  let bar = document.getElementById("bar" + biteCount);
  if (bar) {
    bar.classList.add("bite");
  }
}

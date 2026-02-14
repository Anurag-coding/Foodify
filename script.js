function goLogin() {
  window.location.href = "login.html";
}

function goHome() {
  window.location.href = "index.html";
}

/* WAIT FOR DOM LOAD */
document.addEventListener("DOMContentLoaded", function () {

  /* SCROLL */
  const cards = document.querySelectorAll(".food-card");
  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      if (card.getBoundingClientRect().top < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });

  /* RIPPLE EFFECT */
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function () {
      btn.classList.remove("ripple");
      void btn.offsetWidth;
      btn.classList.add("ripple");
    });
  });

});


/* MENU TAB SWITCH */
function openMenu(id, element) {
  document.querySelectorAll(".menu-items").forEach(menu => {
    menu.classList.remove("active");
  });

  document.querySelectorAll(".menu-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  const selected = document.getElementById(id);
  if (selected) selected.classList.add("active");

  if (element) element.classList.add("active");
}

function toggleItem(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.toggle("active");
  } else {
    console.error("ID not found: " + id);
  }
}







const toggle = document.querySelector(".menu-toggle"),
  nav = document.querySelector(".navlinks");
toggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
  toggle.textContent = opened ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }),
);
document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const subject = encodeURIComponent(
    "Заявка на выступление — " + f.get("name"),
  );
  const body = encodeURIComponent(
    "Имя: " +
      f.get("name") +
      "\nEmail: " +
      f.get("email") +
      "\n\nКомментарий:\n" +
      f.get("message"),
  );
  document.getElementById("form-note").textContent =
    "Открываем почтовую программу для отправки заявки…";
  window.location.href =
    "mailto:leditsound@yandex.ru?subject=" + subject + "&body=" + body;
});

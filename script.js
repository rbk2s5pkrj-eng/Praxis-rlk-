const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navigation.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }),
  );
}

document.querySelector("#map-activate")?.addEventListener("click", (event) => {
  const panel = event.currentTarget.closest(".map-consent");
  panel.classList.add("is-active");
  panel.querySelector(".map-copy").innerHTML =
    '<div><span class="eyebrow">Demoansicht aktiviert</span><h3>Allgemeine Kartenansicht Münster</h3><p>In einer realen Website würde jetzt Google Maps nach Ihrer Einwilligung geladen. Für diese fiktive Anschrift wird bewusst kein fremdes Gebäude markiert.</p><a class="button" href="https://www.google.com/maps/search/?api=1&query=M%C3%BCnster" target="_blank" rel="noopener noreferrer">Google Maps öffnen ↗</a></div>';
});

const filterButtons = document.querySelectorAll(".filter-button");
const materialCards = document.querySelectorAll(".material-card");
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    materialCards.forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.category !== button.dataset.filter;
    });
  }),
);

document
  .querySelectorAll("[data-print]")
  .forEach((button) => button.addEventListener("click", () => window.print()));

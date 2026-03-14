
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const map = {general:"Website inquiry", residential:"Residential inquiry", commercial:"Commercial inquiry", probate:"Probate inquiry"};
  document.querySelectorAll("select[data-subject-sync]").forEach(sel => {
    const form = sel.closest("form");
    const input = form ? form.querySelector('input[name="subject"]') : null;
    const sync = () => { if (input) input.value = map[sel.value] || "Website inquiry"; };
    sel.addEventListener("change", sync); sync();
  });
});

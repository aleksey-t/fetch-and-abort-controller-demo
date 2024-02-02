export default function renderData(data) {
  document.querySelector(".output").innerHTML +=
    `<div class="data">${data}</div>`;
}

export default function updateStatus(id, className, statusText) {
  document.querySelector(`#status-${id}`).innerHTML =
    `<div style="display: flex; gap: 10px; align-items: center;"><div class="status ${className}"></div>${statusText}</div>`;
}

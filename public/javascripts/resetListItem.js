import updateStatus from "./updateStatus.js";

export default function resetListItem(id, status, message) {
  document.querySelector("#sbmt" + `-${id}`).classList.remove("hidden");
  document.querySelector("#cancel" + `-${id}`).classList.add("hidden");
  document.querySelector("#spinner" + `-${id}`).classList.add("hidden");
  updateStatus(id, status, message);
}

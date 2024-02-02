import updateStatus from "./updateStatus.js";

export default function setListItemToPendingStatus(id) {
  updateStatus(id, "pending", "Загрузка");
  document.querySelector("#sbmt" + `-${id}`).classList.add("hidden");
  document.querySelector("#cancel" + `-${id}`).classList.remove("hidden");
  document.querySelector("#spinner" + `-${id}`).classList.remove("hidden");
}

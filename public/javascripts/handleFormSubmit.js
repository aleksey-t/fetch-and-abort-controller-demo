import setListItemToPendingStatus from "./setListItemToPendingStatus.js";
import resetListItem from "./resetListItem.js";
import renderData from "./renderData.js";

export default function handleFormSubmit(id, endpoint) {
  const controller = new AbortController();
  setListItemToPendingStatus(id);

  function cancelLoading() {
    controller.abort();
  }

  document
    .querySelector("#cancel" + `-${id}`)
    .addEventListener("click", cancelLoading);

  fetch(`http://localhost:3000/${endpoint}`, {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      resetListItem(id, "success", "Данные получены");
      document
        .querySelector("#cancel" + `-${id}`)
        .removeEventListener("click", cancelLoading);
      renderData(data);
    })
    .catch((err) => {
      document
        .querySelector("#cancel" + `-${id}`)
        .removeEventListener("click", cancelLoading);
      resetListItem(id, "error", `${err.name}: ${err.message}`);
    });
}

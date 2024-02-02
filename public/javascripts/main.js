import updateStatus from "./updateStatus.js";
import handleFormSubmit from "./handleFormSubmit.js";

const dataURLs = [
  {
    id: 1,
    endpoint: "big-file",
  },
  {
    id: 2,
    endpoint: "another-file",
  },
];

dataURLs.forEach(({ id, endpoint }) => {
  updateStatus(id, "not-started", "не начато");
  document
    .querySelector(`#sbmt-${id}`)
    .addEventListener("click", () => handleFormSubmit(id, endpoint));
});

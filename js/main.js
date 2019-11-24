const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const jobSection = document.querySelector(".job-section");
const formSection = document.querySelector("form");
let selectedDescription;

jobSection.onclick = (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    openModal(target);
  }
  let targetDescription = target.querySelector(".description");
  if (targetDescription) {
    open(targetDescription);
  }
};
function open(description) {
  if (description.classList.contains("open")) {
    description.classList.remove("open");
    return;
  }
  if (selectedDescription) {
    selectedDescription.classList.remove("open");
  }
  selectedDescription = description;
  selectedDescription.classList.add("open");
}

// Modal
// When the user clicks on <span> (x), close the modal
function openModal(btn) {
  modal.style.display = "block";
}
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

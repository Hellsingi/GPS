const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const formSection = document.querySelector("form");

const jobSection = document.querySelector(".job-section");
let selectedDescription;

// const passImgArray = document.querySelectorAll('.passive');
// passImgArray.forEach(item => {
//   let imgS = item.querySelector('img');
//   imgS.src = imgS.src +'pass.png';
// })
let selectedImage;
const imgSection = document.querySelector(".img-section");
console.log("imgSection", imgSection);
imgSection.onclick = event => {
  const target = event.target;
  const closestDiv = target.closest("div");
  if (closestDiv.classList.contains("activeImg")) return;
  const imsss = document.querySelectorAll('.img-section__item');
  imsss.forEach(item => {
    console.log(item);
    if(item.classList.contains("activeImg")){
      item.classList.remove('activeImg');
      let imageDel = item.querySelector('img');
      console.log('item',item);
      console.log('imageDel',imageDel);
      console.log('item.srcitem.src imageDel.src',imageDel.src);
      imageDel.src = target.src.slice(0, -7) + "pas.png";
      item.classList.add("passive");
    }
  });
  activeImage(closestDiv, target);
};

function activeImage(closestDiv, target) {
  console.log(selectedImage, "selectedImage");
  closestDiv.classList.remove("passive");
  closestDiv.classList.add("activeImg");
  if (selectedImage) {
    selectedImage.classList.remove("activeImg");
  }
  selectedImage = target;
  selectedImage.src = target.src.slice(0, -7) + "act.png";
}

jobSection.onclick = event => {
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
window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

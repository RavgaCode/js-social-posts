// Costruisco il mio array di object relativi ai singoli post
const postArray = [
  {
    id: 1,
    profileImg: "https://unsplash.it/300/300?image=",
    name: "Gianni",
    lastName: "Morandi",
    date: "06-20-2022",
    text: "Fatti mandare dalla mamma a prendere il latte",
    image: null,
    likesNumber: 42,
  },
  {
    id: 2,
    profileImg: "https://unsplash.it/300/300?image=",
    name: "Cristoforo",
    lastName: "Colombo",
    date: "06-20-2022",
    text: "Non so voi, ma a me questa non sembra l'India",
    image: "https://unsplash.it/300/300?image=15",
    likesNumber: 1492,
  },
  {
    id: 3,
    profileImg: "https://unsplash.it/300/300?image=",
    name: "John",
    lastName: "Lennon",
    date: "06-20-2022",
    text: "Imagine all the people, livin' for today, tuturutuuuu",
    image: null,
    likesNumber: 68,
  },
  {
    id: 4,
    profileImg: "https://unsplash.it/300/300?image=",
    name: "Steve",
    lastName: "Jobs",
    date: "06-20-2022",
    text: "Stay hungry, stay foolish",
    image: "https://unsplash.it/300/300?image=16",
    likesNumber: 2005,
  },
];

const postContainer = document.getElementById("container");

// Imposto il ciclo for per stampare l'array del post in pagina
for (let i = 0; i < postArray.length; i++) {
  const thisPost = postArray[i];
  console.log(thisPost);
  // Dichiaro una variabile contenente il template da stampare
  const postToPrint = `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          ${
            thisPost.image === null
              ? ""
              : getProfileImageHtml(
                  thisPost.profileImg,
                  thisPost.id,
                  thisPost.name,
                  thisPost.imageLastName
                )
          }
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${thisPost.name} ${
    thisPost.lastName
  }</div>
          <div class="post-meta__time">${thisPost.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${thisPost.text}
    </div>
    <div class="post__image">
      ${
        thisPost.image === null ? "" : getImageHtml(thisPost.image, thisPost.id)
      }
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${
            thisPost.id
          }">
            <i
              class="like-button__icon fas fa-thumbs-up"
              aria-hidden="true"
            ></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-${thisPost.id}" class="js-likes-counter">${
    thisPost.likesNumber
  }</b> persone
        </div>
      </div>
    </div>
  </div>
  `;
  //   Concateniamo il template all'html del div container
  postContainer.innerHTML += postToPrint;
}

// Imposto l'event listener a tutti i tasti like
const allLikeButtons = document.querySelectorAll(".js-likes");
const allLikeTexts = document.querySelectorAll(".js-likes-counter");
// Determino un ciclo for che cicla tutti like button
for (let i = 0; i < allLikeButtons.length; i++) {
  const thisLikeButton = allLikeButtons[i];
  thisLikeButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Aggiungo la classe liked al click del tasto
    let likeLabel = thisLikeButton.querySelector(".like-button__label");
    likeLabel.classList.add("like-button--liked");
    // Aumento il numero della conta dei like
    const relatedNumberText = allLikeTexts[i];
    let relatedNumber = parseInt(relatedNumberText.innerHTML);
    // Aumento la conta di 1 e stampo in pagina
    relatedNumber++;
    relatedNumberText.innerHTML = relatedNumber;
  });
}

// Functions
function getProfileImageHtml(url, id, name, lastName) {
  const imageName = name;
  const imageLastName = lastName;
  const imageUrl = `<img
  class="profile-pic"
  src="${url + id}"
  alt="${name} ${lastName}"
/>`;
  return imageUrl;
}
function getImageHtml(url) {
  const imageUrl = `<div class="post__image">
  <img src="${url}" alt="" />
</div>`;
  return imageUrl;
}
function likeIncrease() {
  let likeLabel = document.querySelector(".like-button__label");
  likeLabel.classList.add("like-button--liked");
  let likeCounter = parseInt(
    document.querySelector(".js-likes-counter").innerText
  );
  likeCounter++;
}

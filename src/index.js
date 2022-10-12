import './styles/index.css'; // добавьте импорт главного файла стилей

const balaLink = document.querySelector(".balapanlar");
const popup = document.querySelector(".popup");
const buttonCancel = document.querySelector(".popup__button-cancel");

balaLink.addEventListener('click', () => {
  openPopup(popup);
});

buttonCancel.addEventListener('click', () => {
  closePopup(popup);
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_active");
    closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    const openedPopup = document.querySelector(".popup_active");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", closeByOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("mousedown", closeByOverlay);
}

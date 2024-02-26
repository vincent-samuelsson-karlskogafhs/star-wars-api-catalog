import {
  PAGINATION_LEFT_ICON,
  PAGINATION,
  PAGINATION_LEFT_ICON,
  PAGINATION_RIGHT_ICON,
  contentCharacters,
  charactersDetails,
} from "./constant.js";

// du har gömt att skapa elementen för funtionerna i DOM. , du behöver alla elemnt i DOM för att få API - gör efter lunch

// GLOBAL VARIABLES
const baseURL = "https://swapi.dev/api";
let currentCharactersObject;
let currentPage = 1;
let totalPages;
let displayCharacters;

// Register EVENT listeners

contentCharacters.addEventListener("click", (Event) =>
  handleOnCharactersClick(Event)
);
PAGINATION.addEventListener("click", (Event) => handlPaginationOnClick(Event));

// Making inital request

fetchCharacters(`${baseURL}/people`).then((contentCharacters) => {
  currentCharactersObject = currentCharactersObject;
  totalPages = Math.floor(currentCharactersObject.count / 10);
});
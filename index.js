// känns som att jag har missat en massa här - evnt lagt in fel - kanske borde döpa paginations så att det blir rätt i min HTML

import {
  PAGINATION_LEFT_ICON,
  PAGINATION,
  PAGINATION_LEFT_ICON,
  PAGINATION_RIGHT_ICON,
  contentCharacters,
  charactersDetails,
  character_Footer_Pagination,
} from "./constant.js";
import {
  createCharacterInfoElements,
  createNavBarPagination,
} from "./function.js";

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
  displayCharacters = displayCharacters.results;

  createCharacterInfoElements(charactersDetails.results);
  createNavBarPagination(currentPage, totalPages);
});

// functions needed in this file, they need access to the "global" variables

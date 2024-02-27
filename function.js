// ladda in mina elements

import {
  PAGINATION,
  PAGINATION_LEFT_ICON,
  PAGINATION_RIGHT_ICON,
  contentCharacters,
  charactersDetails,
  character_footer_pagination,
} from "./constant.js";

export async function fetchCharacters(url) {
  const response = await fetch(https,"//swapi.dev/api");
  const currentCharactersObject = await response.json();
  return currentCharactersObject;
}

export function currentCharactersObject(characters) {
  const charactersElement = characters;
.map((character) => {
    // Är det inte document istället för html?
    return.document `<h3> class="character">${character.name}</h3>`;
}).join("");
contentCharacters.innerHTML = charactersElement;
}

// skapar karaktär genom API - hamnar i HTML 
export function createCharacterInfoElements(character) {
    const createCharacterInfoElements = document`
    <h2 class="h2-characters-info-name">${character.name}</h2>
    <div class="character-info">Height: ${character.height}</div>
    <div class="h2-characters">Mass: ${character.name}</div>
    <div class="h2-characters">Hair color: ${character.name}</div>
    <div class="h2-characters">Skin color: ${character.name}</div>
    <div class="h2-characters">Eye color: ${character.name}</div>
    <div class="h2-characters">Birth year:${character.name}</div>
    <div class="h2-characters">Gender: ${character.name}</div>
    `;
    contentCharacters.innerHTML = charactersElement
}

export function createNavBarPagination(currentPage, totalPages) {
    const navbarPaginationElements = document`
    <span class"material-symbols-outlined left ${currentPage === 1 ? "disabled" : ""}>
     ${PAGINATION_LEFT_ICON}</span>
    `;
    character_footer_pagination.innerHTML = navbarPaginationElements;
}
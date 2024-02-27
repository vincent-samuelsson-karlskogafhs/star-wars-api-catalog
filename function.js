// ladda in mina elements

import {
  PAGINATION,
  PAGINATION_LEFT_ICON,
  PAGINATION_RIGHT_ICON,
  contentCharacters,
  charactersDetails,
  character_footer_pagination,
} from "./constant.js";

// Känns som att jag borde lägga in swapi.dev i fetch ?
export async function fetchCharacters(url) {
  const response = await fetch(https, "//swapi.dev/api");
  const currentCharactersObject = await response.json();
  return currentCharactersObject;
}

export function currentCharactersObject(characters) {
  const charactersElement = characters
    .map((character) => {
      const id = character.url
        .split("/")
        .filter((el) => el !== "")
        .pop();
      // Bygg upp HTML-elementet korrekt
      return `<h3 class="character">${character.name}</h3>`;
    })
    .join(""); // Sammanfoga de skapade HTML-elementen till en enda sträng

  // Uppdatera innehållet i 'contentCharacters' med de skapade HTML-elementen
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
  contentCharacters.innerHTML = charactersElement;
}

// Känns som att jag saknar något här- det är väll har alla knappar ska fungera ? har jag glömt att importera?

export function createNavBarPagination(currentPage, totalPages) {
  const navbarPaginationElements = document;
  character_footer_pagination.innerHTML = navbarPaginationElements;
}

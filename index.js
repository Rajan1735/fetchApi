document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.cards-container');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(characters => {
            renderCharacters(characters.results);
        });

    function renderCharacters(characters) {
        for (let i = 0; i < characters.length; i += 2) {
            const row = document.createElement('div');
            row.classList = 'row';

            for (let j = i; j < i + 2 && j < characters.length; j++) {
                const character = characters[j];

                const div = document.createElement('div');
                const image = document.createElement('img');
                const name = document.createElement('h3');
                const species = document.createElement('h3');
                const like = document.createElement('button');

                div.classList = 'card';
                image.classList = 'card-img';
                like.classList = 'empty';
                image.src = character.image;
                name.innerText = `Name: ${character.name}`;
                species.innerText = `Species: ${character.species}`;
                like.textContent = 'like';

                div.appendChild(image);
                div.appendChild(name);
                div.appendChild(species);
                div.appendChild(like);
                row.appendChild(div);
            }

            cardsContainer.appendChild(row);
        }
    }
});
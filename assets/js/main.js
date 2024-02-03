

const characterList = document.getElementById('characterList');
const laodButton = document.getElementById('Buttonload');
let pages = 1;


const types = {
  jedi: ["Luke Skywalker", "Obi-Wan Kenobi", "Anakin Skywalker", "Yoda"],
  rebels: ["Leia Organa", "Biggs Darklighter", "Chewbacca", "Han Solo", "Wedge Antilles", "Jek Tono Porkins"],
  sith: ["Darth Vader", "Palpatine"],
  droid: ["C-3PO", "R2-D2", "R5-D4"],
  humans: ["Owen Lars", "Beru Whitesun lars", "Wilhuff Tarkin"],
  bunnyHunter:["Greedo", "Jabba Desilijic Tiure"]
}

loadCharecter(pages);

function loadCharecter(pages) {
  function convert(peopleSW) {
    // Verificar o tipo com base no nome da API
    let tipo = "";
    for (const key in types) {
      if (types[key].includes(peopleSW.name)) {
        tipo = key;
        break;
      }
    }
    return `
    <li class="licharacter ${tipo}">
      <span class="name">${peopleSW.name}</span>
      <div div class="detail">
        <ul class="types ${tipo}">
            <li class="type">Data: ${peopleSW.birth_year}</li>
            <li class="type">${tipo}</li>
        </ul>
        <img src="assets/img/${peopleSW.name}.png" alt="${peopleSW.name}">
      </div>
    </li>`

  }

  SWAPI.getCharecter(pages).then((listStarWars = []) => {

    const newlist = listStarWars.map((peopleSW) => {
      return convert(peopleSW)

    })
    const newHtml = newlist.join('')
    characterList.innerHTML += newHtml;

  })
}


laodButton.addEventListener('click', () => {
  pages++;
  loadCharecter(pages);
})
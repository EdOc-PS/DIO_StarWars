

const characterList = document.getElementById('characterList');


SWAPI.getCharecter(0, 10).then((listStarWars = []) => {

  const newlist = listStarWars.map((peopleSW)=>{
    return convert(peopleSW)

  })

  const newHtml = newlist.join('')
  characterList.innerHTML = newHtml;

  })
  
 

function convert(peopleSW) {
  return `
  <li class="licharacter">
    <span class="name">${peopleSW.name}</span>
    <div div class="detail">
      <ul class="types">
          <li class="type">Rebelde</li>
          <li class="type">Jedi</li>
      </ul>
      <img src="assets/img/luke.png" alt="${peopleSW.name}">
    </div>
  </li>`

}
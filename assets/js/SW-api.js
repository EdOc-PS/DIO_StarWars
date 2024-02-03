const SWAPI = {}

SWAPI.getCharecter = (pages) => {

    const url = `https://swapi.dev/api/people?page=${pages}`;
    return  fetch(url)
      .then((response) => response.json())
      .then(jBody => jBody.results)
      .catch((err) => console.error(err))
      .finally(() => console.log('done'))
}

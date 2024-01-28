const SWAPI = {}

SWAPI.getCharecter = (offset, limit) => {

    const url = `https://swapi.dev/api/people?offset=${offset}&limit=${limit}`;
    return  fetch(url)
      .then((response) => response.json())
      .then(jBody => jBody.results)
      .catch((err) => console.error(err))
      .finally(() => console.log('done'))
}
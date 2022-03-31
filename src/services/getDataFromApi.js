// VER SI LUEGO CAMBIO LOS NOMBRES:
export async function getAllPokemon(page) {
  return new Promise((resolve, reject) => {
    fetch(page)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
}

export async function getPokemon(page) {
  return new Promise((resolve, reject) => {
    fetch(page)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
}

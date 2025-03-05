import "../styles/style.css";
import "../styles/modern-normalize.css";

export default function Cards() {
  let selectedPokemons = [];

  const selectPokemons = (iterator = 0) => {
    while (iterator < 6) {
      const randomNum = Math.floor(Math.random() * 150) + 1;
      if (selectedPokemons.includes(randomNum)) {
        selectPokemons(iterator);
        return;
      }
      selectedPokemons.push(randomNum);
      iterator += 1;
    }
  };

  selectPokemons();

  async function getSprite() {
    let iterator = 0;
    while (iterator < 6) {
      const pokeData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemons[iterator]}/`
      );
      const pokeJson = await pokeData.json();
      const imgUrl = pokeJson.sprites.front_default;
      const imageCont = document.querySelector(`.img-cont-${iterator + 1}`);
      imageCont.src = imgUrl;
      iterator += 1;
    }
  }
  getSprite();
  return (
    <div className="cards-container">
      <div className="card-1 card">
        <img src="" alt="pik" className="img-cont-1" />
      </div>
      <div className="card-2 card">
        <img src="" alt="pik" className="img-cont-2" />
      </div>
      <div className="card-3 card">
        <img src="" alt="pik" className="img-cont-3" />
      </div>
      <div className="card-4 card">
        <img src="" alt="pik" className="img-cont-4" />
      </div>
      <div className="card-5 card">
        <img src="" alt="pik" className="img-cont-5" />
      </div>
      <div className="card-6 card">
        <img src="" alt="pik" className="img-cont-6" />
      </div>
    </div>
  );
}

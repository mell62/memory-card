import "../styles/style.css";
import "../styles/modern-normalize.css";

export default function Cards() {
  async function getSprite() {
    const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    const pokeJson = await pokeData.json();
    const imgUrl = pokeJson.sprites.front_default;
    const imageCont = document.querySelector(".img-cont");
    imageCont.src = imgUrl;
  }
  getSprite();
  return (
    <div className="cards-container">
      <div className="card-1 card">
        <img src="" alt="pik" className="img-cont" />
      </div>
      <div className="card-2 card"></div>
      <div className="card-3 card"></div>
      <div className="card-4 card"></div>
      <div className="card-5 card"></div>
      <div className="card-6 card"></div>
    </div>
  );
}

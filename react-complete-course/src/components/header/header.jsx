import headerImg from "../../assets/react-core-concepts.png";
import "./header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core", "Important"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const index = getRandomInt(reactDescriptions.length);
  const description = reactDescriptions[index];
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;

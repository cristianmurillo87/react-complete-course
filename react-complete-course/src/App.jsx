import headerImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core", "Important"];

export const CORE_CONCEPTS = [
  {
    img: componentImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components."
  },
  {
    img: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
  },
  {
    img: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them."
  },
  {
    img: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update."
  }
];

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

function CoreConcept({ title, description = "No description", img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <div id="core-concepts">
          <ul>
            {/* Longer props syntax */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].img}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].img}
            />
            {/* Shorter props syntax */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

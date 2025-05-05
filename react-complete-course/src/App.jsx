import Header from "./components/header/header";
import CoreConcept from "./components/core-concept/core-concept";
import TabButton from "./components/tab-button";
import { CORE_CONCEPTS } from "./data";

function App() {
  const handleSelect = () => {
    console.log("Tab button clicked!!");
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
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
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onButtonClick={handleSelect}>Components</TabButton>
            <TabButton onButtonClick={handleSelect}>JSX</TabButton>
            <TabButton onButtonClick={handleSelect}>Props</TabButton>
            <TabButton onButtonClick={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

import Header from "./components/header/header";
import CoreConcept from "./components/core-concept/core-concept";
import TabButton from "./components/tab-button";
import { CORE_CONCEPTS } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please select a topic");

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
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
            <TabButton onButtonClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onButtonClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onButtonClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton onButtonClick={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
        </section>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;

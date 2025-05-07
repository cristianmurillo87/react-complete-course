import Header from "./components/header/header";
import CoreConcept from "./components/core-concept/core-concept";
import TabButton from "./components/tab-button";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const coreConcepts = ["components", "jsx", "props", "state"];

  const [selectedTopic, setSelectedTopic] = useState();

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
            {CORE_CONCEPTS.map((conceptItem) => {
              return <CoreConcept key={conceptItem.title} {...conceptItem} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {coreConcepts.map((concept) => {
              return (
                <TabButton
                  key={concept}
                  isSelected={selectedTopic === concept}
                  onButtonClick={() => handleSelect(concept)}
                >
                  {EXAMPLES[concept].title}
                </TabButton>
              );
            })}
          </menu>

          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

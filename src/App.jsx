import Accordtion from "./components/ui/Accordtion";
import Searchbeal from "./components/ui/Searchbeal";

function App() {
  return (
    <main>
      <Accordtion.Root>
        <Accordtion.Item id={1} title="what is js do ?">
          <Accordtion.Title>this is bast pattern !</Accordtion.Title>
          <Accordtion.Content>
            <h3>yes this is bast</h3>
            <h3>thank you!</h3>
          </Accordtion.Content>
        </Accordtion.Item>

        <Accordtion.Item id={2} title="what is js do ?">
          <Accordtion.Title>next course work the props render</Accordtion.Title>
          <Accordtion.Content>
            <h3>ok l't go</h3>
          </Accordtion.Content>
        </Accordtion.Item>
      </Accordtion.Root>

      <Searchbeal
        items={[
          { id: 1, item: "hello world" },
          {
            id: 1,
            item: "hello coding javascirpt !",
          },
        ]}
      >
        {(item) => <span>
          {item.item}
          </span>}
      </Searchbeal>
      <Searchbeal items={["item 1", "item 2"]}>{(item) => item}</Searchbeal>
    </main>
  );
}

export default App;

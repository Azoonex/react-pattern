import Accordtion from "./components/ui/Accordtion.jsx";

function App() {
  return (
    <main>
      <Accordtion.Root>
        <Accordtion.Item id={1} title="what is js do ?">
          <h1>js bast the language for prograing !</h1>
        </Accordtion.Item>
        <Accordtion.Item
          id={2}
          title={"How work the and use the ReactJs ? "}
        >
          <h1>React js work for javascript !</h1>
        </Accordtion.Item>
      </Accordtion.Root>
    </main>
  );
}

export default App;

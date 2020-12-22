import "./App.css";
import Header from "./components/header";
import Calendar from "./components/calendar";
import Entry from "./components/entry";

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Entry />
    </div>
  );
}

export default App;

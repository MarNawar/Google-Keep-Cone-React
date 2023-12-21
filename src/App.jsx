import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Input from "./components/Input";

function App() {
  // Render main components: Nav, Sidebar, Input, and Notes
  return (
    <>
      {/* Navigation component */}
      <Nav />
      {/* Sidebar component */}
      <Sidebar />
      {/* Input component */}
      <Input />
      {/* Notes component */}
      <Notes />
    </>
  );
}

export default App;

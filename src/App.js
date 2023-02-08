import Form from "./components/Form";
import Notes from "./components/Notes";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-300 py-6 px-10 sm:py-12">
        <div className="mb-6">
          <div className="mb-6 flex-col text-center">
            <h1 className="pb-2 text-2xl text-gray-400">NotesApp</h1>
            <Search />
          </div>
          <Form />
        </div>
        <Notes />
      </div>
    </div>
  );
}

export default App;

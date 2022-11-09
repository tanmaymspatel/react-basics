import Header from "./core/components/Header";
import Sidebar from "./core/components/Sidebar";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="d-flex h-100">
      <aside id="sidebar" className="h-100 d-flex flex-column bg-secondary shadow-lg text-light">
        <Sidebar />
      </aside>
      <div className="flex-grow-1 d-flex flex-column">
        <header id='header' className="d-flex align-items-center px-4 bg-info">
          <Header />
        </header>
        <main className="flex-grow-1 bg-primary p-4">
          <Routing />
        </main>
      </div>
    </div>
  );
}

export default App;

import Header from "./core/components/Header";
import Sidebar from "./core/components/Sidebar";
import Routing from "./Routing/Routing";

/**
 * @name App
 * @description To render sidebar, header and to apply routing  
 * @returns App component
 */
function App() {
  return (
    <div className="d-flex h-100">
      <aside id="sidebar" className="h-100 d-flex flex-column bg-secondary text-light">
        <Sidebar />
      </aside>
      <div className="flex-grow-1 d-flex flex-column">
        <header id='header' className="d-flex align-items-center px-4 bg-info flex-shrink-0">
          <Header />
        </header>
        <main className="d-flex flex-column flex-grow-1 bg-primary p-4 overflow-hidden">
          <Routing />
        </main>
      </div>
    </div>
  );
}

export default App;

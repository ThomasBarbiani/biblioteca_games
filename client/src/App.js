
import Add from "./pages/Add";
import Games from "./pages/Games"
import Update from "./pages/Update"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

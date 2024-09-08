import "./App.css";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
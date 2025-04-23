import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

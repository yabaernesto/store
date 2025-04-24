import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

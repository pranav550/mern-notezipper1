import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyBlog from "./screens/MyBlog/MyBlog";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

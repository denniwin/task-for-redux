import { Routes, Route } from "react-router-dom";
import Footer from "./layout/components/Footer";
import Header from "./layout/components/Header";
import PostsList from "./components/pages/post-list/PostsList";
import NotFoundPage from "./components/pages/NotFoundPage";
import About from "./components/pages/About";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AboutUser from "./components/pages/AboutUser";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/postslist" element={<PostsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/" element={<AboutUser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

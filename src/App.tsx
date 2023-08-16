import {Routes, Route} from "react-router-dom";
import Footer from "./layout/components/Footer";
import Header from "./layout/components/Header";
import PostsList from "./pages/post-list/PostsList";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AboutUser from "./pages/AboutUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/postslist" element={<PostsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutuser" element={<AboutUser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

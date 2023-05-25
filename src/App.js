import GlobalStyle from "GlobalStyle";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import Header from "components/common/Header";
import ArtWorks from "pages/artworks/ArtWorks";
import Profile from "pages/profile/Profile";
import { useState } from "react";

function App() {
  const [ishome, setIshome] = useState("");

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [ishome]);

  return (
    <div className="App">
      <GlobalStyle />

      <BrowserRouter>
        <Header ishome={ishome} />
        <Routes>
          <Route path="/" element={<Home setIshome={setIshome} />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

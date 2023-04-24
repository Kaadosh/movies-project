import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Movie />
      <Footer />
    </>
  );
}

export default App;

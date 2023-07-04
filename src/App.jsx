import { useState } from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/home";
import MenageTasks from "./pages/menageTasks/MenageTAsks";

/*
  Home page je po default-u ukljucena
  Ako je isHomePage true onda prikazujemo home page komponentu i sakrivamo menage tasks komponentu
  Ako je isHomePage false onda prikazujemo menage tasks komponentu i sakrivamo home page komponentu

  1. isHomePage je true
  2. Kliknemo da dugme manage tasks
  3. Pozivamo handleOnClick funkciju i setujemo isHomePage na false
  4. App komponenta se update-uje i home page se sakriva a manage tasks se prikazuje
  5. Kliknemo ponovo na dugme manage tasks
  6. Ponovo pozivamo handleOnClick i setujemo isHomePage na true 
  7. App komponenta se update-uje i home page se prikazuje a manage tasks se sakriva
  8. ciklus se ponavlja daljim klikanjem na button


*/

function App() {
  const [isHomePage, setIsHomePage] = useState(true);

  function handleOnClick() {
    setIsHomePage(!isHomePage);
  }

  return (
    <>
      <Nav
        onClick={handleOnClick}
        btnText={isHomePage ? "Menage Tasks" : "Home pagea"}
      />

      <main className="container">
        {isHomePage ? <Home /> : <MenageTasks />}
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;

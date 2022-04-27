import "./App.css";
import Header from "./components/header/Header";
import MainMenu from "./components/mainMenu/MainMenu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div dir="rtl" className="app">
      <Header />
      <MainMenu />
      <Footer />
    </div>
  );
}

export default App;

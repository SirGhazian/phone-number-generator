import "./App.css";
import ThemeController from "./components/themeController";
import MainGenerator from "./components/mainGenerator";
import CreditsFooter from "./components/creditsFooter";

function App() {
  return (
    <>
      <ThemeController />
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <MainGenerator />
        <CreditsFooter />
      </main>
    </>
  );
}

export default App;

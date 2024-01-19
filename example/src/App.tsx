import logo from "./logo.svg";
import "./App.css";
import { LitteraService, Trans, makeTranslations } from "./config";

function App() {
  return (
    <LitteraService initialLocale="no_NO">
      <div className="App">
        <Header />
      </div>
    </LitteraService>
  );
}

// const useTrans = makeTranslations({
//   welcome: {
//     en_US: "Welcome <strong>{name}</strong>!",
//     de_DE: "Willkommen <strong>{name}</strong>!",
//     pl_PL: "Witaj <strong>{name}</strong>!",
//     no_NO: "Velkommen <strong>{name}</strong>!",
//     jp_JP: "ようこそ <strong>{name}</strong>!",
//   },
// });

function Header() {
  // const translated = useTrans();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      {/* <Trans values={{ name: "Jack" }}>{translated.welcome}</Trans> */}
    </header>
  );
}

export default App;

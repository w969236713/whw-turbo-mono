import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);

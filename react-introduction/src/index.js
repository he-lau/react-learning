// outils react
import ReactDOM from "react-dom/client";

// composants
import {App} from "./App";

// root
const divRoot = document.getElementById('root');

// noeud racine (Virtual DOM)
const reactRoot = ReactDOM.createRoot(divRoot);

// affichage
// IMPORTANT : appel composant avec balise
reactRoot.render(<App></App>);


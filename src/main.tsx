import "zmp-ui/zaui.css";
import "./css/app.css";

import { createRoot } from "react-dom/client";
import App from "./app";

createRoot(document.getElementById("app")!).render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Howl } from "howler";
import "./index.css";
import App from "./App.tsx";

const preloadSound = new Howl({
  src: ["/assets/music/hylo-background.mp3"],
  preload: true,
  volume: 0.5,
  loop: true,
});

preloadSound.load();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

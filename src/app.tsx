import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
// import Home from "./pages/home";
// import About from "./pages/about";
// import NotFound from "./pages/not-found";

const NotFound = lazy(() => import("./pages/not-found"));
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*paramName" component={NotFound} />
    </Router>
  );
}

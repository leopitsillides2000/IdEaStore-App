import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
// import Home from "./pages/home";
// import About from "./pages/about";
// import NotFound from "./pages/not-found";
import { Scrollbars } from "react-custom-scrollbars";

const NotFound = lazy(() => import("./pages/not-found"));
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const SignUp = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="*paramName" component={NotFound} />
    </Router>
  );
}

// import { Title } from "@solidjs/meta";
import Counter from "../components/Counter";
import { Button } from "@suid/material";
import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div>
      {/* <Title>Hello World</Title> */}
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
      <h1>This is IdEaStore</h1>
    </div>
  );
}

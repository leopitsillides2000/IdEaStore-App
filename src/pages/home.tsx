// import { Title } from "@solidjs/meta";
import Counter from "../components/Counter";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  styled,
} from "@suid/material";
import { A } from "@solidjs/router";
import LoginAppBar from "../components/LoginAppBar";
import IdeaList from "../components/IdeaList";
import { Idea } from "../models/Idea";
import { createSignal } from "solid-js";
import IdeaBig from "../components/IdeaBig";

const testIdeas: Idea[] = [
  {
    uuid: "1",
    author: {
      uuid: "11",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@ideastore.com",
      username: "johndoe",
    },
    title: "Idea 1",
    summary: "This is the first idea.",
    description:
      "This is the first idea. What happens if we add a lot more text to this section so it has to drop a line?",
    created: new Date(),
    updated: new Date(),
  },
  {
    uuid: "2",
    author: {
      uuid: "22",
      firstName: "Bob",
      lastName: "Fied",
      email: "bob.fied@ideastore.com",
      username: "bobfied",
    },
    title: "Idea 2",
    summary: "This is the second idea.",
    description: "This is the second idea.",
    created: new Date(),
    updated: new Date(),
  },
  {
    uuid: "3",
    author: {
      uuid: "33",
      firstName: "New",
      lastName: "Person",
      email: "new.person@ideastore.com",
      username: "newperson",
    },
    title: "The BEST idea",
    summary: "This is the BEST idea ever.",
    description:
      "This is the BEST idea ever. Please keep reading as this will be the coolest thing you've ever read. Wow this is sooo good I need to see how far it will escape from the page.",
    created: new Date(),
    updated: new Date(),
  },
  {
    uuid: "4",
    author: {
      uuid: "44",
      firstName: "Extra",
      lastName: "One",
      email: "extra.one@ideastore.com",
      username: "extraone",
    },
    title: "The Extra Idea",
    summary: "This is the extra idea.",
    description:
      "This is the extra idea, what we will see in the frontend UI. It is helpful to see roughly how it will look in the UI.",
    created: new Date(),
    updated: new Date(),
  },
];

export default function Home() {
  const [selectedIdea, setSelectedIdea] = createSignal<Idea>(testIdeas[0]);

  return (
    <div>
      <LoginAppBar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <IdeaList ideas={testIdeas} setSelectedIdea={setSelectedIdea} />
        </Grid>
        <Grid item xs={8}>
          <IdeaBig idea={selectedIdea} />
        </Grid>
      </Grid>
      {/* <Stack direction="row">
      
        <IdeaList ideas={testIdeas} setSelectedIdea={setSelectedIdea} />
        <IdeaBig idea={selectedIdea} />
      </Stack> */}
    </div>
  );
}

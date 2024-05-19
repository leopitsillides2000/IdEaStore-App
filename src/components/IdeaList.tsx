import { List, ListItem, ListItemButton } from "@suid/material";
import IdeaSmall from "./IdeaSmall";
import { Idea } from "../models/Idea";
import { createEffect } from "solid-js";

interface IdeaListProps {
  ideas: Idea[];
  selectedIdea: () => Idea;
  setSelectedIdea: (idea: Idea) => Idea;
  setCloseBig: (close: Boolean) => Boolean;
}

export default function IdeaList({
  ideas,
  selectedIdea,
  setSelectedIdea,
  setCloseBig,
}: IdeaListProps) {
  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxHeight: "100%",
        }}
      >
        {ideas.map((idea) => (
          <ListItem sx={{ overflow: "hidden", display: "flow" }}>
            {/* <ListItemButton
              onClick={() => {
                setSelectedIdea(idea);
              }}
            > */}
            <IdeaSmall
              idea={() => {
                return idea;
              }}
              selectedIdea={selectedIdea}
              setSelectedIdea={setSelectedIdea}
              setCloseBig={setCloseBig}
            />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

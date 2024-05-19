import { List, ListItem, ListItemButton } from "@suid/material";
import IdeaSmall from "./IdeaSmall";
import { Idea } from "../models/Idea";

interface IdeaListProps {
  ideas: Idea[];
  setSelectedIdea: (idea: Idea) => Idea;
  setCloseBig: (close: Boolean) => Boolean;
}

export default function IdeaList({
  ideas,
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

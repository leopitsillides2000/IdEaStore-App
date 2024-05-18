import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@suid/material";
import MoreVertIcon from "@suid/icons-material/MoreVert";
import { Idea } from "../models/Idea";
import IdeaMenuPopover from "./IdeaMenu";
import { createSignal } from "solid-js";

interface IdeaSmallProps {
  idea: () => Idea;
  setSelectedIdea: (idea: Idea) => Idea;
}

const fullname = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

export default function IdeaSmall({ idea, setSelectedIdea }: IdeaSmallProps) {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Card
        sx={{
          minWidth: "100%",
          width: "100%",
          overflow: "ellipsis",
          border: "1px solid black",
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={idea().title}
          subheader={fullname(idea().author.firstName, idea().author.lastName)}
        />
        <CardContent>
          <Typography variant="body2">{idea().summary}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setSelectedIdea(idea())}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <IdeaMenuPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
}

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
import { createSignal, createEffect } from "solid-js";

interface IdeaSmallProps {
  idea: () => Idea;
  setSelectedIdea: (idea: Idea) => Idea;
  setCloseBig: (close: Boolean) => Boolean;
}

const fullname = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

export default function IdeaSmall({
  idea,
  setSelectedIdea,
  setCloseBig,
}: IdeaSmallProps) {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
  const [isHidden, setIsHidden] = createSignal(idea().hidden);

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSeeMore = () => {
    setSelectedIdea(idea());
    setCloseBig(false);
  };

  const handleShow = () => {
    setIsHidden(false);

    // TODO api call to update hidden
  };

  createEffect(() => {
    isHidden() ? setAnchorEl(null) : null;
  }, [isHidden]);

  return (
    <div>
      {isHidden() ? (
        <Card sx={cardStyle}>
          <CardHeader
            action={
              <Button aria-label="show" onClick={handleShow}>
                Show
              </Button>
            }
          />
        </Card>
      ) : (
        <Card sx={cardStyle}>
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={idea().title}
            subheader={fullname(
              idea().author.firstName,
              idea().author.lastName
            )}
          />
          <CardContent>
            <Typography variant="body2">{idea().summary}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleSeeMore}>
              See More
            </Button>
          </CardActions>
        </Card>
      )}

      <IdeaMenuPopover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        starred={idea().starred}
        setIsHidden={setIsHidden}
      />
    </div>
  );
}

const cardStyle = {
  minWidth: "100%",
  width: "100%",
  overflow: "ellipsis",
  border: "1px solid black",
};

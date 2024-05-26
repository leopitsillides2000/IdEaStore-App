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
import CloseIcon from "@suid/icons-material/Close";
import { Idea } from "../models/Idea";
import { createSignal } from "solid-js";

interface IdeaBigProps {
  idea: () => Idea;
  close: () => Boolean;
  setClose: (close: Boolean) => Boolean;
}

const fullname = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

export default function IdeaBig({ idea, close, setClose }: IdeaBigProps) {
  // const [close, setClose] = createSignal(false);

  return (
    <div
      style={{
        "padding-top": "16px",
        "padding-bottom": "16px",
        "padding-right": "24px",
        position: "fixed",
        width: "-webkit-fill-available",
      }}
    >
      {close() ? (
        <></>
      ) : (
        <Card
          sx={{
            overflow: "auto",
            border: "1px solid gray",
          }}
        >
          <CardHeader
            action={
              <IconButton aria-label="close" onClick={() => setClose(!close())}>
                <CloseIcon />
              </IconButton>
            }
            title={idea().title}
            subheader={fullname(
              idea().author.firstName,
              idea().author.lastName
            )}
          />
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              Date Created: {idea().created.toDateString()}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2">{idea().description}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

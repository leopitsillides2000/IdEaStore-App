import { HideSource, StarBorder, Star, Cloud } from "@suid/icons-material";
import {
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Popover,
} from "@suid/material";
import { createSignal } from "solid-js";

interface IdeaMenuProps {
  starred?: Boolean;
  setIsHidden: (hidden: Boolean) => Boolean;
}
function IdeaMenu({ starred, setIsHidden }: IdeaMenuProps) {
  const [isStarred, setIsStarred] = createSignal(starred);

  const handleStarChange = () => {
    setIsStarred(!isStarred());

    // TODO make api call to update star in backend
  };

  const handleHideChange = () => {
    setIsHidden(true);

    // TODO make api call to update hidden in backend
  };

  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
      }}
    >
      <MenuList>
        <MenuItem onClick={handleHideChange}>
          <ListItemIcon>
            <HideSource fontSize="small" />
          </ListItemIcon>
          <ListItemText>Hide</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleStarChange}>
          <ListItemIcon>
            {isStarred() ? (
              <Star fontSize="small" />
            ) : (
              <StarBorder fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText>Star</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

interface IdeaMenuPopoverProps {
  anchorEl: () => HTMLButtonElement | null;
  setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
  starred?: Boolean;
  setIsHidden: (hidden: Boolean) => Boolean;
}

export default function IdeaMenuPopover({
  anchorEl,
  setAnchorEl,
  starred,
  setIsHidden,
}: IdeaMenuPopoverProps) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [open, setOpen] = createSignal(Boolean(anchorEl()));

  const open = () => Boolean(anchorEl());
  const id = () => (open() ? "simple-popover" : undefined);

  return (
    <div>
      <Popover
        id={id()}
        open={open()}
        anchorEl={anchorEl()}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <IdeaMenu starred={starred} setIsHidden={setIsHidden} />
      </Popover>
    </div>
  );
}

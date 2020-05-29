import React, { useState, KeyboardEvent, MouseEvent } from "react";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import { useHistory } from "react-router-dom";
import { chatStyles } from "../../css/useStyles";

type Anchor = "chat";

const ChatForm = () => {
  const chatStyle = chatStyles();
  const [state, setState] = useState({ chat: false });
  const history = useHistory();

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const chatting = (primary: string, secondary: string) => (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );

  // 채팅창으로 대체
  const list = (anchor: Anchor) => (
    <div
      className={clsx(chatStyle.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {chatting("Photos", "Jan 9, 2014")}
        {chatting("Work", "Jan 7, 2014")}
      </List>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Home
      </Button>
      {(["chat"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawer(anchor, true)}
            style={{ float: "right" }}
          >
            {anchor}
          </Button>
          <br />
          <Drawer
            anchor={"right"}
            open={state["chat"]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Input
              placeholder="채팅을 입력하세요"
              inputProps={{ "aria-label": "description" }}
            />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ChatForm;

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";

import QuestItem from "../components/questitem";

export default function QuestSidebar() {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="quest-sidebar"
    >
      <div className="quest-header sidebar-border-top">
        <h2>Daily quest progress</h2>

        <div className="quest-reward">
          <img src="/image/red-gem.png" width="35px" />
          <h2 className="quest-progress">3/5</h2>
          <h2 className="pn-green quest-add">+400XP</h2>
        </div>

        <div className="quest-list">
          <QuestItem title="Challenger" description="Challenge 2 unique players to a duel" />
          <QuestItem title="Player Challange" description="Challenge 15 unique players to a duel" />
          <QuestItem title="Comment" description="Comment, RT, Like our twitter post" />
          <QuestItem title="Double Duel" description="Win 3000 amount of XP via duel" />
          <QuestItem title="XP Bonus" description="Win XXX amount of XP via duel" />
        </div>

        <div className="sidebar-info">
          <p>There are many variations of passages of Lorem Ipsum availabtle, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
        </div>

      </div>
    </div>
  );

  return (
    <div>
      {[""].map((anchor) => (
        <>
          <div className="quest-button" onClick={toggleDrawer(anchor, true)}>
            <Badge color="primary" badgeContent="!" className="badge">
              <img
                src="/image/quest-icon.svg"
                className="quest-icon"
                width="20px"
              />
            </Badge>
          </div>

          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
}

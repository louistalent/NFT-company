import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Link from "next/link";

import React, { useState } from "react";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="avatar" onClick={handleClick}>
        <Badge color="primary" badgeContent="4" className="badge">
          <img src="/image/echoes-picture.png" className="avatar-picture" />
        </Badge>
        <div className="avatar-level">6</div>
      </div>

      <Menu
        className="avatar-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link href="/lootbox">
          <MenuItem onClick={handleClose}>Lootbox</MenuItem>
        </Link>
        <Link href="/quest">
          <MenuItem onClick={handleClose}>Quest</MenuItem>
        </Link>
        <Link href="/vault">
          <MenuItem onClick={handleClose}>Vault</MenuItem>
        </Link>
        <Link href="/invite">
          <MenuItem onClick={handleClose}>Invite</MenuItem>
        </Link>
        <Link href="#">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

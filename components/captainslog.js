import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Badge from "@mui/material/Badge";

import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="notifications" onClick={handleOpen}>
        <Badge color="primary" badgeContent="2" className="badge">
          <img
            src="/image/notification-icon.svg"
            className="notifications-icon"
          />
        </Badge>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="pn-modal" sx={style}>
          <div className="header captains-log modal-border">
            <h1>Captain&apos;s Log</h1>
            <img src="/image/div.svg" className="divider" />
            <h3>3 New Notifications</h3>

            <div className="noti-avatar">
              <div className="avatar">
                <Badge color="primary" badgeContent="!" className="badge">
                  <img
                    src="/image/echoes-picture.png"
                    className="avatar-picture"
                  />
                </Badge>
              </div>
              <div className="welcome">
                <span>The Council be damned</span>
                <h5>
                  I will reforge this Bastion — with steel tempered in the
                  hottest stars, and quenched in the coldest blood.{" "}
                </h5>
              </div>
            </div>

            <div className="noti-avatar">
              <div className="avatar">
                <Badge color="primary" badgeContent="!" className="badge">
                  <img
                    src="/image/echoes-picture.png"
                    className="avatar-picture"
                  />
                </Badge>
              </div>
              <div className="welcome">
                <span>The Council be damned</span>
                <h5>
                  I will reforge this Bastion — with steel tempered in the
                  hottest stars, and quenched in the coldest blood.{" "}
                </h5>
              </div>
            </div>

            <div className="noti-avatar">
              <div className="avatar">
                <Badge color="primary" badgeContent="!" className="badge">
                  <img
                    src="/image/echoes-picture.png"
                    className="avatar-picture"
                  />
                </Badge>
              </div>
              <div className="welcome">
                <span>The Council be damned</span>
                <h5>
                  I will reforge this Bastion — with steel tempered in the
                  hottest stars, and quenched in the coldest blood.{" "}
                </h5>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

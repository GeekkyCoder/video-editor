import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./TextDialog.css"
import {DialogContainer} from "./TextDialogStyles"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function TextDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Text
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContainer>
          <h3 className="heading">Add text to your video</h3>

          <div className="from-container">
            <label>From</label>
            <input
              type="text"
              placeholder="00:00:00"
              //   onChange={(e) => setVStart(e.target.value)}
            />
          </div>

          <div className="to-container">
            <label>To</label>
            <input
              type="text"
              placeholder="00:00:00"
              //   onChange={(e) => setVEnd(e.target.value)}
            />
          </div>

          <div className="select-container">
            <select>
              <option value="x=(w-text_w)/2:y=h-th-10">Bottom center</option>
              <option value="x=w-tw-10:y=h-th-10">Bottom right</option>
              <option value="x=10:y=h-th-10">Bottom left</option>
              <option value="x=(w-text_w)/2:y=(h-text_h)/2">Center</option>
              <option value="x=(w-text_w)/2:y=100">Top center</option>
              <option value="x=w-tw-10:y=10">Top right</option>
              <option value="x=10:y=10">Top left</option>
            </select>
          </div>

          <div className="text-container">
            <input
              type="text"
              placeholder="Here goes the text.."
              //   onChange={(e) => setRenderTextVideo(e.target.value)}
            />
          </div>

          <button className="add-text-btn">Add Text</button>
        </DialogContainer>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

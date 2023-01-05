import React,{useState} from 'react'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Alert  from "@mui/material/Alert";

function SuccessAlert () {
    const [showAlert, setShowAlert] = useState(true);
  return (
    <div>
         <Collapse in={showAlert}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setShowAlert(false);
                }}
              >
                <CloseIcon fontSize="medium" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
              trimmed ✔
          </Alert>
        </Collapse>
    </div>
  )
}

export default SuccessAlert
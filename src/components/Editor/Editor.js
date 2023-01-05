import React, { useContext } from "react";
import UploadFileComponent from "../UploadFile/UploadFile";
import { Context } from "../Context/Context";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { CirularIconBox } from "./EditorStyle";
import VideoPlayer from "./VideoPlayer";

function Editor() {
  const { isFFmpegReady, userHasChoosenVideo } = useContext(Context);
  return isFFmpegReady ? (
    <Box>
      {!userHasChoosenVideo ? <UploadFileComponent /> : <VideoPlayer />}
    </Box>
  ) : (
    <CirularIconBox>
      <CircularProgress fontSize="large" color="inherit" />
    </CirularIconBox>
  );
}

export default Editor;

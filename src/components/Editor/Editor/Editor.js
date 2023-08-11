import React, { useContext,lazy,Suspense } from "react";
import UploadFileComponent from "../../UploadFile/UploadFile";
import { Context } from "../../Context/Context";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { CirularIconBox } from "./EditorStyle";
// import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPlayer = lazy(()=> import("../VideoPlayer/VideoPlayer"))

function Editor() {
  const { isFFmpegReady, userHasChoosenVideo } = useContext(Context);
  return isFFmpegReady ? (
    <Box>
      {!userHasChoosenVideo ? <UploadFileComponent /> : <Suspense fallback={<CircularProgress fontSize="large" color="inherit" />}><VideoPlayer /></Suspense>}
    </Box>
  ) : (
    <CirularIconBox>
      <CircularProgress fontSize="large" color="inherit" />
    </CirularIconBox>
  );
}

export default Editor;

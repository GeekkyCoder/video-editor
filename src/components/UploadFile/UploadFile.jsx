import React, { useContext } from "react";
import { FileDrop } from "react-file-drop";
import { Context } from "../Context/Context";
import SettingsIcon from "@mui/icons-material/Settings";
import { ModeContainer, SunIcon, MoonIcon } from "../Editor/VideoPlayerStyle";

import "./uploadfile.css";

const UploadFileComponent = () => {
  const { onChangeVideo, isNotloading, setThemeMode, theme } =
    useContext(Context);
  return (
    <div className={`wrapper ${theme}-mode`}>
      {isNotloading ? (
        <div className="flex">
          <input
            onChange={onChangeVideo}
            type="file"
            className="input-file"
            id="up_file"
          />
          <FileDrop
            className="file-drop"
            onDrop={onChangeVideo}
            onTargetClick={() => document.getElementById("up_file").click()}
          >
            <strong>Click or drop your video here to edit!</strong>
          </FileDrop>

          <ModeContainer className="mode" onClick={setThemeMode}>
            {theme === "light" ? (
              <SunIcon
                className="icons-fade"
                fontSize="large"
                sx={{ color: "#FFC300" }}
              />
            ) : (
              <MoonIcon className="icons-fade" fontSize="large" />
            )}
          </ModeContainer>
        </div>
      ) : (
        <p className="processing-text">
          Processing...{" "}
          <SettingsIcon fontSize="medium" className="animate-settings" />
        </p>
      )}
    </div>
  );
};

export default UploadFileComponent;

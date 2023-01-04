import React, { createContext, useEffect, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import fontFile from "../Editor/SourceSansPro-Regular.otf";
import * as helpers from "../utils/Helpers";

const ffmpeg = createFFmpeg({ log: true });

const storedVideo = "userchoosenvideo.mp4";
const storedVideo2 = "usertrimedvideo.mp4";

const Context = createContext();

function ContextProvider(props) {
   const [theme,setTheme] = useState("light")
  const [isFFmpegReady, setIsFFmpegReady] = useState(false);
  const [isNotloading, setIsNotLoading] = useState(true);
  const [choosenVideo, setChoosenVideo] = useState();
  const [userHasChoosenVideo, setUserHasChoosenVideo] = useState(false);


  const setThemeMode = () => {
    console.log("clicked")
    setTheme(prevTheme=> prevTheme==="light" ? "dark": "light")
  }

  const loadFFmpeg = async () => {
    await ffmpeg.load();
    setIsFFmpegReady(true);
    addResourceToFS();
  };

  const addResourceToFS = async (e) => {
    const fileurl = `${window.location.origin}${fontFile}`;
    console.log(`fileUrl: ${fileurl}`);
    ffmpeg.FS("writeFile", "myfont.otf", await fetchFile(fileurl));
  };

  useEffect(() => {
    loadFFmpeg();
  }, []);

  const onChangeVideo = async (e) => {
    setUserHasChoosenVideo(true);
    setIsNotLoading(false);
    ffmpeg.FS(
      "writeFile",
      storedVideo,
      await fetchFile(e.target.files?.item(0))
    );
    const data = ffmpeg.FS("readFile", storedVideo);
    const dataUrl = await helpers.readFileAsBase64(
      new Blob([data.buffer], { type: "video/mp4" })
    );

    setChoosenVideo(dataUrl);
    setIsNotLoading(true);
  };

  console.log(`choosenVideo: ${choosenVideo}`);

  return (
    <Context.Provider
      value={{
        onChangeVideo,
        isFFmpegReady,
        setIsFFmpegReady,
        isNotloading,
        choosenVideo,
        setChoosenVideo,
        userHasChoosenVideo,
        theme,
        setThemeMode
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

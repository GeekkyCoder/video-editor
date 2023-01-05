import React, { createContext, useEffect, useState, useRef } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import * as helpers from "../utils/Helpers";
import fontFile from "../Editor/SourceSansPro-Regular.otf";

const storedVideo = "userchoosenvideo.mp4";
const storedVideo2 = "usertrimedvideo.mp4";

const Context = createContext();

const ffmpeg = createFFmpeg({ log: true });

function ContextProvider(props) {
  const [theme, setTheme] = useState("light");
  const [isFFmpegReady, setIsFFmpegReady] = useState(false);
  const [isNotloading, setIsNotLoading] = useState(true);
  const [choosenVideo, setChoosenVideo] = useState();
  const [userHasChoosenVideo, setUserHasChoosenVideo] = useState(false);
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  const [isTrimmingDone, setIsTrimmingDone] = useState(false);
  const [isVideoPlaying,setIsVideoPlaying] = useState(false)

  const setThemeMode = () => {
    console.log("clicked");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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

  const handleTrim = async () => {
    console.log("trimming");
    // setIsTrimmingDone(true)
    setIsNotLoading(false);
    // let startTime = "00:00:00";
    // let offset = "00:01:54";
    // let offset = ((rEnd / 100) * videoMeta.duration - startTime).toFixed(2);
    // CAN BE MOORE OPTIMIZE BELOW
    try {
      await ffmpeg.run(
        "-i",
        storedVideo,
        "-ss",
        `00:${JSON.stringify(startValue).slice(0, 3)}`,
        // "00:20",
        "-to",
        `${JSON.stringify(endValue).slice(0, 3)}`,
        // "00:30",
        "-codec",
        "copy",
        storedVideo2
      );

      const data = ffmpeg.FS("readFile", storedVideo2);
      ffmpeg.FS("writeFile", storedVideo, data);
      // ffmpeg.FS("unlink", storedVideo2);
      // const data = ffmpeg.FS("readFile", storedVideo);
      const dataURL = await helpers.readFileAsBase64(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setChoosenVideo(dataURL);
    } catch (error) {
      console.log(error);
    } finally {
      setIsNotLoading(true);
      setIsTrimmingDone(true)
    }
  };

  // console.log(`videoStart:00:${JSON.stringify((startValue)).slice(0,3)}  videoEnd: 00:${JSON.stringify((endValue)).slice(0,3)}`)

  // console.log(`start:${startValue}, end:${endValue}`)

  return (
    <Context.Provider
      value={{
        onChangeVideo,
        isFFmpegReady,
        setIsFFmpegReady,
        isNotloading,
        setIsNotLoading,
        choosenVideo,
        setChoosenVideo,
        userHasChoosenVideo,
        theme,
        setThemeMode,
        handleTrim,
        setStartValue,
        setEndValue,
        startValue,
        endValue,
        isTrimmingDone,
        setIsTrimmingDone,
        isVideoPlaying,
        setIsVideoPlaying,
        setUserHasChoosenVideo
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

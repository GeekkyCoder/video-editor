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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMerged,setIsMerged] = useState(false)

  const setThemeMode = () => {
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

  // user choosing video file functionality
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

  // trim video functionality
  const handleTrim = async () => {
    console.log("trimming");
    setIsNotLoading(false);
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
      const dataURL = await helpers.readFileAsBase64(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setChoosenVideo(dataURL);
    } catch (error) {
      console.log(error);
    } finally {
      setIsNotLoading(true);
      setIsTrimmingDone(true);
    }
  };

  // merge video functionality
  const onChangeMergeVideo = async (e) => {
    setIsNotLoading(false);
    setIsMerged(true)
    console.log(e.target.files?.item(0));
    ffmpeg.FS(
      "writeFile",
      "mergevideo.mp4",
      await fetchFile(e.target.files?.item(0))
    );
    try {
      await ffmpeg.run(
        "-i",
        storedVideo,
        "-c",
        "copy",
        "-bsf:v",
        "h264_mp4toannexb",
        "-f",
        "mpegts",
        "mergeinput1.ts"
      );
      await ffmpeg.run(
        "-i",
        "mergevideo.mp4",
        "-c",
        "copy",
        "-bsf:v",
        "h264_mp4toannexb",
        "-f",
        "mpegts",
        "mergeinput2.ts"
      );

      await ffmpeg.run(
        "-i",
        "concat:mergeinput1.ts|mergeinput2.ts",
        "-c",
        "copy",
        "-bsf:a",
        "aac_adtstoasc",
        "mergeout.mp4"
      );

      const data = ffmpeg.FS("readFile", "mergeout.mp4");
      const dataURL = await helpers.readFileAsBase64(
        new Blob([data.buffer], { type: "video/mp4" })
      );
      setChoosenVideo(dataURL);
    } catch (error) {
      console.log(error);
    } finally {
      setIsNotLoading(true);
      setTimeout(()=> {
        setIsMerged(false)
      },6000)
    }
  };

  console.log(`videoStart:00:${JSON.stringify((startValue)).slice(0,3)}  videoEnd: 00:${JSON.stringify((endValue)).slice(0,3)}`)

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
        setUserHasChoosenVideo,
        onChangeMergeVideo,
        isMerged,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

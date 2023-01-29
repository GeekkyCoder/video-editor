import React, { createContext, useEffect, useState } from "react";
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
  const [isMerged, setIsMerged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [textStartTime, setTextStartTime] = useState();
  const [endTextTime, setEndTextTime] = useState();
  const [renderTextOnVideo, setRenderTextOnVideo] = useState(
    "hello this is a text"
  );
  const [select, setSelect] = useState("x=(w-text_w)/2:y=(h-text_h)/2");
  const [isSliderMovedByUser, setIsSliderMovedByUser] = useState(false);
  const [isTrimButtonHovered, setIsTrimButtonHovered] = useState(false);
  const [isDisableTrimButton, setIsDisableTrimButton] = useState(true);
  const [isSliderMoving, setIsSliderMoving] = useState(false);
  const [showSuccessAlert, setSuccesAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  // Backend Stuff
  // we need to convert base64 to a valid link which we can share by clicking on publish button
  // const [videoUrl,setVideoUrl] = useState("")

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
    // setVideoUrl(dataUrl)
    setChoosenVideo(dataUrl);
    setIsNotLoading(true);
  };

  // trim video functionality
  const handleTrim = async () => {
    // console.log("trimming");
    if (isSliderMovedByUser) {
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
        setIsSliderMovedByUser(false);
        setSuccesAlert(false);
        setShowWarningAlert(false);
        setIsSliderMoving(false);
        setIsDisableTrimButton(true);

        // setIsDisableTrimButton(true)
      }
    }
  };

  // merge video functionality
  const onChangeMergeVideo = async (e) => {
    setIsNotLoading(false);
    setIsMerged(true);
    // const files = e.target.files;
    // const inputPaths=[]
    // for (const file of files) {
    //   const { name } = file;
    //   ffmpeg.FS("writeFile", name, await fetchFile(file));
    //   inputPaths.push(`file ${name}`);
    // }
    // ffmpeg.FS("writeFile", "concat_list.txt", inputPaths.join("\n"));

    // try{
    // await ffmpeg.run(
    //   "-f",
    //   "concat",
    //   "-safe",
    //   "0",
    //   "-i",
    //   "concat_list.txt",
    //   "output.mp4"
    // );
    // const data = ffmpeg.FS("readFile", "output.mp4");
    // const dataURL = URL.createObjectURL(
    //   new Blob([data.buffer], {
    //     type: "video/mp4"
    //   })
    // );
    // setChoosenVideo(dataURL)
    // }catch(err){
    //   console.log(err)
    // }
    // finally{
    //   setIsNotLoading(true)
    //   setIsMerged(false)

    // }

    ffmpeg.FS(
      "writeFile",
      "mergevideo.mp4",
      await fetchFile(e.target.files?.item(0))
    );
    try {
      //user input video
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
      // merge video
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
        // "mergeinput3.ts",
        // "mergeinput4.ts",
        // "mergeinput5.ts"
      );
      // output video
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
      setIsMerged(false);
    }
  };

  const handleAddText = async (e) => {
    setIsOpen(false);
    // setIsNotLoading(false);
    // CAN BE MOORE OPTIMIZE BELOW
    try {
      await ffmpeg.run(
        "-i",
        storedVideo,
        "-vf",
        `drawtext=fontfile=myfont.otf:text='${renderTextOnVideo}':fontsize=40:fontcolor=white:${select}`,
        "-codec:a",
        "copy",
        "-preset",
        "ultrafast",
        storedVideo2
      );

      const data = ffmpeg.FS("readFile", storedVideo2);
      // ffmpeg.FS("writeFile", storedVideo, data);
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
      setIsMerged(false);
    }
  };

  // console.log(`start:${startValue}, end:${endValue}`)
  // console.log(textStartTime,endTextTime,select,renderTextOnVideo)

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
        setTextStartTime,
        setEndTextTime,
        setSelect,
        setRenderTextOnVideo,
        textStartTime,
        endTextTime,
        renderTextOnVideo,
        select,
        handleAddText,
        isOpen,
        setIsOpen,
        setIsSliderMovedByUser,
        isSliderMovedByUser,
        isTrimButtonHovered,
        setIsTrimButtonHovered,
        isDisableTrimButton,
        setIsDisableTrimButton,
        isSliderMoving,
        setIsSliderMoving,
        showSuccessAlert,
        setSuccesAlert,
        showWarningAlert,
        setShowWarningAlert,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

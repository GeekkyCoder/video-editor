import React, { useContext, useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Context } from "../Context/Context";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  VideoEditorContainer,
  VideoContainer,
  InviteButtonContainer,
  PublishInviteButtonContainer,
  PublishButtonContainer,
  InviteText,
  PublishText,
  ModeContainer,
  MoonIcon,
  PauseIcons,
  PlayIcon,
  PlayPauseIconContainer,
  SunIcon,
  HelperButtonContainer,
  TextButton,
  MergeButton,
  DeleteButton,
  TrimButton,
  ResetButton,
  ButtonText,
  SliderBox,
  SliderContainer,
  ChangeVideoButton,
} from "./VideoPlayerStyle";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import "./utils.css";
import SuccessAlert from "./SuccessAlert";
import { TroubleshootTwoTone } from "@mui/icons-material";

function VideoPlayer() {
  const [trimA, setTrimA] = useState(0);
  const [trimB, setTrimB] = useState(0);

  const {
    theme,
    setThemeMode,
    choosenVideo,
    handleTrim,
    setStartValue,
    setEndValue,
    isTrimmingDone,
    setIsTrimmingDone,
    isVideoPlaying,
    setIsVideoPlaying,
    startValue,
    endValue,
    setIsNotLoading,
    setUserHasChoosenVideo,
  } = useContext(Context);

  const [handleStartValue, setHandleStartValue] = useState(0);
  const [handleEndValue, setHandleEndValue] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const videoRef = useRef(null);
  const trimmingRef = useRef(null);

  const handleSliderValues = (sliderValuesArray) => {
    const [startingIndex, endingIndex] = sliderValuesArray;
    console.log(`${JSON.stringify(startingIndex.toFixed(2))}`);
    setHandleStartValue(startingIndex);
    setHandleEndValue(endingIndex);
    setStartValue(startingIndex);
    setEndValue(endingIndex);
    if (isTrimmingDone) {
      setTrimA(startingIndex);
      setTrimB(endingIndex);
      trimmingRef.current.seekTo(startingIndex);
    }
    // videoRef.current.seekTo(handleStartValue);
  };

  // const handleAfterChangeValues = (sliderAfterValuesArray) => {
  //   const [startingIndex,endingIndex] = sliderAfterValuesArray

  // }

  // const handleSwitch = () => {
  //   setIsTrimmingDone(true)
  // }

  const handleReset = () => {
    setIsTrimmingDone(false);
  };

  const handleChangeVideo = () => {
    setUserHasChoosenVideo(false);
    setIsNotLoading(false);
    setTimeout(() => {
      setIsNotLoading(true);
    }, 1000);
  };

  useEffect(() => {
    if (videoRef.current) {
      const duration = videoRef.current.getDuration() || 100;
      setVideoDuration(duration);
      videoRef.current.seekTo(handleStartValue);
      console.log(handleStartValue);
      // console.log(`${handleStartValue}, ${handleEndValue}`)
    }
  });

  return (
    <>
      {isTrimmingDone ? <SuccessAlert /> : ""}
      <VideoEditorContainer className={`${theme}-mode`}>
        <PublishInviteButtonContainer>
          <PublishButtonContainer>
            <ShareIcon fontSize="medium" sx={{ color: "#000000" }} />
            <PublishText sx={{ marginLeft: "1em" }} variant="body2">
              Publish
            </PublishText>
          </PublishButtonContainer>
          <InviteButtonContainer>
            <PersonAddAlt1Icon sx={{ color: "#000000" }} fontSize="medium" />
            <InviteText sx={{ marginLeft: "1em" }} variant="body2">
              Invite
            </InviteText>
          </InviteButtonContainer>
          <ModeContainer onClick={setThemeMode}>
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
        </PublishInviteButtonContainer>

        <VideoContainer>
          {!isTrimmingDone ? (
            <ReactPlayer
              url={choosenVideo}
              ref={videoRef}
              width="100%"
              height={"100%"}
              controls
            />
          ) : (
            <ReactPlayer
              url={choosenVideo}
              ref={trimmingRef}
              width="100%"
              height={"100%"}
              controls
            />
          )}
        </VideoContainer>

        <HelperButtonContainer>
          <ChangeVideoButton>
            <OndemandVideoOutlinedIcon
              onClick={handleChangeVideo}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Change Video</ButtonText>
          </ChangeVideoButton>

          <TextButton>
            <TitleOutlinedIcon fontSize="large" sx={{ color: " #000000" }} />
            <ButtonText variant="body2">Text</ButtonText>
          </TextButton>

          <TrimButton>
            <ContentCutOutlinedIcon
              onClick={handleTrim}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Trim</ButtonText>
          </TrimButton>

          <MergeButton>
            <PostAddOutlinedIcon fontSize="large" sx={{ color: " #000000" }} />
            <ButtonText variant="body2">Merge</ButtonText>
          </MergeButton>

          <ResetButton>
            <RestartAltOutlinedIcon
              onClick={handleReset}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Reset</ButtonText>
          </ResetButton>
        </HelperButtonContainer>

        {/* <div>
          {!isTrimmingDone ? 
          <div>
             Original Video 
             <br/>
             <span>start:{`00:${JSON.stringify(startValue).slice(3)}`}</span>
             <span>end: {`00:${JSON.stringify(endValue).slice(0,3)}`}</span>
          </div>
         : <div>
         Triimed Video 
             <br/>
             <span>start:{`00:${JSON.stringify(startValue).slice(0,3)}`}</span>
             <span>end: {`00:${JSON.stringify(startValue).slice(0,3)}`}</span>
          </div>}
        </div> */}

        <SliderContainer>
          <PlayPauseIconContainer>
            <PlayIcon fontSize="large" sx={{ color: "#914979" }} />

            <PauseIcons fontSize="large" sx={{ color: "#914979" }} />
          </PlayPauseIconContainer>
          <SliderBox>
            {!isTrimmingDone ? (
              <Slider
                ariaLabelledByForHandle={() => "range"}
                autoFocus={true}
                range
                defaultValue={[0, 100]}
                min={videoDuration / 100}
                max={videoDuration}
                onChange={handleSliderValues}
                // onAfterChange = {handleAfterChangeValues}
                draggableTrack
                keyboard={true}
                pushable
                allowCross={false}
                activeDotStyle={[{ background: "blue" }]}
                trackStyle={[
                  {
                    backgroundImage: "linear-gradient(#DBDEF5,blue)",
                    height: "10px",
                  },
                ]}
                railStyle={{ backgroundColor: "#DBE0F5", height: "10px" }}
              />
            ) : (
              <Slider
                ariaLabelledByForHandle={() => "range"}
                autoFocus={true}
                range
                defaultValue={[0, 100]}
                min={videoDuration / 100}
                max={videoDuration}
                onChange={handleSliderValues}
                draggableTrack
                keyboard={true}
                disabled={isTrimmingDone}
                pushable
                allowCross={false}
                activeDotStyle={[{ background: "blue" }]}
                trackStyle={[
                  {
                    background: !isTrimmingDone
                      ? "linear-gradient(#DBDEF5,blue)"
                      : "red",
                    height: "10px",
                  },
                ]}
                railStyle={{ backgroundColor: "#DBE0F5", height: "10px" }}
              />
            )}
          </SliderBox>
        </SliderContainer>
      </VideoEditorContainer>
    </>
  );
}

export default VideoPlayer;

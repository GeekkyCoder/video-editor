import React, { useContext, useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Context } from "../../Context/Context";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Alert from "@mui/material/Alert";

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
  MuteButton,
} from "./VideoPlayerStyle";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import SettingsIcon from "@mui/icons-material/Settings";
import CircularProgress from "@mui/material/CircularProgress";
import "../utils.css";
import SuccessAlert from "../SuccessAlert/SuccessAlert";
import { CirularIconBox } from "../Editor/EditorStyle";
import TextDialog from "../TextDialog/TextDialog";

function VideoPlayer() {
  const [sliderStartValue, setSliderStartValue] = useState(0);
  const [sliderEndValue, setSliderEndValue] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [toggleMergeBox, setToggleMergeBox] = useState(false);
  const [trimA, setTrimA] = useState(0);
  const [trimB, setTrimB] = useState(0);
  const videoRef = useRef(null);
  const trimmingRef = useRef(null);

  const {
    theme,
    setThemeMode,
    choosenVideo,
    handleTrim,
    startValue,
    setStartValue,
    setEndValue,
    isTrimmingDone,
    setIsTrimmingDone,
    isVideoPlaying,
    setIsVideoPlaying,
    setIsNotLoading,
    setUserHasChoosenVideo,
    isNotloading,
    onChangeMergeVideo,
    isMerged,
    endValue,
    setIsOpen,
    isOpen
  } = useContext(Context);

  const handleSliderValues = (sliderValuesArray) => {
    setIsVideoPlaying(false);
    const [startingIndex, endingIndex] = sliderValuesArray;
    setSliderStartValue(startingIndex);
    setSliderEndValue(endingIndex);
    // console.log(`${JSON.stringify(startingIndex.toFixed(2))}`);
    setStartValue(startingIndex);
    setEndValue(endingIndex);
  };

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handlePauseClick = () => {
    setIsVideoPlaying(false);
  };

  const handleReset = () => {
    setIsTrimmingDone(false);
  };

  const handleMute = () => {
    setIsMuted(true);
  };

  const handleUnMute = () => {
    setIsMuted(false);
  };

  const handleToggleText = () => {
    setIsOpen(prevStat=> !prevStat)
  };

  const handleMergeBox = () => {
     setToggleMergeBox(prevStat=> !prevStat)
  }

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
      videoRef.current.seekTo(startValue);
      // console.log(`${handleStartValue}, ${handleEndValue}`)
      if (isTrimmingDone) {
        setTrimA(sliderStartValue);
        setTrimB(sliderEndValue);
      }
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

        {isNotloading ? (
          <VideoContainer>
            {!isTrimmingDone ? (
              <ReactPlayer
                url={choosenVideo}
                ref={videoRef}
                width="100%"
                height={"100%"}
                controls
                playing={isVideoPlaying}
                muted={isMuted}
              />
            ) : (
              <ReactPlayer
                url={choosenVideo}
                ref={trimmingRef}
                width="100%"
                height={"100%"}
                controls
                playing={isVideoPlaying}
                muted={isMuted}
              />
            )}
          </VideoContainer>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="processing-text-video">
              Processing...{" "}
              {/* <SettingsIcon fontSize="medium" className="animate-settings" /> */}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress
                sx={{ marginLeft: "5em" }}
                fontSize="large"
                color="primary"
              />
            </div>
          </div>
        )}

        {!isMerged && toggleMergeBox && (
          <div className="merge-container">
            <Alert severity="info" sx={{ width: "100%" }}>
              Merge video ? <strong>choose a file 👇</strong>
            </Alert>
            <input
              onChange={onChangeMergeVideo}
              type="file"
              className="merge-file-input"
              id="up_file"
              name="merge"
            />
          </div>
        )}

        {isMerged && (
          <div className="merge-container">
            <Alert severity="success" sx={{ width: "100%" }}>
              Video merged Successfully ✔!
            </Alert>
          </div>
        )}

        <HelperButtonContainer>
          <ChangeVideoButton>
            <OndemandVideoOutlinedIcon
              onClick={handleChangeVideo}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Change</ButtonText>
          </ChangeVideoButton>

          <MergeButton>
            <PostAddOutlinedIcon
              onClick={handleMergeBox}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Merge</ButtonText>
          </MergeButton>

          <TextButton>
            <TitleOutlinedIcon
              onClick={handleToggleText}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
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

          <ResetButton>
            <RestartAltOutlinedIcon
              onClick={handleReset}
              fontSize="large"
              sx={{ color: " #000000" }}
            />
            <ButtonText variant="body2">Reset</ButtonText>
          </ResetButton>

          <MuteButton>
            {!isMuted ? (
              <VolumeMuteIcon
                onClick={handleMute}
                fontSize="large"
                sx={{ color: " #000000" }}
              />
            ) : (
              <VolumeOffIcon
                onClick={handleUnMute}
                fontSize="large"
                sx={{ color: " #000000" }}
              />
            )}
            <ButtonText variant="body2">
              {!isMuted ? "Mute" : "Unmute"}
            </ButtonText>
          </MuteButton>
        </HelperButtonContainer>

        {isOpen && <TextDialog />}

        <div>
          {!isTrimmingDone ? (
            <div className="original-video-seconds-container">
              <p className="title">Original Video</p>
              <span className="time">{`00:${JSON.stringify(startValue).slice(
                0,
                3
              )}`}</span>
              <span>-</span>
              <span className="time">{`00:${JSON.stringify(endValue).slice(
                0,
                3
              )}`}</span>
            </div>
          ) : (
            <div className="trimmed-video-seconds-container">
              <p className="title">Trimmed Video</p>
              <span className="time">{`00:${JSON.stringify(
                sliderStartValue
              ).slice(0, 3)}`}</span>
              <span>-</span>
              <span className="time">{`00:${JSON.stringify(
                sliderEndValue
              ).slice(0, 3)}`}</span>
              <span className="calculate-trim-seconds">
                (00:{sliderEndValue - sliderStartValue} seconds)
              </span>
            </div>
          )}
        </div>

        <SliderContainer>
          <PlayPauseIconContainer>
            {!isVideoPlaying ? (
              <PlayIcon
                onClick={handlePlayClick}
                fontSize="large"
                sx={{ color: "#914979" }}
              />
            ) : (
              <PauseIcons
                onClick={handlePauseClick}
                fontSize="large"
                sx={{ color: "#914979" }}
              />
            )}
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
                      : "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
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

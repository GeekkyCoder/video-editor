import React, { useContext, useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Context } from "../../Context/Context";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Alert from "@mui/material/Alert";
import Share from "../../Share/Share";

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
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import CircularProgress from "@mui/material/CircularProgress";
import "../utils.css";
import SuccessAlert from "../SuccessAlert/SuccessAlert";
import TextDialog from "../TextDialog/TextDialog";

function VideoPlayer() {
  const [sliderStartValue, setSliderStartValue] = useState(0);
  const [sliderEndValue, setSliderEndValue] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [toggleMergeBox, setToggleMergeBox] = useState(false);
  const videoRef = useRef(null);
  const trimmingRef = useRef(null);
  const [isPublishButtonHovered, setIsPublishButtonHovered] = useState(false);

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
    isOpen,
    setIsSliderMovedByUser,
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
  } = useContext(Context);

  const handleSliderValues = (sliderValuesArray) => {
    setShowWarningAlert(false);
    setSuccesAlert(true);
    setIsSliderMoving(true);
    setIsDisableTrimButton(false);
    setIsSliderMovedByUser(true);
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
    setIsSliderMovedByUser(false);
    setIsTrimmingDone(false);
  };

  const handleMute = () => {
    setIsMuted(true);
  };

  const handleUnMute = () => {
    setIsMuted(false);
  };

  const handleToggleText = () => {
    setIsOpen((prevStat) => !prevStat);
  };

  const handleMergeBox = () => {
    setToggleMergeBox((prevStat) => !prevStat);
  };

  const handleChangeVideo = () => {
    setIsTrimmingDone(false);
    setUserHasChoosenVideo(false);
    setIsNotLoading(false);
    setTimeout(() => {
      setIsNotLoading(true);
    }, 1000);
  };

  const handleMouseEnterPublish = (e) => {
    e.stopPropagation();
    setIsPublishButtonHovered(true);
  };

  const handlePublishClick = (e) => {
    e.stopPropagation();
    setIsPublishButtonHovered((prevState) => !prevState);
  };

  const handleMouseEntOnTrimButton = () => {
    if (isDisableTrimButton) {
      setSuccesAlert(false);
      setShowWarningAlert(true);
    } else {
      setShowWarningAlert(false);
      setSuccesAlert(true);
    }
    setIsTrimButtonHovered(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      const duration = videoRef.current.getDuration() || 100;
      setVideoDuration(duration);
      videoRef.current.seekTo(startValue)
      videoRef.current.seekTo(endValue);
    }
  });

  useEffect(() => {
    if (isTrimmingDone && trimmingRef.current) {
      const trimmedVideoDuration = trimmingRef.current.getDuration() || 100;
      setVideoDuration(Math.round(Number(trimmedVideoDuration)));
      trimmingRef.current.seekTo(startValue);
    }
  }, [isTrimmingDone, startValue, videoDuration]);


  console.log(Math.round(Number(videoDuration)))

  return (
    <>
      {isTrimmingDone ? <SuccessAlert /> : ""}
      {isPublishButtonHovered && <Share />}
      <VideoEditorContainer className={`${theme}-mode`}>
        <PublishInviteButtonContainer>
          <PublishButtonContainer
            onMouseEnter={handleMouseEnterPublish}
            onClick={handlePublishClick}
          >
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
              pip={true}
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
            <p className="processing-text-video">Processing... </p>
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
            <Alert
              className="alert-message"
              severity="info"
              sx={{ width: "100%" }}
            >
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
            <Alert
              className="alert-message"
              severity="success"
              sx={{ width: "100%" }}
            >
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

          <TrimButton
            sx={{ opacity: isDisableTrimButton ? ".7" : "1" }}
            onMouseEnter={handleMouseEntOnTrimButton}
          >
            {(isSliderMoving || isTrimButtonHovered) && (
              <div className="trim-button-alert">
                {showWarningAlert && (
                  <div>
                    <Alert
                      className="alert-message"
                      severity="warning"
                      sx={{
                        width: "100%",
                        zIndex: "1000",
                        position: "relative",
                      }}
                    >
                      First Choose the timeframes from slider first to start
                      trimming!
                    </Alert>
                  </div>
                )}

                {showSuccessAlert && (
                  <div>
                    <Alert
                      className="alert-message"
                      severity="success"
                      sx={{
                        width: "100%",
                        zIndex: "1000",
                        position: "relative",
                      }}
                    >
                      You can now trim it!
                    </Alert>
                  </div>
                )}
              </div>
            )}
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
              // style={{width: `${videoDuration}px`}}
              // reverse={true}
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
                allowCross={true}
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
              // reverse={true}
              // style={{width: `${videoDuration}px`}}
                ariaLabelledByForHandle={() => "range"}
                autoFocus={true}
                range
                defaultValue={[0, 100]}
                min={videoDuration / 100}
                max={videoDuration}
                onChange={handleSliderValues}
                draggableTrack
                keyboard={true}
                pushable
                allowCross={true}
                activeDotStyle={[{ background: "blue" }]}
                trackStyle={[
                  {
                    background: "linear-gradient(#DBDEF5,blue)",
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

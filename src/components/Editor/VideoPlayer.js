import React, { useContext } from "react";
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
    ButtonText,
    SliderBox,
    SliderContainer,
} from "./VideoPlayerStyle";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import "./utils.css";

function VideoPlayer() {
    const { choosenVideo, theme, setThemeMode } = useContext(Context);

    return (
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
                <ReactPlayer url={choosenVideo} width="100%" height={"100%"} controls />
            </VideoContainer>

            <HelperButtonContainer>
                <TextButton>
                    <TitleOutlinedIcon fontSize="large" sx={{ color: " #000000" }} />
                    <ButtonText variant="body2">Text</ButtonText>
                </TextButton>

                <TrimButton>
                    <ContentCutOutlinedIcon fontSize="large" sx={{ color: " #000000" }} />
                    <ButtonText variant="body2">Trim</ButtonText>
                </TrimButton>

                <MergeButton>
                    <PostAddOutlinedIcon fontSize="large" sx={{ color: " #000000" }} />
                    <ButtonText variant="body2">Merge</ButtonText>
                </MergeButton>
            </HelperButtonContainer>

            <SliderContainer>
                <PlayPauseIconContainer>
                    <PlayIcon />
                </PlayPauseIconContainer>
                <SliderBox>
                    <Slider
                        ariaLabelledByForHandle={() => "range"}
                        autoFocus={true}
                        range
                        // onAfterChange={handleAfterChangeSliderValues}
                        // onChange={handleSliderChangeValues}
                        defaultValue={[0, 100]}
                        // min={videoDuration / 100}
                        // max={videoDuration}
                        // ref={sliderRef}
                        // onFocus={handleCFocusOnBubble}
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
                </SliderBox>
            </SliderContainer>
        </VideoEditorContainer>
    );
}

export default VideoPlayer;

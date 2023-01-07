import { styled, Box, Typography, Button } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export const VideoEditorContainer = styled(Box)`
  padding: 2em;
  @media (max-width: 650px) {
    min-height: 100vh;
  }
`;

export const PublishInviteButtonContainer = styled(Box)`
  width: 30%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3em;
  @media (max-width: 650px) {
    width: 60%;
    flex-direction: column;
    justify-content: end;
    margin-left: 8em;
  }
`;
export const PublishButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #b0c7f5;
  font-family: "Inter", sans-serif;
  width: 40%;
  &:hover {
    background-color: #b0c7f5;
  }
  border-radius: 10px;
  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 1em;
  }
`;

export const InviteButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #b0c7f5;
  font-family: "Inter", sans-serif;
  width: 40%;
  margin-left: 1em;
  &:hover {
    background-color: #b0c7f5;
  }
  border-radius: 10px;
  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 1em;
    margin-left: 0;
  }
`;

export const PublishText = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: #000000;
  font-weight: bold;
`;

export const InviteText = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: #000000;
  font-weight: bold;
`;

export const VideoContainer = styled(Box)`
  width: 50%;
  margin: 4em auto;
  border: 10px solid #9ec9d8;
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media (max-width: 650px) {
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;
    border: 6px solid #9ec9d8;
  }
`;

export const ModeContainer = styled(Box)`
  width: 10%;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 650px) {
  }
`;

export const HelperButtonContainer = styled(Box)`
  width: 50%;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const TextButton = styled(Box)`
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    background-color: #b0c7f5;
    cursor: pointer;
  }
  @media (max-width:650px){
      width: 15%;
  }
`;

export const TrimButton = styled(Box)`
 position: relative;
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    background-color: #b0c7f5;
    cursor: pointer;
  }
  @media (max-width:650px){
      width: 15%;
      margin-top: 1em;
  }
`;

export const DeleteButton = styled(`Box`)`
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    background-color: #b0c7f5;
    cursor: pointer;
  }
  @media (max-width:650px){
      width: 15%;
  }
`;
export const MergeButton = styled(`Box`)`
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    background-color: #b0c7f5;
  }
  @media (max-width:650px){
      width: 15%;
  }
`;

export const ResetButton = styled(`Box`)`
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    background-color: #b0c7f5;
  }
  @media (max-width:650px){
      width: 15%;
      margin-top: 1em;
  }
`;

export const ChangeVideoButton = styled(`Box`)`
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    background-color: #b0c7f5;
  }
  @media (max-width:650px){
      width: 15%;
  }
`;

export const MuteButton = styled(`Box`)` 
 width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #b0c7f5;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    background-color: #b0c7f5;
  }
  @media (max-width:650px){
      width: 15%;
      margin-top: 1em;
  }
`
export const ButtonText = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  margin-top: 0.2em;
  color: #000000;
  font-weight: 400;
  text-transform: capitalize;
`;

export const SliderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media (max-width: 650px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    position: relative;
  }
`;

export const SliderBox = styled(Box)`
  width: 95%;
  @media (max-width: 650px) {
    width: 100%;
    margin-top: 1em;
  }
`;

export const MoonIcon = styled(DarkModeOutlinedIcon)``;

export const SunIcon = styled(LightModeOutlinedIcon)``;

export const PlayIcon = styled(PlayArrowIcon)``;

export const PauseIcons = styled(PauseIcon)``;

export const PlayPauseIconContainer = styled(Box)`
   @media (max-width:650px){
    position: absolute;
    top: -3em;
    left: 7em;
    margin: 1em 0;
   }
`;

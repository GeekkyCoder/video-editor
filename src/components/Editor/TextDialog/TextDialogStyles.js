import { Box ,Button,styled} from "@mui/material";

export const DialogContainer = styled(Box)` 
    width: 500px;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media (max-width:650px){
        max-width: 90%;
    }
`

export const TextButton = styled(Button)` 
    width: 30%;
    display: block;
    margin: 1em auto;
    border-radius: 10px;
    &:hover{
        background-color: black;
    }
    @media (max-width:650px){
        width: 70%;
    }
`
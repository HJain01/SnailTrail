import "./StatusBar.css"
import {Step, StepLabel, Stepper} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function StatusBar(props: any) {
    let activeStep = props.activeStep,
        navigate = useNavigate();
    return (
        <div className="bottom-padding stepper-margin">
            <Stepper activeStep={activeStep} alternativeLabel>
                <Step onClick={() => navigate("/")}>
                    <StepLabel>Origins</StepLabel>
                </Step>
                <Step onClick={() => navigate("/destinations")}>
                    <StepLabel>Destinations</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Results</StepLabel>
                </Step>
            </Stepper>
        </div>
    )
}

import "./StatusBar.css"
import {Step, StepLabel, Stepper} from "@mui/material";

export default function StatusBar(props: any) {
    let activeStep = props.activeStep;
    return (
        <div className="align-end bottom-padding">
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Origins</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Destinations</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Results</StepLabel>
                </Step>
            </Stepper>
        </div>
    )
}

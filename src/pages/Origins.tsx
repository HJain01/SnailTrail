import "./Origins.css"
import StatusBar from "../components/StatusBar";
import AddressesList from "../components/AddressesList";
import {Button} from "@mui/material";

export default function Origins() {
    return (
        <div className="center-items">
            <StatusBar activeStep={0} />
            <AddressesList typeOfAddress="origin" />
            <Button variant="contained" className="next-step">Next Step</Button>
        </div>
    )
}

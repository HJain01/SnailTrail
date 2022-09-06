import "./Origins.css"
import AddressesInput from "../components/AddressesInput";
import StatusBar from "../components/StatusBar";
import AddressesList from "../components/AddressesList";
import {Button} from "@mui/material";

export default function Origins() {
    return (
        <div className="center-items">
            <StatusBar activeStep={0} />
            <AddressesInput typeOfAddress="origin" />
            <AddressesList />
            <Button variant="contained" className="next-step">Next Step</Button>
        </div>
    )
}

import "./Origins.css";
import "../global.css";
import StatusBar from "../components/StatusBar";
import AddressesList from "../components/AddressesList";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {getOrigins} from "../store/slices/originsSlice";
import {useEffect, useState} from "react";

export default function Origins() {
    let [showError, setShowError] = useState(false),
        origins = useSelector(getOrigins);
    const navigateToDestinations = () => {
        if (origins.length == 0) {
            setShowError(true);
        }
    }

    useEffect(() => {
        if (origins.length > 0) {
            setShowError(false);
        }
    })

    return (
        <div className="flex">
            <StatusBar activeStep={0} />
            <AddressesList typeOfAddress="origin" />
            <Button variant="contained" onClick={navigateToDestinations} >Next Step</Button>
            { showError
                ? <p className="validation-error">
                    *Need at least 1 origin address*
                </p>
                : null
            }
        </div>
    )
}

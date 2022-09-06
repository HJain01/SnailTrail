import React, {useState} from 'react'
import './AddressesInput.css'
import { TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {add} from "../store/slices/originsSlice";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function AddressesInput(props: any) {
    let typeOfAddress = props.typeOfAddress,
        textBoxPlaceholder = `Enter ${typeOfAddress} address`,
        [origin, setOrigin] = useState(""),
        [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    let addOrigin = () => {
        if (origin == "") {
            setShowError(true);
        } else {
            setShowError(false);
            dispatch(add(origin));
        }
    }

    return (
        <div className="rounded-border column-flex" data-testid="input-box">
            <div className="vertical-align">
                <TextField className="addresses-box"
                           label={textBoxPlaceholder}
                           onChange={(e) => {
                               setOrigin(e.target.value);
                           }}
                           data-testid="address-input"/>
                <AddBoxIcon className="icon" onClick={addOrigin} data-testid="add-address-button" />
            </div>
            {showError
                ? <p data-testid="error" className="validation-error">Type in address</p>
                : null
            }
        </div>
    );
}

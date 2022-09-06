import {List, ListItem, TextField} from "@mui/material";
import "./AddressesList.css"
import {useDispatch, useSelector} from "react-redux";
import {add, getOrigins, remove} from "../store/slices/originsSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function AddressesList(props: any) {
    let typeOfAddress = props.typeOfAddress,
        textBoxPlaceholder = `Enter ${typeOfAddress} address`,
        [origin, setOrigin] = useState(""),
        [showError, setShowError] = useState(false),
        originsList = useSelector(getOrigins);

    const dispatch = useDispatch();

    let addOrigin = () => {
        if (origin == "") {
            setShowError(true);
        } else {
            setShowError(false);
            dispatch(add(origin));
        }
    }

    const deleteAddress = (index: number) => {
        dispatch(remove(originsList[index]));
    }

    return (
        <div>
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
            <List className="list-margin">
                {originsList.map((address: string, index: number) => {
                    return(
                        <ListItem key={index} className="address-item" secondaryAction={
                            <DeleteIcon onClick={() => deleteAddress(index)} />
                        }>
                            <p className="address">{address}</p>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

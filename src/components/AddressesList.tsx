import "./AddressesList.css";
import "../global.css";
import {List, ListItem, ListItemText, TextField} from "@mui/material";
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
            setOrigin("");
        }
    }

    const deleteAddress = (index: number) => {
        dispatch(remove(originsList[index]));
    }

    const onEnterPress = (e: any) => {
        if (e.key == 'Enter') {
            addOrigin();
        }
    }

    return (
        <div className="column-flex">
            <div className="rounded-border input-grid">
                <TextField className="addresses-box area-a"
                           label={textBoxPlaceholder}
                           value={origin}
                           onChange={(e) => {
                               setOrigin(e.target.value);
                           }}
                           data-testid="address-input" onKeyDown={onEnterPress}/>
                <AddBoxIcon className="icon area-b" onClick={addOrigin} data-testid="add-address-button" />
                {showError
                    ? <p data-testid="error" className="validation-error area-c">
                        *Invalid Address*
                      </p>
                    : null
                }
            </div>
            <List>
                {originsList.map((address: string, index: number) => {
                    return(
                        <ListItem key={index} className="address-item" secondaryAction={
                            <DeleteIcon
                                onClick={() => deleteAddress(index)}
                                data-testid={`delete-${index}`}
                                className="icon"/>
                        }>
                            <ListItemText
                                className="address"
                                data-testid={`address-${index}`}
                                primary={address} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

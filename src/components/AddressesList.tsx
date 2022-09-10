import "./AddressesList.css";
import "../global.css";
import {List, ListItem, ListItemText, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {add as addOrigin, remove as removeOrigin} from "../store/slices/originsSlice";
import {add as addDestination, remove as removeDestination} from "../store/slices/destinationsSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function AddressesList(props: any) {
    let typeOfAddress = props.typeOfAddress,
        addressList = props.addressList,
        textBoxPlaceholder = `Enter ${typeOfAddress} address`,
        [address, setAddress] = useState(""),
        [showError, setShowError] = useState(false);

    const dispatch = useDispatch();

    const dispatchAdd = (address: string) => {
        if (typeOfAddress === "origin") {
            dispatch(addOrigin(address))
        } else if (typeOfAddress === "destination") {
            dispatch(addDestination(address))
        }
    }
    const dispatchRemove = (index: number) => {
        if (typeOfAddress === "origin") {
            dispatch(removeOrigin(index))
        } else if (typeOfAddress === "destination") {
            dispatch(removeDestination(index))
        }
    }

    let addAddress = () => {
        if (address == "") {
            setShowError(true);
        } else {
            setShowError(false);
            dispatchAdd(address);
            setAddress("");
        }
    };

    const deleteAddress = (index: number) => {
        dispatchRemove(index);
    }

    const onEnterPress = (e: any) => {
        if (e.key == 'Enter') {
            addAddress();
        }
    }

    return (
        <div className="column-flex">
            <div className="rounded-border input-grid">
                <TextField className="addresses-box area-a"
                           label={textBoxPlaceholder}
                           value={address}
                           onChange={(e) => {
                               setAddress(e.target.value);
                           }}
                           data-testid="address-input" onKeyDown={onEnterPress}/>
                <AddBoxIcon className="icon area-b" onClick={addAddress} data-testid="add-address-button" />
                {showError
                    ? <p data-testid="error" className="validation-error area-c">
                        *Invalid Address*
                      </p>
                    : null
                }
            </div>
            <List>
                {addressList.map((address: string, index: number) => {
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

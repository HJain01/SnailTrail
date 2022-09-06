import {List, ListItem} from "@mui/material";
import "./AddressesList.css"
import {useDispatch, useSelector} from "react-redux";
import {getOrigins, remove} from "../store/slices/originsSlice";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AddressesList() {
    let originsList = useSelector(getOrigins);
    const dispatch = useDispatch();

    const deleteAddress = (index: number) => {
        dispatch(remove(originsList[index]));
    }

    return (
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
    )
}

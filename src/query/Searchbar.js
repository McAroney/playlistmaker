import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTracks} from "../track/trackSlice";

export default function Searchbar() {

    const isLoading = useSelector((state) => state.tracks.loading);
    const dispatch = useDispatch();

    function input (e) {
        if (e.key == 'Enter') {
            let q = e.target.value;
            dispatch(getTracks(q));
             }
        };

    const Loading = () => {
        return isLoading == false ? <input type="text" onKeyPress={input}/> : 'Please Hold...';
        //if the app is NOT loading, print input, if false, app is loading and print please hold
    }

    return (
        <Loading/>
    ) 
}

      

      

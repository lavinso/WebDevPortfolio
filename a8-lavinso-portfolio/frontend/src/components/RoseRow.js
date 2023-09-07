// Each row must include 2 icons form the React Icons library

import React from 'react';
import {MdDelete, MdEditNote} from "react-icons/md";

function RoseRow({rose, onDelete, onEdit}) {
    return(
        <tr>
            
            <td> {rose.name}</td>
            <td> {rose.color}</td>
            <td> {rose.fragrance}</td>
            <td> {rose.breeder}</td>
            <td> {rose.type}</td>
            <td> {rose.year}</td>
            <td> {rose.date.slice(0,10)}</td>
            <td><MdDelete onClick={() => onDelete(rose._id)} /> </td>
            <td><MdEditNote onClick={() => onEdit(rose)} /></td>
        </tr>
    );
}

export default RoseRow;
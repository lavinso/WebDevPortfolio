//component must get the data by calling the 
//endpoint GET / exercises in the REST API.

import React from 'react';
import RoseRow from './RoseRow';


import {MdNoteAdd} from "react-icons/md";
import { Link } from 'react-router-dom';


function RoseTable({roses, onDelete, onEdit}) {
    return(
        
        <table id="roses">
            <caption><strong>List of favorite roses</strong></caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Fragrance 0-5</th>
                    <th>Breeder</th>
                    <th>Type</th>
                    <th>Year Introduced</th>
                    <th>Date Added</th>
                    <th title="Clicking the delete icon will remove the rose from the list">Delete</th>
                    <th title="Editing will occur on a new screen">Edit</th>
                </tr>
            </thead>
            <tbody>
                {roses.map((rose, i) => 
                    <RoseRow
                        rose={rose}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>   
        </table>
    );
}

export default RoseTable;
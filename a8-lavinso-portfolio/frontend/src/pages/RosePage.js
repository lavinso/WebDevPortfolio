import {React, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

// import components
import RoseTable from '../components/RoseTable';


import { IoRose } from "react-icons/io5";  

import {MdNoteAdd} from "react-icons/md";
import { Link } from 'react-router-dom';

// Use SPA render home page content
function RosePage({setRose}) {

    // Use navigate 
    const navigate = useNavigate();

    // Use state to bring in the data
    const [roses, setRoses] = useState([]);

    //RETRIEVE the list of roses
    const loadRoses = async () => {
        const response = await fetch('/roses');
        const roses = await response.json(); 
        setRoses(roses);
        
    }
    
    //UPDATE a single rose
    const onEditRose = async rose => {
        setRose(rose);
        navigate("/update");
    }

    //DELETE a single rose
    const onDeleteRose = async _id => {
        const response = await fetch(`/roses/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/roses');
            const roses = await getResponse.json();
            setRoses(roses);
        } else {
            console.error(`The row for id: ${_id}, failed to delete due to (status code = ${response.status}).`)
        }
    }

    //LOAD all the roses
    useEffect(() => {
        loadRoses();
    }, []);

    //DISPLAY the roses
    return (
        <>
            <h2><i><IoRose/></i>Favorite Roses</h2>
            <article>
                <p>Click the add, delete, or edit icons to update the rose list</p>
                
                <RoseTable
                    roses={roses}
                    onEdit={onEditRose}
                    onDelete={onDeleteRose}
                />
             <p>Add a rose <Link to="/create"><i><MdNoteAdd/></i></Link></p>  
            </article>
        </>
    );
}

export default RosePage;
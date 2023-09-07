import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
/*import RoseTableHead from '../componenets/RoseTableHead.js';*/
import { IoRose } from 'react-icons/io5';

export const EditPage = ({ roseToEdit }) => {
 
    const [name, setName]       = useState(roseToEdit.name);
    const [color, setColor]         = useState(roseToEdit.color);
    const [fragrance, setFragrance] = useState(roseToEdit.fragrance);
    const [breeder, setBreeder] = useState(roseToEdit.breeder);
    const [type, setType] = useState(roseToEdit.type);
    const [year, setYear] = useState(roseToEdit.year);
    const [date, setDate] = useState(roseToEdit.date);
    
    const navigate = useNavigate();

    const editRose = async () => {
        const response = await fetch(`/roses/${roseToEdit._id}`,
        {
            method: 'put',
            body: JSON.stringify({ 
                name: name, 
                color: color, 
                fragrance: fragrance,
                breeder: breeder,
                type: type,
                year: year,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The rose has been updated`);
        } else {
            const errMessage = await response.json();
            alert(`The attempt to update the rose has failed due to status ${response.status}. ${errMessage.Error}`);
        }
        navigate("/RosePage");
    };

    return (
        <>
        <article>
            <h2><i><IoRose/></i>Edit a rose</h2>
            <p>If you see an error, use the icons to update one of the roses.</p>
            <table id="roses">
                <caption>Which rose would you like to edit?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Fragrance 0-5</th>
                        <th>Breeder</th>
                        <th>Type</th>
                        <th>Year Introduced</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label for="name"></label>
                        <input
                            type="text"
                            placeholder="Name of rose"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name"
                            autoFocus />
                        </td>

                    <td><label for="color"></label>
                        <input
                            type="text"
                            value={color}
                            placeholder="Color"
                            id="color"
                            onChange={e => setColor(e.target.value)} />
                        
                    </td>

                    <td><label for="fragrance"> 0 = no scent; 5 = strongest scent</label>
                        <input
                            type="number"
                            placeholder="0-5"
                            value={fragrance}
                            max="5"
                            min="O"
                            onChange={e => setFragrance(e.target.value)} 
                            id="fragrance" />
                    </td>

                    <td><label for="breeder"></label>
                        <input
                            type="text"
                            placeholder="Hybridizer"
                            value={breeder}
                            onChange={e => setBreeder(e.target.value)} 
                            id="breeder" />
                    </td>

                    <td><label for="rtype">Select One</label>
                        <select
                            name="type" class="typedropdown"
                            onChange={r => setType(r.target.value)}
                            required
                        >   <option>Select One</option>
                            <option value="Climber">Climber</option>
                            <option value="English shrub rose">English Shrub Rose </option>
                            <option value="Floribunda">Floribunda</option>
                            <option value="Grandiflora">Grandiflora</option>
                            <option value="Hybrid Tea">Hypbrid Tea </option>
                            <option value="Miniature">Miniature Rose</option>
                            <option value="Old Garden">Old Garden</option>
                            <option value="Shrub">Shrub Rose</option>
                        </select>
        
                    </td>

                    <td><label for="year"></label>
                        <input
                            type="number"
                            placeholder="YYYY"
                            value={year}
                            onChange={e => setYear(e.target.value)} 
                            id="year"
                            pattern="\d{4,4}" />
                    </td>
                    <td><label for="date"></label>
                        <input
                            type="Date"
                            placeholder="YYYYDDMM"
                            value={year}
                            onChange={e => setYear(e.target.value)} 
                            id="year"
                         />
                    </td>


                    <td>
                    <label for="submit">Save Changes</label>
                        <button
                            type="submit"
                            onClick={editRose}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditPage;
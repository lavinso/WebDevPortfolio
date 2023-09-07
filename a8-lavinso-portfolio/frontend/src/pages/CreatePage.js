import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
/*import RoseTableHead from '../components/RoseTableHead.js';*/
import { IoRose } from 'react-icons/io5';

export const CreatePage = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [ fragrance, setFragrance] = useState('');
    const [breeder, setBreeder] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [date, setDate] = useState('') 

    const navigate = useNavigate();

    const addRose = async () => {
        const response = await fetch('/roses', {
            method: 'post',
            body: JSON.stringify({name:name, color: color, fragrance: fragrance, breeder: breeder, type: type, year: year, date: date}),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(response.status === 201) {
            alert("You successfully added a rose to the list of roses.");
        } else{ 
            alert(`The input failed due to missing data: (status code = ${response.status}`);
        }
        navigate("/RosePage");
        };

        return (
            <>
            <article>
            <h2><i><IoRose/></i>Enter a Rose</h2>
                <p> Add one of your favorite roses to the list.</p>
                <table id="roses">
                    <caption><strong>Rose</strong></caption>
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
                            <td><label for="name"> </label>
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    value={name} 
                                    id="name" name="name"
                                    onChange={r => setName(r.target.value)} required
                                    autoFocus/>
                                </td>
                                
                            <td><label for="color" ></label> 
                                <input 
                                    type="text"
                                    value={color}
                                    id="color"
                                    name="color"
                                    placeholder="Color"
                                    onChange={r => setColor(r.target.value)} required
                                />
                            </td>

                            <td><label for="fragrance">0 = no scent; 5 = strongest scent</label>
                                <input 
                                    type="number"
                                    placeholder="0 - 5"
                                    value={fragrance} 
                                    id="fragrance" 
                                    name="fragrance"
                                    onChange={r => setFragrance(r.target.value)}
                                    />
                            </td>

                            <td><label for="breeder"></label>
                                <input 
                                    type="text"
                                    placeholder="Hybridizer"
                                    value={breeder} 
                                    id="breeder" 
                                    name="breeder"
                                    onChange={r => setBreeder(r.target.value)}
                                    />
                            </td>
                            <td><label for="rtype">Select One</label>
                                <select
                                    name="type" class="typedropdown"
                                    onChange={r => setType(r.target.value)}
                                >
                                    <option> Select One</option>
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
                                <input type="number"
                                    placeholder="YYYY"
                                    value={year} 
                                    id="year" 
                                    name="year"
                                    required
                                    onChange={r => setYear(r.target.value)}
                                    pattern="\d{4,4}"
                                />
                            </td>
                            <td><label for="date"></label>
                                <input type="Date"
                                    placeholder="YYYY-DD-MM"
                                    value={date} 
                                    id="date" 
                                    name="date"
                                    required
                                    onChange={r => setDate(r.target.value)}
                                />
                            </td>
                            <td><button class="wait" onClick={addRose}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
    }

export default CreatePage;
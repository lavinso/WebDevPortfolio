// Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';
import{ IoHomeSharp, IoCartSharp, IoNewspaperOutline, IoRose, IoMail } from "react-icons/io5";
import {MdNoteAdd} from "react-icons/md";
//import {GrGallery} from "react-icons/gr";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="App-navigation">
        <Link to="/"><i><IoHomeSharp/></i> Home</Link>
        <Link to="/TopicsPage"><i><IoNewspaperOutline/></i> Topics</Link>
        <Link to="/RosePage"><i><IoRose/></i> Roses List</Link>
        <Link to="/create"><MdNoteAdd/> Add Rose</Link>
    </nav>
  );
}

export default Navigation;

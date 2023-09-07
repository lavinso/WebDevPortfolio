// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import RosePage from './pages/RosePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage'

// Define the function that renders the content in Routes, using State.
function App() {

  const [rose, setRoseToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Sonja 
              <i><img src="./android-chrome-192x192.png" alt="Sonja Lavin's Portfolio" /></i>
              Lavin
            </h1>
            <p>Portfolio project for web development.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/RosePage" element={<RosePage setRose={setRoseToEdit} />} />
                    <Route path="/create" element={<CreatePage />} /> 
                    <Route path="/update" element={<EditPage roseToEdit={rose} />} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; Sonja Lavin 2023 Copyright statement</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
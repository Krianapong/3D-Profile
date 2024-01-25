import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import ThreeD from './3D';
import About from './About'; // Corrected import statement

function App() {
  return (
    <Router> {/* Ensure that App is wrapped within a Router component */}
      <div>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ThreeD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

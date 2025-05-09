// src/components/AllergenComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllergenComponent() {
  const [allergens, setAllergens] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/allergens')
      .then(res => setAllergens(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Allergens</h2>
      <ul>
        {allergens.map((allergen, index) => (
          <li key={index}>{allergen.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllergenComponent;

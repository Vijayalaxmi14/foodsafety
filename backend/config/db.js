// allergenController.js
exports.addAllergen = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    // Logic to add the allergen to the database (example)
    const newAllergen = { name, description };
    
    // Simulate saving allergen to database
    // Replace this with actual database saving logic (e.g., MongoDB)
    console.log('Allergen added:', newAllergen);
    
    res.status(201).json({
      message: 'Allergen added successfully',
      allergen: newAllergen
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

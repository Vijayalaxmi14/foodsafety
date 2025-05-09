import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryOverview = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('/api/inventory').then(res => setInventory(res.data));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Inventory Overview</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Item</th><th>Quantity</th><th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td style={{ color: new Date(item.expiry) < new Date() ? 'red' : 'black' }}>
                {item.expiry}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryOverview;

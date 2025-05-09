import React from 'react';
import HygieneLogs from './chef/HygieneLogs';
import TrainingRecords from './chef/TrainingRecords';
import InventoryView from './chef/InventoryView';

const ChefDashboard = ({ staffId }) => {
  return (
    <div>
      <h1>Chef Dashboard</h1>
      <HygieneLogs />
      <TrainingRecords staffId={staffId} />
      <InventoryView />
    </div>
  );
};

export default ChefDashboard;

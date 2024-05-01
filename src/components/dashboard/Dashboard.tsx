import Controls from './Controls';
import Create from './Create';
import Update from './Update';
import Generate from './Generate';

const Dashboard = () => {
  return (
    <>
      <Controls />
      <Create />
      <Update />
      <Generate quantity={100} />
    </>
  );
};

export default Dashboard;

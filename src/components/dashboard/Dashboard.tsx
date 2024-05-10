import Controls from './Controls';
import Create from './Create';
import Update from './Update';
import Generate from './Generate';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Controls />
      <Create />
      <Update />
      <Generate quantity={100} />
    </section>
  );
};

export default Dashboard;

import { DashboardContainer } from 'components/garage/dashboard/Dashboard.styled';
import Controls from './Controls';
import Create from './Create';
import Update from './Update';
import Generate from './Generate';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Controls />
      <Create />
      <Update />
      <Generate quantity={100} />
    </DashboardContainer>
  );
};

export default Dashboard;

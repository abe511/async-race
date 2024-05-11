import styled from 'styled-components';
import Controls from './Controls';
import Create from './Create';
import Update from './Update';
import Generate from './Generate';

const DashboardStyled = styled.section`
  border: 1px solid royalblue;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #151515;
  color: deepskyblue;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(115, 0, 255, 0.7);
  text-shadow: 0 0 5px rgba(0, 162, 255, 0.9);
`;

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Controls />
      <Create />
      <Update />
      <Generate quantity={100} />
    </DashboardStyled>
  );
};

export default Dashboard;

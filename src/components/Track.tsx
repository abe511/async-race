import Grid from './Grid';

const LANE_COUNT = 7;

const trackStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'max-content',
  border: '2px solid green',
  writingMode: 'vertical-lr',
  textOrientation: 'mixed',
  userSelect: 'none',
};

const startStyle: React.CSSProperties = {
  border: '1px solid red',
  // flexGrow: '1',
  width: '5rem',
};

const finishStyle: React.CSSProperties = {
  border: '1px solid yellow',
  // flexGrow: '1',
  width: '5rem',
};

const laneStyle: React.CSSProperties = {
  border: '1px solid gray',
  flexGrow: '10',
  height: '5rem',
};

const laneContainerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  border: '1px solid violet',
};

const createLanes = (quantity: number) => {
  const lanes = [];
  for (let i = 0; i < quantity; i += 1) {
    lanes.push(
      <span key={i} style={laneStyle}>
        track {i + 1}
      </span>
    );
  }
  return lanes;
};

const Track = () => {
  return (
    <>
      <div style={trackStyle}>
        <span style={startStyle} />
        <span>START</span>
        <span style={laneContainerStyle}>{createLanes(LANE_COUNT)}</span>
        <span>FINISH</span>
        <span style={finishStyle} />
      </div>
      <Grid />
    </>
  );
};

export default Track;

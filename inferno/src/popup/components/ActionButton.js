import Inferno from 'inferno';

const styles = {
  color: '#f8f4f0',
  backgroundColor: '#1e72b5',
  width: '100%',
  padding: '10px',
  border: 'none',
};

export default ({ action, text }) => (
  <button style={styles} onClick={() => action()}>{text}</button>
);
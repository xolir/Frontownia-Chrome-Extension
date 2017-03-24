import Inferno from 'inferno';

const styles = {
  color: '#f8f4f0',
  backgroundColor: '#1e72b5',
  width: 'calc(100% - 10px)',
  padding: '5px',
  border: 'none',
  fontSize: '10px',
};

export default ({ page }) => (
  <p style={styles}>{page.url}</p>
)
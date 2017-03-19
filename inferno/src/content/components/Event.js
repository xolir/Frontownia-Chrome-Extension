import Inferno from 'inferno';

const styles = {
    paddingLeft: '10px'
}
const Event = ({ name, place, date, time }) => (
  <div className="event">
    <h2>{name}</h2>
    <h3>{place}<span style={styles}>{date}{time}</span></h3>
  </div>
);

export default Event;

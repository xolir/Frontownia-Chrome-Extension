import Inferno from 'inferno';
import Component from 'inferno-component';

import Event from '../components/Event';
import withConnection from '../../common/connectors/backgroundConnector';

const styles = {
  backgroundColor: 'white',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  color: '#1e72b5',
  position: 'absolute',
  top: '0',
  left: '0',
  padding: '0 30px',
};

class EventsContainer extends Component {
  render() {
    const meetings = this.props.appState.meetings || [];
    return (
      <div style={styles} className="events-container">
        {
          meetings.map((event) => (
            <Event
              name={event.name}
              place={event.place}
              date={event.date}
              time={event.time}
            />
          ))
        }
      </div>
    )
  }
}

export default withConnection(EventsContainer);


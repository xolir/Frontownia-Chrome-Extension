import Inferno from 'inferno';
import Component from 'inferno-component';

import Event from '../components/Event';
import withConnection from '../connectors/backgroundConnector';

import { fetchMeetingsData } from '../../background/actions/actions';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const fetchMeetingsDataMessage = fetchMeetingsData();
    this.props.connection.postMessage(fetchMeetingsDataMessage);
  }
  render() {
    const meetings = this.props.appState.meetings || [];
    return (
      <div className="events-container">
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


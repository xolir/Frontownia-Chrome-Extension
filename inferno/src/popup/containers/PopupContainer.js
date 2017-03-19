import Inferno from 'inferno';
import Component from 'inferno-component';

import ActionButton from '../components/ActionButton';
import withConnection from '../../common/connectors/backgroundConnector';

import {
  fetchMeetingsData,
  clearMeetingsData
} from '../../background/actions/actions';

const styles = {
  margin: '0',
  width: '100px',
};

class PopUpContainer extends Component {
  showMeetings() {
    const fetchMeetingsDataMessage = fetchMeetingsData();
    this.props.connection.postMessage(fetchMeetingsDataMessage);
  };
  hideMeetings() {
    const clearMeetingsDataMessage = clearMeetingsData();
    this.props.connection.postMessage(clearMeetingsDataMessage)
  };
  render() {
    return (
      <div style={styles}>
        <ActionButton action={() => this.showMeetings()} text={"Show meetings"}/>
        <ActionButton action={() => this.hideMeetings()} text={"Hide meetings"}/>
      </div>
    )
  }
}

export default withConnection(PopUpContainer);


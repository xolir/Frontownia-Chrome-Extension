import Inferno from 'inferno';
import Component from 'inferno-component';

import ActionButton from '../components/ActionButton';
import VisitedPage from '../components/VisitedPage';
import withConnection from '../../common/connectors/backgroundConnector';

import {
  fetchMeetingsData,
  clearMeetingsData
} from '../../background/actions/actions';

const styles = {
  margin: '0',
  width: '400px',
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
   const visitedPages = this.props.appState.visitedPages || [];
    return (
      <div style={styles}>
        <ActionButton action={() => this.showMeetings()} text={"Show meetings"}/>
        <ActionButton action={() => this.hideMeetings()} text={"Hide meetings"}/>
        <h2>Visited pages</h2>
        {
          visitedPages.map(page => (<VisitedPage page={page} />))
        }
      </div>
    )
  }
}

export default withConnection(PopUpContainer);


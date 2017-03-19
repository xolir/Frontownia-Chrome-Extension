import Inferno from 'inferno';
import Component from 'inferno-component';


export default (WrappedComponent) => (
  class extends Component {
    constructor(props) {
      super(props);

      this.chromeBackgroundConnection = chrome.runtime.connect();

      this.state = {
        appState: {}
      };

      this.chromeBackgroundConnection.onMessage.addListener((appState) => {
        this.setState({
          appState: appState
        })
      });
    }

    render() {
      return <WrappedComponent
        appState={this.state.appState}
        connection={this.chromeBackgroundConnection}
      />;
    }
  }
)
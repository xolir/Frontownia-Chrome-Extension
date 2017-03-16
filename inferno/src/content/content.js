import Inferno from 'inferno';
import EventsContainer from './containers/EventsContainer';

const applicationBox = document.createElement('div');
applicationBox.id = 'app';

document.getElementsByTagName('body')[0].appendChild(applicationBox);

Inferno.render(<EventsContainer />, document.getElementById('app'));

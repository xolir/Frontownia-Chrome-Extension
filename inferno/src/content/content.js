import Inferno from 'inferno';
import EventsContainer from './containers/EventsContainer';

const applicationBox = document.createElement('div');
applicationBox.id = 'app';

document.body.appendChild(applicationBox);

Inferno.render(<EventsContainer />, document.getElementById('app'));

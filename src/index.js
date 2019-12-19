import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById("root");
ReactDOM.render(<Metronome />, rootElement);
registerServiceWorker();
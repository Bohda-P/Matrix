import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App/App';
import store from './redux/reducers';



ReactDOM.render(
   
<Provider store = {store}>
   <App />
</Provider>,
document.getElementById('root'));
   



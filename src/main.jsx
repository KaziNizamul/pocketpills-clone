import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Routes from './core/routes/route';
import store from './data/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

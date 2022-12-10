// index.js is a file which connect Root component (App Component)
// with index.html (Page)
import App from './App';
import ReactDOM from 'react-dom';
const div = document.querySelector('#root');
const root = ReactDOM.createRoot(div);
root.render(<App/>);
// Component will be call in JSX Style.
//ReactDOM.render(<App/>,div);
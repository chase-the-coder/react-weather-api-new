import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';

const AppWrapper = () => {
	return (
		<ThemeProvider>
			<App />
		</ThemeProvider>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<AppWrapper />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
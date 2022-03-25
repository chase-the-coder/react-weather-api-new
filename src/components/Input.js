import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';

function Input() {
	const [ input, setInput ] = useState('');
	const context = useContext(ThemeContext);
	console.log(input);
	return (
		<form>
			<label htmlFor="location">Location</label>
			<input type="text" id="location" value={input} onChange={(e) => setInput(e.target.value)} />
		</form>
	);
}

export default Input;
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import image from './img/ua_flag.jpeg';

function Image() {
	return (
		<div>
			<img src={image} alt='ua_flag' />
			<p>А вона, а вона сидітиме сумна,</p>
			<p>Буде пити – не п’яніти від дешевого вина.</p>
			<p>Я співатиму для неї, аж бринітиме кришталь</p>
			<p>Та хіба зуміє голос подолати цю печаль.</p>
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello word</h1>
				<h2>I hope you enjoy learning React!</h2>
				<Image />
			</header>
		</div>
	);
}

export default App;

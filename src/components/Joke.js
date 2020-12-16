import React from 'react';

const Joke = props => (
<div className="info">
	{ props.joke && <p className="joke">{props.joke}</p> }
	{ props.error && <p className="error"> {props.error}</p> }
</div>
);

export default Joke;
import React from 'react';

function Spacer({ w, h, ...props }) {
	const styles = {
		width: w ? `${w}rem` : undefined,
		height: h ? `${h}rem` : undefined,
	};

	return <div style={styles} {...props} />;
}

export default Spacer;

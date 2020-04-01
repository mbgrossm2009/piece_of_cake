import React from 'react';


class Cakes extends React.Component {
	render() {
		const { title, description, src } = this.props;
	
		return (
			<ul>
                <li><img src={src} alt='My Job' /></li>
                <li>{title}</li>
                <li>{description}</li>
			
			
			</ul>
		);
	}
}

export default Cakes;
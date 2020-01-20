import React from 'react'

class Loader extends React.Component {
	render() {
		return (
			<div className="all-center ">
				<div className="lds-ripple"><div></div><div></div></div>
			</div>
		)
	}
}

export default Loader
import React from 'react'

class Loader extends React.Component {
	render() {
		return (
			<div className="all-center ">
				<div class="lds-ripple"><div></div><div></div></div>
			</div>
		)
	}
}

export default Loader
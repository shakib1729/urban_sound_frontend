import React from 'react'

class Upload extends React.Component {

  state = {
  	file: null, // The current file which is uploaded
  	prediction: ""  // The prediction of this file which we will get by calling the backend api
  }
  
  // When 'Predict' button is pressed, make a POST request to the backend API by passing the uploaded file and get the result
  // and store it in the state
  onFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',this.state.file);
    const fetchResponse = await fetch('http://127.0.0.1:5000/predict',{
    	method: 'POST',
    	body: formData
    });
    const res = await fetchResponse.json();
    console.log(res['prediction'])
    this.setState({prediction: res['prediction']})
  }

  // As soon as a file is uploaded, save that file in the state and don't send it to the backend API
  //  unless 'Predict' button is selected
  onChange = e => this.setState({file:e.target.files[0]});  

  render() {
    return (
    	<div>
    		<form onSubmit={this.onFormSubmit}>
	        <h1>File Upload</h1>
	        <input type="file" onChange={this.onChange} />
	        <button type="submit">Predict</button>
	      </form>
	      {this.state.prediction}
    	</div>
   )
  }
}



export default Upload
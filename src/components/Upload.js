import React from 'react'
import Loader from './Loader';

class Upload extends React.Component {

  state = {
  	file: null, // The current file which is uploaded
  	prediction: "",  // The prediction of this file which we will get by calling the backend api
    loading: false
  }
  
  // When 'Predict' button is pressed, make a POST request to the backend API by passing the uploaded file and get the result
  // and store it in the state
  onFormSubmit = async e => {
    this.setState({ loading: true });
    // console.log(this.state.file)
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',this.state.file);
    const fetchResponse = await fetch('http://urban-sound-backend.herokuapp.com//predict',{
    	method: 'POST',
    	body: formData
    });
    const res = await fetchResponse.json();
    this.setState({prediction: res['prediction'], loading: false})
  }

  // As soon as a file is uploaded, save that file in the state and don't send it to the backend API
  //  unless 'Predict' button is selected
  onChange = e => this.setState({file:e.target.files[0], prediction: ""});  

  render() {
    return (
    	<div className="container">
    		<form onSubmit={this.onFormSubmit} className="card shadow trans2">
	        
          <label htmlFor="files" className="btn btn-block text-center trans">Select File</label>
          Selected File: {this.state.file && this.state.file.name}
	        <input id="files"  type="file" onChange={this.onChange} accept=".wav"style={{visibility:'hidden'}} />
	        <button className="btn btn-block trans" type="submit">Predict</button>
	        <div className="container p-3 ">
          {this.state.loading ? 
            <Loader />
            :
            <p className="large text-center text-light">{this.state.prediction}</p>
          }
          
          
          </div>
          
        </form>
	     
    	</div>
   )
  }
}



export default Upload

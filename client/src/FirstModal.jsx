import React from 'react'

class FirstModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      to: '',
      optional: null,
      error: '',
      errorClass: 'hide-error',
      success: '',
      successClass: 'hide-success'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validityCheck = this.validityCheck.bind(this)
  }


  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value  
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    var data = [this.state.name, this.state.email, this.state.to, this.state.optional]
    console.log(data)
    this.validityCheck(data)
  }
  validityCheck(value){
    if (value[0].length === 0){
      this.setState({
        errorClass: 'show-error',
        error: 'The name you entered is invalid. Check the field highlighted below and try again.'
      })
    }
    else if (!value[1].includes("@") && !value[1].includes(".com")) {
      this.setState({
        errorClass: 'show-error',
        error: 'The email you entered is invalid. Check the field highlighted below and try again.'
      })
    }
    else if (!value[2].includes("@") && !value[2].includes(".com")){
      this.setState({
        errorClass: 'show-error',
        error: 'The \'To\' field is empty'
      })
    }
    else {
      this.setState({
        error: '',
        errorClass: 'hide-error',
        successClass: 'show-success',
        success: 'Cool. Successfully Shared'
      })
      setTimeout(()=>this.props.handleClose('firstclassname'),3000)
    }
  
  }

render(){
  return(
    <div>
      <div className="top">
        <h2 className="title">Share Review</h2>
        <button className="x" onClick={()=>this.props.handleClose('firstclassname')}>X</button>
      </div>

      <div className="modal1-container">
        <div className={this.state.errorClass}>
          {this.state.error}
        </div>

        <div className={this.state.successClass}>
          {this.state.success}
        </div>

        <div className="modal-media">
          <a className="facebook">Share on Facebook</a>
          <a className="twitter">Share on Twitter</a>
        </div>

        <div className="link">
          <input className="input" type="text" value="https://localhost:3004" />
        </div>

        <div className="or">
          <p >OR</p>
        </div>

        <div>
          <form className="modal1-form" onSubmit={this.handleSubmit}>
            <p>Your Name</p>
            <input type="text" name="name" onChange={this.handleChange}/>
            <p>Your Email</p>
            <input type="text" name="email" onChange={this.handleChange}/>
            <p>To</p>
            <input type="text" name="to" onChange={this.handleChange}/>
            <p>Add a note Optional</p>
            <input type="text" name="optional" onChange={this.handleChange}/>
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>

      </div>
    </div>
    )
  }
}


export default FirstModal
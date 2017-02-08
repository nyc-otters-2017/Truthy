class HomePage extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { results: [] }
  }

  handleSubmit(event){
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: '/analyze',
      data: {urlString: this.refs.urlString.value}
    })
     .done(response=>{
       console.log('sending...', this.refs.urlString.value)
       location.href = `/results`
     })
  }

  render(){
    return(
      <div className="centerpage">
        <header id='main-logo'>
          <h1 className='text-center'>Truthy</h1>
          <img className="home_logo" src="148653868433366.png" alt="Logo"/>
        </header>
        <form className="form-group text-center" onSubmit={this.handleSubmit}>
          <input className="form-control" ref='urlString' type='text' name='urlString' placeholder="Enter Url"/>
          <input className="btn btn-info" type='submit'/>
        </form>
        <div>
          <p></p>
        </div>
      </div>
    )
  }
}

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
       debugger
       console.log('sending...', this.refs.urlString.value)
       location.href = `/results`
     })
  }

  render(){
    return(

      <div className="centerpage">
        <img className="home_logo" src="/assets/logo2.png" alt="Logo"/>
        <form className="form-group text-center" onSubmit={this.handleSubmit}>
          <input className="form-control" ref='urlString' type='text' name='urlString' placeholder="Enter Url"/>

          <br/>
          <input className="btn btn-info" type='submit'/>
        </form>
        <div>
          <p> -Our missionis to promote responsible consumption of news material. -Master Tonny Sensei </p>
        </div>
      </div>
    )
  }
}

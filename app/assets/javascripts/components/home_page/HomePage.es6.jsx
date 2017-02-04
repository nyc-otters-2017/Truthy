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
       console.log('success handler', response)
     })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input ref='urlString' type='text' name='urlString'/>
        <input type='submit'/>
      </form>
    )
  }
}

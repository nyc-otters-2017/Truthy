class HomePage extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('success')
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text'/>
        <input type='submit'/>
      </form>
    )
  }
}

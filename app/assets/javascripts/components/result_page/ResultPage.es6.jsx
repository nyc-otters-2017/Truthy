class ResultPage extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    console.log("yay")
    $.ajax({
      url: '/results'
    })
    .done(response => {
      console.log("response", response)
    })
  }

  render() {
    return(
      <div className='result-container'>
        <input type="button" name="revealResults" onClick={this.handleClick} value="Article Status" />
        <BlackList fullContact={this.props.fullContact} />
      </div>
    )
  }
}

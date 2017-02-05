class Keyword extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let status = this.state.details
    this.setState({details: !status})
  }

  render() {
    const yourDetailsAreShowing = this.state.details

    if (yourDetailsAreShowing) {
      var details = (
        <ul>
          {
            <li>Estimated relevance: {(this.props.data.relevance * 100) + '%'}</li>
          }
        </ul>
      )
    }
    return (
      <div>
        <div>
          <a href="#" onClick={this.handleClick}>{this.props.data.text}</a>
        </div>
        <div>
          { details }
        </div>
      </div>
    )
  }
}

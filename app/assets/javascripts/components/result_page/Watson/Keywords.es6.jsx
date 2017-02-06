class Keywords extends React.Component {

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
        <div>
          {
            this.props.keywords.map((keyword, i ) => {
              return (
                <Keyword key={i} data={keyword} />
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
        <div>
          <a href="#" onClick={this.handleClick}>Keywords</a>
        </div>
          { details }
      </div>
    )
  }
}

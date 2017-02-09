class Concept extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    debugger
    event.preventDefault()
    let status = this.state.details
    this.setState({details: !status})
  }

  render() {
    const yourDetailsAreShowing = this.state.details

    function isLink(label) {
      if (label[1].startsWith('http')) {
        return label
      }
    }

    var links = Object.entries(this.props.info).filter(isLink)
    debugger
    if (yourDetailsAreShowing) {
      var details = (
        <ul>
          {
            links.map((link, i) => {
              return (
              <li className="concept-details" key={i}><a href={link[1]}>{link[0]}</a></li>
              )
            })
          }
        </ul>
      )
    }
    return (
      <div>
        <div className="concept">
          <a href="#" onClick={this.handleClick}>{this.props.info.text}</a>
        </div>
        <div>
          { details }
        </div>
      </div>
    )
  }
}

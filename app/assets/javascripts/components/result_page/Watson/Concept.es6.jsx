class Concept extends React.Component {

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

    function isLink(label) {
      if (label[1].startsWith('http')) {
        return label
      }
    }

    var links = Object.entries(this.props.info).filter(isLink)

    if (yourDetailsAreShowing) {
      var details = (
        <ul>
          {
            links.map((link) => {
              return (
              <li><a href={link[1]}>{link[0]}</a></li>
              )
            })
          }
        </ul>
      )
    }
    return (
      <div>
        <div>
          <a href="#" onClick={this.handleClick}>{this.props.info.text}</a>
        </div>
        <div>
          { details }
        </div>
      </div>
    )
  }
}

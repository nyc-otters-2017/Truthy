class AboutButton extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <About/> )
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}><p>Learn more about Truthy and how the site works</p></a>
    )
  }
}

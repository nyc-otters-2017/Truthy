class Body extends React.Component {
  constructor() {
    super()
    this.state = {display: true}
  }
  render() {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <p>By {this.props.data.author}</p>
        <p>{this.props.data.text}</p>
      </div>
    )
  }

}

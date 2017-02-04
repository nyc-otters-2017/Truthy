class Body extends React.Component {

  render() {
    return (
      <h1>{this.props.data.title}</h1>
      <p>{this.props.data.author}</p>
      <p>{this.props.data.text}</p>
    )
  }

}

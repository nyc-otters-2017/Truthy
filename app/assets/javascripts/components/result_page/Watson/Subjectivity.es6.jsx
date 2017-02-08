class Subjectivity extends React.Component {
  render() {
    return(
      <div className="data-container">
        <h3>Subjectivity Analysis</h3>
        <h1>{this.props.subjectivity.charAt(0).toUpperCase() + this.props.subjectivity.slice(1)}</h1>
        <h4>Determines whether the content is primarily opinion or fact-driven.</h4>
      </div>
    )
  }
}

class Subjectivity extends React.Component {
  render() {
    return(
      <div>
        <h4><strong>Subjectivity Analysis</strong></h4>
        <h1>{this.props.subjectivity.toUpperCase()}</h1>
        <div id="subjectivity-line">
        </div>
        <h5>Determines whether the content is primarily objective or subjective.</h5>
      </div>
    )
  }
}

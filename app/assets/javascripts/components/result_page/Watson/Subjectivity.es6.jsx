class Subjectivity extends React.Component {
  render() {
    return(
      <div className="Subjectivity-container">
        <h2>Subjectivity Analysis</h2>
        <h4>Determines whether the content is primarily objective or subjective.</h4>
        <ul>
          {this.props.subjectivity}
        </ul>
      </div>
    )
  }
}

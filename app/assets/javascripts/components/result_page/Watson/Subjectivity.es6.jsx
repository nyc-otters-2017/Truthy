class Subjectivity extends React.Component {
  render() {
    return(
      <div className="Subjectivity-container">
        <h2>Subjectivity Analysis</h2>
        <ul>
          {this.props.subjectivity}
        </ul>
      </div>
    )
  }
}

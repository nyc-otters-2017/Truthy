class Subjectivity extends React.Component {
  render() {
    return(
      <div className="Subjectivity-container">
        <h3>Subjectivity Analysis</h3>
        <ul>
          {this.props.subjectivity}
        </ul>
      </div>
    )
  }
}

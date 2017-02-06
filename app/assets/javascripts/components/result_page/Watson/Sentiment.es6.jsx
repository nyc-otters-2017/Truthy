class Sentiment extends React.Component {
  render() {
    return(
      <div className="sentiment-container">
        <h2>Sentiment</h2>
        <ul>
          {this.props.sentiment}
        </ul>
      </div>
    )
  }
}

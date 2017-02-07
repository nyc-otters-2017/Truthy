class Sentiment extends React.Component {
  render() {
    return(
      <div className="sentiment-container">
        <h2>Sentiment</h2>
        <h4>Assesses the whether the sentiment of the content is positive, negative, or neutral.</h4>
        <ul>
          {this.props.sentiment}
        </ul>
      </div>
    )
  }
}

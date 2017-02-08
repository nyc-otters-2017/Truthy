class Sentiment extends React.Component {
  render() {
    return(
      <div className="data-container">
        <h3>Sentiment</h3>
        <h1>{this.props.sentiment.charAt(0).toUpperCase() + this.props.sentiment.slice(1)}</h1>
        <h4>Assesses the whether the sentiment of the content is positive, negative, or neutral.</h4>
      </div>
    )
  }
}

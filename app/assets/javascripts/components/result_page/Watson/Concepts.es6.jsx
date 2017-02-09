class Concepts extends React.Component {

  render() {
    return (
      <div className="concepts-container">
        <h1>Concepts</h1>
        <h4>Identifies people, places, things, or ideas related to the content.</h4>
        {
          this.props.concepts.map((concept, i) => {
            return (
              <Concept key={i} info={concept} />
            )
          })
        }
      </div>
    )
  }

}

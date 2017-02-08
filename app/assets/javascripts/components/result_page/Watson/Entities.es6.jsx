class Entities extends React.Component {

  render() {
    return (
      <div>
        <h4><strong>Entities</strong></h4>
        <ul>
        {
          this.props.entities.map((entity, i) => {
            return (
              <h1><li key={i}>{entity.text}</li></h1>
            )
          })
        }
        </ul>
        <h5>Extracts people, organizations, cities, and more from the content.</h5>
      </div>
    )
  }
}

class Entities extends React.Component {

  render() {
    return (
      <div>
        <h2>Entities</h2>
        <h4>Extracts people, organizations, cities, and more from the content.</h4>
        <ul>
          {
            this.props.entities.map((entity, i) => {
              return (
                <li key={i}>{entity.text}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

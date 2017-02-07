class Entities extends React.Component {

  render() {
    return (
      <div>
        <h2>Entities</h2>
        <h4>Extracts people, companies, organizations, cities, geographic features, and more from the inputted content.</h4>
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

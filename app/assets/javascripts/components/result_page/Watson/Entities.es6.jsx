class Entities extends React.Component {

  render() {
    return (
      <div>
        <h2>Entities</h2>
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

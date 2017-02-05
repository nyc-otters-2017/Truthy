class Entities extends React.Component {

  render() {
    return (
      <div>
        <h3>Entities</h3>
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

class Taxonomy extends React.Component {

  render() {
    return (
      <div>
      <h2>Article Taxonomy</h2>
        <ul>
          {
            this.props.labels.map((label, i) => {
              return (
                <li key={i}>{label.label}</li>
              )
            })
          }
        </ul>
        </div>
    )
  }

}

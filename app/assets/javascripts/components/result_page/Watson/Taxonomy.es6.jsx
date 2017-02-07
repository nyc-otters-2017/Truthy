class Taxonomy extends React.Component {

  render() {
    return (
      <div>
      <h2>Article Taxonomy</h2>
      <h4>Classifies content into a hierarchy of five categories.</h4>
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

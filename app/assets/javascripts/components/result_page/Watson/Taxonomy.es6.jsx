class Taxonomy extends React.Component {

  render() {
    return (
      <div>
      <h4>Article Taxonomy</h4>
      {
        this.props.labels.map((label, i) => {
          return (
            <h1><li key={i}>{label.label}</li></h1>
          )
        })
      }
      <h5>Classifies content into a hierarchy of five categories.</h5>
        <ul>
        </ul>
        </div>
    )
  }

}

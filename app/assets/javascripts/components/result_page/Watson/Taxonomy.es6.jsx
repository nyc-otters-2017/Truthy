class Taxonomy extends React.Component {

  render() {
    return (
      <ul>
        {
          this.props.labels.map((label, i) => {
            return (
              <li key={i}>{label.label}</li>
            )
          })
        }
      </ul>
    )
  }

}

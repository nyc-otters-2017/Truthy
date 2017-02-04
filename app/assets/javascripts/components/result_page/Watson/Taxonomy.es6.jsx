class Taxonomy extends React.Component {

  render() {
    return (
      <ul>
        {
          this.props.labels.map((label) => {
            return (
              <li>{label.label}</li>
            )
          })
        }
      </ul>
    )
  }

}

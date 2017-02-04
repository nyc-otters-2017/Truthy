class Taxonomy extends React.Component {

  render() {
    return (
      <ul>
        {
          this.props.labels.map((label) => {
            <li>{label.label}</li>
          })
        }
      </ul>
    )
  }

}

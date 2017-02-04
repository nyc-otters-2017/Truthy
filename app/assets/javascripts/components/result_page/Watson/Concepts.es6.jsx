class Concepts extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.data.concepts.map((concept, i) => {
            return (
            <Concept key={i} info={concept} />
            )
          })
        }
      </div>
    )
  }

}

class Concepts extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.concepts.map((concept, i) => {
            return (
              <Concept key={i} info={concept} />
            )
          })
        }
      </div>
    )
  }

}

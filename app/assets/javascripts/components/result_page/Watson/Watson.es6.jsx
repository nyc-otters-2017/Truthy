class Watson extends React.Component {

  render() {
    return (
      <Taxonomy labels={this.props.data.taxonomy} />
      <Concepts concepts={this.props.data.concepts} />
      <Entities entities={this.props.data.entities} />
      <Keywords keywords={this.props.data.keywords} />
    )
  }

}

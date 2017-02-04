class Watson extends React.Component {

  render() {
    console.log(this.props.data)
    return (
      <div>
        <Body data={this.props.data} />
        <Taxonomy labels={this.props.data.taxonomy} />
        <Concepts concepts={this.props.data.concepts} />
        <Entities entities={this.props.data.entities} />
        <Keywords keywords={this.props.data.keywords} />
      </div>
    )
  }

}

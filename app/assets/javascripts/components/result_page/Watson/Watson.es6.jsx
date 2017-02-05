class Watson extends React.Component {

  render() {
    console.log(this.props.data) // for testing and styling
    return (
      <div>
        
        <div className="col-xs-6 col-sm-3">
          <Taxonomy labels={this.props.data.taxonomy} />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Concepts concepts={this.props.data.concepts} />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Entities entities={this.props.data.entities} />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Keywords keywords={this.props.data.keywords} />
        </div>

      </div>
    )
  }

}

class Watson extends React.Component {

  render() {
    console.log(this.props.data) // for testing and styling
    return (
      <div>

        <div className="">
          <Taxonomy labels={this.props.data.taxonomy} />
        </div>
        <div className="">
          <Concepts concepts={this.props.data.concepts} />
        </div>
        <div className="">
          <Entities entities={this.props.data.entities} />
        </div>
        <div className="">
          <Keywords keywords={this.props.data.keywords} />
        </div>
        <div className="">
          <Sentiment sentiment={this.props.data.sentiment} />
        </div>
        <div className="">
          <Subjectivity subjectivity={this.props.data.subjectivity} />
        </div>
        <div className="">
          <DocumentEmotion docEmotions={this.props.data.docEmotions} />
        </div>


      </div>
    )
  }

}

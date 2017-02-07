class Watson extends React.Component {

  render() {
    console.log(this.props.data) // for testing and styling
    return (
      <div>

        <div className="">
          <Keywords keywords={this.props.data.keywords} />
        </div>

        <div className="">
          <DocumentEmotion docEmotions={this.props.data.docEmotions} />
        </div><br /> <br />

        <div className="analysis-container">
          <div className="left">
            <div className="col-sm-5">
              <Taxonomy labels={this.props.data.taxonomy} />
            </div>
          </div>
        </div>

        <div className="analysis-container">
          <div className="right">
            <div className="col-sm-5">
              <Concepts concepts={this.props.data.concepts} />
            </div>
          </div>
        </div>

        <div className="analysis-container">
          <div className="left">
            <div className="col-sm-2">
              <Entities entities={this.props.data.entities} />
            </div>
          </div>
        </div>

        <div className="analysis-containert">
          <div className="right">
            <div className="col-sm-4">
              <Sentiment sentiment={this.props.data.sentiment} />
            </div>
          </div>
        </div>

        <div className="analysis-containertent">
          <div className="left">
            <div className="col-sm-4">
              <Subjectivity subjectivity={this.props.data.subjectivity} />
            </div>
          </div>
        </div>


      </div>
    )
  }

}

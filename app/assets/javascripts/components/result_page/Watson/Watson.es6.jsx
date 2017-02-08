class Watson extends React.Component {

  render() {
    console.log(this.props.data) // for testing and styling
    return (
      <div className="scroll-change">

        <section className="top_half">

          <div className="">
            <Keywords keywords={this.props.data.keywords} />
          </div>
          <div className="">
            <DocumentEmotion docEmotions={this.props.data.docEmotions} />
          </div>

        </section>

        <div className="just_a_line_on_top"></div>

        <section className="bottom_half">
          <div class="row">

            <div className="col-sm-6">
              <div className="">
                <Concepts concepts={this.props.data.concepts} />
              </div>

              <div className="">
                <Sentiment sentiment={this.props.data.sentiment} />
              </div>
            </div>

            <div className="col-sm-6 line_and_padding_left">

              <div className="">
                <Taxonomy labels={this.props.data.taxonomy} />
              </div>

              <div className="">
                <Subjectivity subjectivity={this.props.data.subjectivity} />
              </div>

              <div className="">
                <Entities entities={this.props.data.entities} />
              </div>
            </div>

          </div>
        </section>

      </div>
    )
  }

}

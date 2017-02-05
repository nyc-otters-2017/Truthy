class ResultPage extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     main: <Body data={this.props.watson} />
   }
  //  this.handleClick = this.handleClick.bind(this);
    this.newRender = this.newRender.bind(this)
  }

  newRender(newstuff) {
   this.setState({main: newstuff } )

  }

  render() {

    return(

      <div className='result-container'>

        <div className ="col-md-3">
        </div>

        <div className="col-md-6">
          <main>
            <Main display={this.state.main}/>
          </main>
        </div>

        <div className ="col-md-3">
          <div className="">
            <FullContactSideBox onNewRender={this.newRender} data={this.props.fullContact}/>
          </div>

          <div className="">
            <WatsonBodySideBox onNewRender={this.newRender} data={this.props.watson}/>
          </div>

          <div className="">
            <WatsonEverythingElseSideBox onNewRender={this.newRender} data={this.props.watson}/>
          </div>

        </div>

      </div>
    )
  }
}

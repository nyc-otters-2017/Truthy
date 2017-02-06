class ResultPage extends React.Component {
 constructor(props) {
   
   super(props)
   this.state = {
     main: <Body data={this.props.watson} />
   }
    this.newRender = this.newRender.bind(this)
  }

  newRender(newMain) {
   this.setState({main: newMain })
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
          <SideBox
            onNewRender={this.newRender}
            fullContact={this.props.fullContact}
            watson={this.props.watson}
            quotes={this.props.quotes}
            />
        </div>
      </div>
    )
  }
}

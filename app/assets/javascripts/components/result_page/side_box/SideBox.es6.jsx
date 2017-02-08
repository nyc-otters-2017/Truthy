class SideBox extends React.Component {

  render() {
    return (
      <div>
          <FullContactSideBox onNewRender={this.props.onNewRender} data={this.props.fullContact}/>
          <WatsonBodySideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
          <WatsonEverythingElseSideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
          <QuotesSideBox onNewRender={this.props.onNewRender} data={this.props.quotes}/>
      </div>
    )
  }
}

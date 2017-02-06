class SideBox extends React.Component {

  render() {
    return (
      <div>
        <div className="">
          <FullContactSideBox onNewRender={this.props.onNewRender} data={this.props.fullContact}/>
        </div>

        <div className="">
          <WatsonBodySideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
        </div>

        <div className="">
          <WatsonEverythingElseSideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
        </div>
      </div>
    )
  }
}

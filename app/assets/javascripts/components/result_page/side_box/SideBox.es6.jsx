class SideBox extends React.Component {

  render() {
    return (
      <div>
        <div className="side_box">
          <FullContactSideBox onNewRender={this.props.onNewRender} data={this.props.fullContact}/>
        </div>

        <div className="side_box">
          <WatsonBodySideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
        </div>

        <div className="side_box">
          <WatsonEverythingElseSideBox onNewRender={this.props.onNewRender} data={this.props.watson}/>
        </div>
      </div>
    )
  }
}

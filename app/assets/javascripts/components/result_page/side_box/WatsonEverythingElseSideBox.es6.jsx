class WatsonEverythingElseSideBox extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <Watson data={this.props.data}/> )
  }

  render(){
    return (
      <div className="hovereffect2 sidebar1">

        <div className="overlay side_bar_background">

          <h4 className="side_box_title">Article Data</h4>
          <p className="about_company">View the sentiment, subjectivity, emotions, and other important data about the article.</p>
          <a onClick={this.handleClick} className="btn btn-primary btn-sm side_bar_view" href="#" role="button">View</a>

        </div>
        <i className="img-responsive material-icons fa fa-pie-chart fa-4x orange600"></i>
      </div>
    )
  }

}

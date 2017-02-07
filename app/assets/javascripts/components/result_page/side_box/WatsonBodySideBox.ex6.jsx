class WatsonBodySideBox extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()

    this.props.onNewRender( <Body data= {this.props.data}/> )
  }



  render(){
    return (
      <div className="hovereffect2 sidebar1">

        <div className="overlay">
          <h4 className="side_box_title">View the article</h4>
          <p className="about_company">Go back to {'"' + this.props.data.title + '"'}</p>
          <p className="side_bar_view">
            <a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View</a>
          </p>
        </div>
        <i className="img-responsive material-icons orange600">donut_small</i>

      </div>
    )
  }

}

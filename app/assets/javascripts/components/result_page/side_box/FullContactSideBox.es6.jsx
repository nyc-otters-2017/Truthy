class FullContactSideBox extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <ArticleInfo data={this.props.data}/> )
  }


  render() {
    const transitionOptions = {
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }
    return (
      <div className="hovereffect">

        <div className="overlay">
          <h4 className="side_box_title text-center">Get Company Bio</h4>
          <p>View more info about the company and social media presence of {this.props.data.name}</p>
          <p className="text-right padding botton_corner"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View Company Info</a></p>
        </div>

        <i className="img-responsive material-icons orange600">donut_large</i>

      </div>
    )
  }
}

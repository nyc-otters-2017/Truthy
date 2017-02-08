
class FullContactSideBox extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <ArticleInfo data={this.props.data}/> )
  }

  render() {
    return (
      <div className="hovereffect2 sidebar1">

        <div className="overlay side_bar_background">
          <h4 className="side_box_title">Get Company Bio</h4>
          <p className="about_company">View more info about the company and social media presence of {this.props.data.name}</p>
          <a onClick={this.handleClick} className="btn btn-primary btn-sm side_bar_view" role="button">View</a>

        </div>
        <i className="img-responsive material-icons orange600">blur_on</i>

      </div>
    )
  }
}

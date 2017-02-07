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

      <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Company Information
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        View more info about the company and social media presence of {this.props.data.name}
        <a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View Company Info</a>
      </div>
    </div>
  </div>

      // <div className="hovereffect">
      //
      //   <div className="overlay">
      //     <h4 className="side_box_title text-center">Get Company Bio</h4>
      //     <p>View more info about the company and social media presence of {this.props.data.name}</p>
      //     <p className="text-right padding botton_corner"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View Company Info</a></p>
      //   </div>
      //
      //   <i className="img-responsive material-icons orange600">donut_large</i>
      //
      // </div>
    )
  }
}

class QuotesSideBox extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <Quotes data={this.props.data}/> )
  }

  render(){
    return (
      <div className="">
        <div className="hovereffect2 sidebar1">
          <div className="overlay">
            <h4 className="side_box_title text-center">See Quotes</h4>
            <p className="about_company">View all the extracted quotes from article for verification</p>
            <p className="text-right padding botton_corner"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">View Quotes</a></p>
          </div>
          <i className="img-responsive material-icons orange600">language</i>
        </div>
      </div>
    )
  }
}

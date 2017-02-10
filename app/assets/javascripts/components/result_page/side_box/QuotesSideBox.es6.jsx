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
        <div className="hovereffect2 sidebar1">

          <div className="overlay side_bar_background">

            <h4 className="side_box_title">Article Quotes</h4>
            <p className="about_company">View all the extracted quotes from article for verification</p>
            <a onClick={this.handleClick} className="btn btn-primary btn-sm side_bar_view" href="#" role="button">View</a>

          </div>
          <i className="img-responsive material-icons fa fa-quote-right fa-4x orange600"></i>
        </div>
    )
  }
}

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
        <div className="hovereffect">
          <div className="overlay">

            <h4 className="side_box_title text-center">Get Quotes Stuff</h4>
            <p>something something about this box</p>
            <p className="text-right"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">Learn more</a></p>
          </div>
          <i className="img-responsive material-icons orange600">language</i>
        </div>
      </div>
    )
  }
}

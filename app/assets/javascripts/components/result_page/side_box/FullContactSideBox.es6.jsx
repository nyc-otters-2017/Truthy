class FullContactSideBox extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNewRender( <ArticleBio data= {this.props.data}/> )

  }


  render() {
    return (
      <div>
        <h4 className="side_box_title text-center">Get company bio</h4>
        <p>something something about this box</p>
        <p className="text-right"><a onClick={this.handleClick} className="btn btn-primary btn-sm" href="#" role="button">Learn more</a></p>
      </div>
    )
  }
}

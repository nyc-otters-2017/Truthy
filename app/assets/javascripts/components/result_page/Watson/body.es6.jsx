class Body extends React.Component {
  constructor() {
    super()
    this.state = {display: true}
  }
  render() {

    return (
      <div className="scroll-change">
        <h1>{this.props.data.title}</h1>

        <div className="newspaper_bottom_small_line top_padding">
        </div>
        <p id="author_stuff" className="text-center">By {this.props.data.author} | Written on {this.props.data.publicationDate}</p>
        <div className="newspaper_bottom_small_line">
        </div>
        {/* <p>Written on {this.props.data.publicationDate}</p> */}
        <p id="text_indent" className="top_padding" >{this.props.data.text}</p>

      </div>
    )
  }

}

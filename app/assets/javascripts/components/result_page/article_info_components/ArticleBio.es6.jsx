class ArticleBio extends React.Component {
  constructor(props) { 
    super(props)

    // this.handleMouseOver = this.handleMouseOver.bind(this)
    // this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.state = { articleBio: this.props.bio }
  }

  // handleMouseOver() {
  //   this.setState({articleBio: this.props.bio})
  // }
  //
  // handleMouseLeave() {
  //   this.setState({articleBio: ""})
  // }

  render() {

    return(
      <section id="article-bio">
        <h1 id="article-header">Article Bio</h1>
        <p>{this.state.articleBio}</p>

      </section>
    )
  }
}

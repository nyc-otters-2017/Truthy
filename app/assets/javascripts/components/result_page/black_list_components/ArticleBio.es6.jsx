class ArticleBio extends React.Component {
  constructor() {
    super()
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.state = { articleBio: "" }
  }

  handleMouseOver() {
    this.setState({articleBio: this.props.bio })
  }


  render() {
    return(
      <section id="article-bio">
        <h1 id="article-header" onMouseOver={this.handleMouseOver}>Article Bio</h1>
        <p>{this.state.articleBio}</p>
      </section>
    )
  }
}

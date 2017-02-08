class ArticleBio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { articleBio: this.props.bio }
  }

  render() {

    return(
      <section className="scroll-change" id="article-bio">
        <h1 id="article-header">Article Bio:</h1>
        <p>{this.state.articleBio}</p>

      </section>
    )
  }
}

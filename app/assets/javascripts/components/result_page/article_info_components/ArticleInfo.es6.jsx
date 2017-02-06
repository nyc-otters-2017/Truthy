class ArticleInfo extends React.Component {

  render() {
    return (
      <div>
        <ArticleBio bio={this.props.data.bio} />
        <SocialMedia data={this.props.data} />
      </div>
    )
  }
}

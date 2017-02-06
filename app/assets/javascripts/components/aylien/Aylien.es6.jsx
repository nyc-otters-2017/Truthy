class Aylien extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <section className='aylien'>
        <h1>Related Articles</h1>
        <RelatedArticles articles={this.props.aylien} />
      </section>
    )
  }
}

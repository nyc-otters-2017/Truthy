class Aylien extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <section className="">
        <RelatedArticles articles={this.props.aylien} />
      </section>
    )
  }
}

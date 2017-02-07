class Aylien extends React.Component {
  constructor() {
    super()
  }

  render(){
    return(
      <section className='aylien'>
        <RelatedArticles articles={this.props.aylien} />
      </section>
    )
  }
}

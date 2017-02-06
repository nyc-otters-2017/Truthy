class SocialMedia extends React.Component {
  constructor() {
    super()
    this.state = { bio: '' }
  }

  render(){
    let {
      name,
      website,
      founded,
      onlineSince,
      socialMedia,
      bio,
      email
    } = this.props.data
    let socialMediaData = JSON.parse(socialMedia)

    function checkCompanyName(name) {
      if (name == "Facebook") {

        var details = (
          <div className="hovereffect2">
            <img className="img-responsive company_background" src="/assets/companyinfo_facebook.png" alt=""/>
            <div className="overlay">
              <h2>Hover effect 2</h2>
              <a className="info" href="#">link here</a>
            </div>
          </div>
        )
      } else {

        var details = (
          <div className="hovereffect2">
            <img className="img-responsive company_background" src="/assets/companyinfo_default.png" alt=""/>
            <div className="overlay">
              <h2>Hover effect 2</h2>
              <a className="info" href="#">link here</a>
            </div>
          </div>
        )
      }
      return details
    }



    return(
      <article className="blacklist">

        <section>
          <h1> Company Info: </h1>
          <h3>
            <a href={website}>{name}</a>
          </h3>
            <ul>
              <li>Founded: {founded}</li>
              <li>Email: {email}</li>
              <li>Online Since: {onlineSince}</li>
              <li>Webpage Bio:  {this.props.data.bio}</li>
            </ul>
        </section>

        <section>
          <h1>Social Media:</h1>
          <div>
            {
              socialMediaData.map(
                (media, i)=>{
                return checkCompanyName(media.typeName)}
              )
            }
          </div>

        </section>
      </article>
    )
  }
}

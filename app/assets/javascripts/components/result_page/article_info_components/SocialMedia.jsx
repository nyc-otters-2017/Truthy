class SocialMedia extends React.Component {
  constructor() {
    super()
    this.state = { bio: '' }
  }

  render(){
    function johnCheckIfNull(johnsWord) {
        var answer = (johnsWord === null || johnsWord === undefined) ? 'No result was found.' : johnsWord;
      return answer
    }

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
    function checkCompanyName(data, i) {
      if (
        data.typeName.toLowerCase() === "facebook" ||data.typeName.toLowerCase() === "linkedin"
        ||data.typeName.toLowerCase() === "twitter"
        ||data.typeName.toLowerCase() === "pinterest"
      ){
        var companyName = data.typeName.toLowerCase();
        var locationHead = "/assets/companyinfo_"
        var locationEnd = ".png"
        var pictureLocation = [locationHead, companyName, locationEnd].join("");

        var details = (
          <div key={i} className="hovereffect2 company_background_div">
            <img className="img-responsive company_background" src={pictureLocation} alt=""/>
            <div className="overlay">
              <h2> {data.typeName}</h2>
              <h3> {data.bio} </h3>
              <h4 className="social_media_username"> {data.username} </h4>
              <a className="info" href={data.url}>link here</a>
            </div>
          </div>
        )
      } else {

        var details = (
          <div key={i} className="hovereffect2 company_background_div">
            <img className="img-responsive company_background" src="/assets/companyinfo_default.png" alt=""/>
            <div className="overlay">
              <h2 >{data.typeName}</h2>
              <h3 > {data.bio} </h3>
              <h4 className="social_media_username"> {data.username} </h4>
              <a className="info" href={data.url}>link here</a>
            </div>
          </div>
        )
      }
      return details
    }
    return(
      <article className="blacklist">

        <section className="company_info">
          <h1>Company Information</h1>
          <h3>
            <a href={website}>{name}</a>
          </h3>
            <ul className="company_bio_list scroll-change">
              <li>Founded: {johnCheckIfNull(founded)}</li>
              <li>Email: {johnCheckIfNull(email)}</li>
              <li>Online Since: {johnCheckIfNull(onlineSince)}</li>
              <li>Webpage Bio: {johnCheckIfNull(bio)}</li>
            </ul>
        </section>

        <div className="newspaper_bottom_small_line company_info_padding">
        </div>

        <section className="social_media_section">
          <h1 className="scroll-change">Social Media</h1>
          <div className="social_media_div">
            { socialMediaData.map(
              (media, i)=>{
              return checkCompanyName(media, i)}
            )}
          </div>
        </section>

      </article>
    )
  }
}

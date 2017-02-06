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
    return(
      <article className="blacklist">

        <section>
          <h1>
            <a href={website}>{name}</a>
          </h1>
          <p>founded: {founded}</p>
          <p>online since: {onlineSince}</p>
          <p>email: {email}</p>
        </section>

        <ArticleBio showBio={this.showBio} bio={bio} />

        <section>
          <h1>Social Media:</h1>
          <table>
            <tbody>
              {
                JSON.parse(socialMedia).map((media, i)=>{
                  return (
                    <tr key={i}>
                      <td>{media.typeName}</td>
                      <td>
                        <a href={media.url}>{media.username}</a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </article>
    )
  }
}

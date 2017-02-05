class BlackList extends React.Component {
  constructor() {
    super()
    this.state = { bio: '' }
  }

  render(){
    console.log(this.props)
    let {
      name,
      website,
      founded,
      onlineSince,
      socialMedia,
      bio,
      email
    } = this.props.fullContact
    return(
      <article className="blacklist">
        <header className="blacklist-header">
          <h1>{this.props.blackList}</h1>
        </header>

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

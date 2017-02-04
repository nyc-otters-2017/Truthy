class BlackList extends React.Component {
  constructor() {
    super()
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
    } = this.props.fullContact
    return(
      <article>
        <header>
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

        <section className="company-bio">
          <h1>Bio:</h1>
          <p>{bio}</p>
        </section>

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

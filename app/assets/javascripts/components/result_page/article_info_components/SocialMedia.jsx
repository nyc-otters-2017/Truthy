class SocialMedia extends React.Component {
  constructor() {
    super()
    this.state = { bio: '' }
  }

  render(){
    debugger
    console.log(this.props);
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
          <table>
            <tbody>
              {
                JSON.parse(socialMedia).map((media, i)=>{
                  return (

                    <tr key={i}>

                      <td>{media.typeName}</td>
                      <td>{media.url}</td>
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

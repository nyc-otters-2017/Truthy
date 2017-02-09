class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About Truthy</h1>
        <p>First, thank you for using this site to learn more about your news sources,
          while also teaching our algorithm about reliable news sources!</p>
        <p>The way Truthy works is by collecting data about the url for a news source
        you put into the search bar. Our server will collect data from the internet, and
        give you valuable information to determine whether or not the article is fake news(Truthy or Falsey).
        </p>
        <p>
          Our custom machine learning model relies on people like you to read the article,
          assess the company and author who wrote it, the data about the article structure,
          and ensure that the quotes extracted from the article are accurate.
        </p>
        <p>
          On the left you will see articles based on keywords and concepts that our algorithm
          believes to be similar to the piece you are reading. This is important because fake news
          is often completely unique in its content. Just be aware that there are exceptions to this rule of thumb.
        </p>
        <p>
          On your right you will see little spinning buttons that will guide you to the
          information about article data, company info, and extracted quotes.
        </p>
        <p>
          Fake news often has little information about the company, or is listed as
          an advertising agency.
          Take note of social media presence, and how long the company has been around.
        </p>
      </div>
    )
  }
}

class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About Truthy</h1>
        <p>First, thank you for using this site to learn more about your news sources,
          while also teaching our algorithm about reliable news sources!</p>
        <p>Truthy works by collecting data about a news article from the url
        you enter into the search bar. Our server will aggregate data from the internet and
        present you with valuable information you can use to determine whether or not the article is
        fake news (Truthy or Falsey).
        </p>
        <p>
          Our custom machine learning model relies on people like you to read the article,
          assess its source (the author who wrote it and the company that published it),
          review the data we've gathered about the article, and ensure that the quotes extracted from
          the article provide accurate and reliable information.
        </p>
        <h1>Navigating Truthy</h1>
        <p>
          On the left you will see articles that our algorithm believes to be similar to the piece
          you are reading, which is based on keywords and concepts. This is important because fake news
          is often completely unique in its content. Just be aware that there are exceptions to this rule.
        </p>
        <p>
          On the right you will see little spinning buttons that will guide you to
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

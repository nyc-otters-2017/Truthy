class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About Truthy</h1>
        <p>Thank you for using Truthy to learn more about your news sources,
          while also teaching our algorithm about reliable news sources.</p>
        <p>Truthy works by collecting data about a news article from the url
        entered into the search bar. Our program will aggregate data from the internet and
        present you with valuable information you can use to determine whether or not the article is
        fake news (Truthy or Falsey).
        </p>
        <p>
          Our custom machine learning model relies on accurate classification of news. Use the resources
          we provided for news verification.
        </p>
        <p>
          Please do not teach our machine learning model about your own bias. Teach Truthy how to
          distinguish fabrication from fact.
        </p>
        <h1>Navigating Truthy</h1>
        <p>
          On the left you will see articles that our algorithm believes to be similar to the piece
          you are reading, which is based on keywords and concepts. These relevant articles important because fake news
          is often completely unique in its content. However, be aware that there are exceptions to this rule of thumb.
        </p>
        <p>
          On the right you will see the buttons that will guide you to
          information about article data, company info, and extracted quotes.
        </p>
        <p>
          Fake news often has little information about the company, or is listed as
          an advertising agency.
          Take note of social media presence, and how long the company has been around.
        </p>
        <p>
          Be aware of the emotional data in articles. While keywords and concepts can help guide you to article content,
          pay attention to the sentiment and objectivity. Blogs are often opinion, whereas a news source
          is often fact driven.
        </p>
      </div>
    )
  }
}

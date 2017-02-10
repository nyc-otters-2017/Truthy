module QuotesHelper
  TEST = %Q(Mr Mattis had more strong words for Iran while visiting Japan.
"As far as Iran goes, this is the single biggest state sponsor of terrorism in the world," he told reporters.
"We have seen their [Iran's] misconduct, their misbehaviour, from Lebanon and Syria to Bahrain and to Yemen and it's got to be addressed at some point," he added.
But he went on to say that despite the recent tensions he saw no need to boost troop numbers in the Middle East.
"We always have the capability to do so, but at this time I don't think it's necessary," he said.
'We will never initiate war'
Iran has denied that its missile test violates a UN Security Council resolution or the nuclear deal it struck with international powers, including the UN.
In response to the US sanctions, Iran announced restrictions against US companies and individuals "involved in creating and supporting extremist terrorist groups or are helping in the killing and oppression of defenceless people".
Iran's Foreign Minister Mohammad Javad Zarif has also said the Islamic Republic was unmoved by US threats.
"We'll never initiate war, but we can only rely on our own means of defence," Mr Zarif wrote.

MOSCOW — Russian Federation President Vladimir Putin, in a bold, public display of support for US President-elect Donald Trump, will reportedly declare Friday, January 20, 2017 —America’s Inauguration Day— a Russian national holiday.

The unpresidented move sends an international signal of a growing alliance between the United States and the former Soviet Union, or at least between the Russian leader and the incoming president.

This new mutual admiration society builds on decades of unstable, cautious trust first established by former President Ronald Reagan in 1985.

During that year, Reagan and Mikhail Gorbachev met in Geneva, Switzerland for an historic summit meeting, followed by a 1986 conference in Reykjavik, Iceland.

In the shadow of Barack Obama’s retaliation for what he claimed was Soviet interference in the US election, Donald Trump’s positive praise for Putin’s restrained response —detailed in a pinned tweet— set in motion this latest display of international intercourse.

Russian

Although the national holiday declaration is not yet officially confirmed, government sources say Putin is “strongly suggesting” that businesses and schools take the day off to witness Trump’s historic inauguration, and to celebrate the new administration along with the United States.

“Many businesses are ordering American style inauguration souvenirs,” said market trend watcher Althea Thoone. “School children are learning The Star Spangled Banner, and I’m told preschoolers are being taught popular American slogans phonetically. No one has witnessed anything like this!” Thoone said.

Ivanka, Eric, and Tiffany are trending Russian baby names, as is Vladimir for American newborns, according to a new poll.

If any complaints exist about lost revenue resulting from the nationwide business closures, Russian citizens are keeping their grumblings private.

“I think it is a wonderful event,” said dashcam salesman Yakov Pokhis. “It will be a glorious thing when our two countries can become great again together! What a country!” he added.

Seen as a one-time, ceremonial holiday declaration, the official designation of a permanent, annual Jan. 20 celebration is not expected.
)

  def self.extract_quotes(text)
    text.scan(/"([^"]*)"|“([^”]*)”/).flatten.compact
  end
end

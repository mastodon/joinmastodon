import theVergeLogo from "../public/press/the-verge.svg"
import wiredLogo from "../public/press/wired.svg"
import nytLogo from "../public/press/nyt.svg"
import motherboardLogo from "../public/press/motherboard.svg"
import mashableLogo from "../public/press/mashable.svg"
import slateLogo from "../public/press/slate.svg"
import esquireLogo from "../public/press/esquire.svg"
import financialTimesLogo from "../public/press/financial-times.svg"
import gizmodoLogo from "../public/press/gizmodo.svg"
import pcMagLogo from "../public/press/pcmag.svg"
import boingBoingLogo from "../public/press/boing-boing.svg"
import timeLogo from "../public/press/time-magazine.svg"
import cnnLogo from "../public/press/cnn.svg"
import guardianLogo from "../public/press/the-guardian.svg"
import forbesLogo from "../public/press/forbes.svg"
import techcrunchLogo from "../public/press/techcrunch.svg"
import bloombergLogo from "../public/press/bloomberg.svg"

const articles = [
  {
    logo: techcrunchLogo,
    url: "https://techcrunch.com/2023/09/21/mastodons-latest-release-makes-the-open-source-twitter-alternative-easier-to-use/",
    title: "Mastodon’s latest release makes the open source Twitter alternative easier to use",
    date: "2023-09-21",
  },
  {
    logo: bloombergLogo,
    url: "https://www.bloomberg.com/news/newsletters/2023-01-12/elon-musk-s-twitter-drives-even-its-early-employees-to-mastodon",
    title: "Elon Musk Drives Even Some Twitter Founders to Mastodon",
    date: "2023-01-12",
  },
  {
    logo: financialTimesLogo,
    url: "https://www.ft.com/content/de808736-2e05-4c3b-a53c-55b170ae9efd",
    title:
      "Twitter rival Mastodon rejects funding to protect non-profit status",
    date: "2022-12-28",
  },
  {
    logo: techcrunchLogo,
    url: "https://techcrunch.com/2022/12/23/mastodon-creator-eugen-rochko-talks-funding-and-how-to-build-the-anti-twitter/",
    title:
      "Mastodon creator Eugen Rochko talks funding and how to build the anti-Twitter",
    date: "2022-12-23",
  },
  {
    logo: forbesLogo,
    url: "https://fortune.com/2022/11/28/mastodon-social-ceo-eugen-rochko-twitter-elon-musk/",
    title:
      "Mastodon’s 29-year-old CEO wants his Twitter alternative to ‘replace’ its rival some day, but he’s taking an anti–Elon Musk approach to growing it",
    date: "2022-11-28",
  },
  {
    logo: timeLogo,
    url: "https://time.com/6229230/mastodon-eugen-rochko-interview/",
    title:
      "Thousands Have Joined Mastodon Since Twitter Changed Hands. Its Founder Has a Vision for Democratizing Social Media",
    date: "2022-11-06",
  },
  {
    logo: cnnLogo,
    url: "https://edition.cnn.com/2022/11/05/tech/mastodon/index.html",
    title: "With Twitter in chaos, Mastodon is on fire",
    date: "2022-11-05",
  },
  {
    logo: guardianLogo,
    url: "https://www.theguardian.com/media/2022/nov/01/mastodon-twitter-elon-musk-takeover",
    title:
      "Mastodon gained 70,000 users after Musk’s Twitter takeover. I joined them",
    date: "2022-11-01",
  },
  {
    logo: motherboardLogo,
    url: "https://www.vice.com/en/article/n7npd7/30000-new-users-signed-up-for-mastodon-after-elon-musk-bought-twitter",
    title:
      "30,000 New Users Signed Up for Mastodon After Elon Musk Bought Twitter",
    date: "2022-04-26",
  },
  {
    logo: mashableLogo,
    url: "https://mashable.com/article/eugen-rochko-mastodon-interview",
    title:
      "The coder who built Mastodon is 24, fiercely independent, and doesn’t care about money",
    date: "2017-04-06",
  },
  {
    logo: esquireLogo,
    url: "https://www.esquire.com/lifestyle/a22777589/what-is-mastodon-twitter-platform/",
    title: "Tired of Nazis in Your Twitter Mentions? Try Mastodon.",
    date: "2018-08-22",
  },
  {
    logo: theVergeLogo,
    url: "https://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone",
    title:
      "Mastodon.social is an open-source Twitter competitor that’s growing like crazy",
    date: "2017-04-04",
  },
  {
    logo: slateLogo,
    url: "https://slate.com/technology/2018/08/mastodon-what-you-need-to-know-about-the-new-social-network-competing-with-twitter.html",
    title: "The New Social Network Dodging Government Surveillance—and Nazis",
    date: "2018-08-30",
  },
  {
    logo: wiredLogo,
    url: "https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/",
    title: "Like Twitter But Hate the Trolls? Try Mastodon",
    date: "2017-04-13",
  },
  {
    logo: nytLogo,
    url: "https://www.nytimes.com/2019/12/18/technology/facebook-twitter-bitcoin-blockchain.html",
    title: "Twitter and Facebook Want to Shift Power to Users. Or Do They?",
    date: "2019-12-18",
  },
  {
    logo: financialTimesLogo,
    url: "https://www.ft.com/content/d3be2f7a-3705-4bee-9e50-d81b9f31ee1b",
    title: "Is it time to leave Twitter for Mastodon?",
    date: "2022-05-16",
  },
  {
    logo: gizmodoLogo,
    url: "https://www.gizmodo.com.au/2022/04/europe-starts-its-own-social-networks/",
    title: "Europe Starts Its Own Social Networks",
    date: "2022-04-30",
  },
  {
    logo: pcMagLogo,
    url: "https://www.pcmag.com/news/after-musk-acquires-twitter-mastodon-sees-flood-of-traffic-server-slowdown",
    title:
      "After Musk Acquires Twitter, Mastodon Sees Flood of Traffic, Server Slowdown",
    date: "2022-04-25",
  },
  {
    logo: boingBoingLogo,
    url: "https://boingboing.net/2018/07/18/platform-independence.html",
    title: "Facebook Domination vs. Self-Determination",
    date: "2018-07-18",
  },
  {
    logo: guardianLogo,
    url: "https://www.theguardian.com/technology/2023/apr/18/mastodon-users-twitter-elon-musk-social-media",
    title:
      "Thousands fled to Mastodon after Musk bought Twitter. Are they still ‘tooting’?",
    date: "2023-04-18",
  },
  {
    logo: pcMagLogo,
    url: "https://www.pcmag.com/opinions/whats-happening-to-twitter-could-never-happen-to-mastodon",
    title: "What's Happening to Twitter Could Never Happen to Mastodon",
    date: "2023-04-18",
  },
]

export default articles

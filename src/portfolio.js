/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hum Nagpurkar",
  description:
    "Nagpur city-based page that will be updated with the latest Nagpur news as well as events in Nagpur and India. ",
  og: {
    title: "Hum Nagpurkar Website",
    type: "website",
    url: "http://humnagpurkar.com/",
  },
};

//Home Page
const greeting = {
  title: "Hum Nagpurkar",
  logo_name: "HumNagpurkar",
  nickname: "NagpurNews",
  subTitle:
  "Nagpur city-based page that will be updated with the latest Nagpur News as well as events in Nagpur and India. ",
  resumeLink:
    "",
  portfolio_repository: "https://humnagpurkar.com",
  githubProfile: "http://humnagpurkar.com",
};

const socialMediaLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/humnagpurkar/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/humnagpurkar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/humnagpurkar",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:humnagpurkar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/humnagpurkar",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Facebook",
      fileName: "DataScienceImg",
      skills: [
        "⚡ One of the most popular page of Nagpur, which gives latest updates in Nagpur.",
        "⚡ More than 150k followers on Facebook",
        "⚡ On Facebook, we talked about the problems Nagpur and Nagpurkars were having and sought to inform the appropriate authority so that problems might be resolved as soon as possible.",
      ],
  softwareSkills: [
  ],
    },
    {
      title: "Instagram",
      fileName: "FullStackImg",
      skills: [
        "⚡ We launched an Instagram account after becoming one of Nagpur's most well-liked Facebook page, and the locals of Nagpur responded wildly to it as well.",
        "⚡ On Instagram, 25k people starterd following Hum Nagpurkar in very less time",
        "⚡ Acknowledged by numerous major media organisations, including Moneycontrol, Indian Express, Maharashtra Times, India Today, NDTV, Curly Tales, Times Now News, abplive and many others.",
      ],
      softwareSkills: [
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Money Control",
      subtitle: "MONEYCONTROL NEWS",
      logo_path: "moneyControl.jpg",
      certificate_link:
        "https://www.moneycontrol.com/news/trends/watch-nagpur-man-sits-on-scooter-as-it-dangles-in-air-while-getting-towed-9048571.html",
      alt_name: "Money Control",
      color_code: "#8C151599",
    },
    {
      title: "Indian Express",
      subtitle: "Nagpur News",
      logo_path: "indianExpress.png",
      certificate_link:
        "https://indianexpress.com/article/trending/trending-in-india/nagpur-man-no-parking-scooter-8093932/",
      alt_name: "Indian Express",
      color_code: "#00000099",
    },
    {
      title: "ABP LIVE",
      subtitle: "Viral News",
      logo_path: "abpLive.png",
      certificate_link:
        "https://www.abplive.com/trending/man-sitting-on-his-towed-scooter-hang-in-the-air-hilarious-video-viral-on-social-media-2194710",
      alt_name: "ABP LIVE",
      color_code: "#0C9D5899",
    },
    {
      title: "Maharashtra Times",
      subtitle: "Nagpur's Special Words",
      logo_path: "maharashtraTimes.jpg",
      certificate_link:
        "https://maharashtratimes.com/maharashtra/nagpur/the-nagpuri-language-is-now-visible-on-the-pillars-of-the-flyover-erected-by-nhai/articleshow/81554633.cms",
      alt_name: "HUM NAGPURKAR SLANG LANGUAGE",
      color_code: "#4285F499",
    },
    {
      title: "India Today",
      subtitle: "Trending News",
      logo_path: "indiaToday.png",
      certificate_link:
        "https://www.indiatoday.in/trending-news/story/nagpur-man-sits-on-scooter-as-it-hangs-in-air-while-getting-towed-bizarre-viral-video-has-over-2-million-views-1989017-2022-08-17",
      alt_name: "India Today",
      color_code: "#1F70C199",
    },
    {
      title: "NDTV",
      subtitle: "- Most Watched Artical",
      logo_path: "ndtv.png",
      certificate_link:
        "https://www.ndtv.com/offbeat/airlift-part-2-0-man-sits-on-scooter-as-it-hangs-in-air-while-getting-towed-3262307",
      alt_name: "NDTV",
      color_code: "#D83B0199",
    },
    {
      title: "India Times",
      subtitle: "Mentioned us as a popular page called Hum Nagpurkar.",
      logo_path: "ndtv.png",
      certificate_link:
        "https://www.indiatimes.com/trending/wtf/nagpur-traffic-police-tows-away-bike-with-rider-sitting-on-it-577452.html",
      alt_name: "India Times",
      color_code: "#1F70C199",
    },
    {
      title: "curly tales",
      subtitle: "News Article",
      logo_path: "curleyTales.png",
      certificate_link:
        "https://curlytales.com/shocking-video-of-man-riding-his-scooter-on-air-goes-viral/",
      alt_name: "Curley tales",
      color_code: "#0C9D5899",
    },
    {
      title: "Times Now",
      subtitle: "Trending",
      logo_path: "timesNow.png",
      certificate_link:
        "https://www.timesnownews.com/videos/viral-videos/man-casually-sits-on-scooter-as-it-hangs-in-the-air-while-getting-towed-by-a-truck-video-93604798",
      alt_name: "Times Now",
      color_code: "#00000099",
    },
    {
      title: "Haryana Update",
      subtitle: "Haryana News channel ",
      logo_path: "haryanaUpdates.PNG",
      certificate_link:
        "https://www.haryanaupdate.com/trending/The-car-had-to-be-parked-in-the-wrong-place-this-condition/cid8294703.htm",
      alt_name: "Haryana Update",
      color_code: "#2A73CC",
    },
    {
      title: "ZEE NEWS",
      subtitle: "Famous News channel in India Zee News",
      logo_path: "zeeNews.png",
      certificate_link:
        "https://zeenews.india.com/tamil/social/watch-viral-video-of-an-man-sitting-on-scooter-as-it-hangs-in-a-crane-406991",
      alt_name: "Zee News",
      color_code: "#4285F499",
    },
    {
      title: "tamil.abplive.com",
      subtitle: "Popular media house in India",
      logo_path: "abpLive.png",
      certificate_link:
        "https://tamil.abplive.com/news/india/maharashtra-man-sits-on-scooter-as-it-hangs-in-air-while-getting-towed-watch-video-68124",
      alt_name: "Tamil ABP Live",
      color_code: "#FFBB0099",
    },
    {
      title: "Hindi Cartoq",
      subtitle: "Famous news Portal",
      logo_path: "carToq.PNG",
      certificate_link:
      "https://hindi.cartoq.com/traffic-cops-lift-honda-activa-from-no-parking-zone-with-owner-still-sitting-on-it-hindi/",
      alt_name: "Cartoq",
      color_code: "#4285F499",
    },
    {
      title: "Newsable",
      subtitle: "Newsable asia news",
      logo_path: "asianNewsable.PNG",
      certificate_link:
        "https://newsable.asianetnews.com/weird-news/man-casually-sits-on-hanging-scooter-while-traffic-police-towed-it-dramatic-video-goes-viral-gps-rgrbia",
      alt_name: "asianetnews",
      color_code: "#4285F499",
    },
    {
      title: "Modash Influencer",
      subtitle: "Modash Influencer List",
      logo_path: "modash.PNG",
      certificate_link:
        "https://www.modash.io/find-influencers/india/nagpur",
      alt_name: "GCP",
      color_code: "#4285F499",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "HumNagpurkar.png",
    description:
      "Our team available on almost every social media. You can message us, We will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "CA road, gandhi putla behind renuka mandir c/o adv dhoble building, Mahal, Nagpur, Maharashtra 440002",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Hyzb9hypva8ocez1A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7276856723",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  certifications,
  contactPageData,
};

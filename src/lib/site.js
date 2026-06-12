export const SITE = {
  name: "H&D Heating and Air Conditioning Services, Inc.",
  shortName: "H&D Heating & Air",
  phoneDisplay: "(916) 936-6525",
  phoneE164: "+19169366525",
  email: "4hdhvac@gmail.com",
  address: "2973 Renee Ct, West Sacramento, CA 95691",
  reviews: 281,
  rating: "5.0",
  yearsInBusiness: 4,
  zipCount: 29,
  license: "CSLB #1090137",
  tagline: "Keeping Sacramento Comfortable All Year Long",
  bilingual: "Hablamos Español",
  availability: "24/7 Service",
}

/* Real job photos. Drop the matching files into /public/photos/ and they
   replace the branded placeholders automatically. */
export const PHOTOS = {
  vanEvening: "/photos/van-1.jpg",
  techRoof: "/photos/tech-roof.jpg",
  vanDay: "/photos/van-2.jpg",
}

export const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE.email}&su=${encodeURIComponent(
  "Service Request — H&D Heating & Air"
)}`

export const SMS_LINK = `sms:${SITE.phoneE164}`
export const TEL_LINK = `tel:${SITE.phoneE164}`

export const GOOGLE_REVIEWS_LINK =
  "https://www.google.com/search?q=H%26D+Heating+and+Air+Conditioning+Services+West+Sacramento+reviews"

export const ZIPS = [
  "95602", "95603", "95605", "95608", "95610", "95612", "95616", "95618",
  "95620", "95621", "95626", "95628", "95631", "95648", "95650", "95658",
  "95659", "95660", "95661", "95662", "95663", "95670", "95673", "95674",
  "95677", "94533", "95240", "95811", "95746",
]

export const CITIES = [
  "Sacramento", "West Sacramento", "Carmichael", "Citrus Heights",
  "Fair Oaks", "Orangevale", "Rancho Cordova", "North Highlands",
  "Rio Linda", "Davis", "Dixon", "Roseville", "Rocklin", "Lincoln",
  "Loomis", "Granite Bay", "Auburn", "Folsom area", "Fairfield", "Lodi",
]

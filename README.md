# Welcome Booking Star
![Copyright by Van Loc (github-nqvnlc)](https://github.com/github-nqvnlc/booking-star/blob/main/public/images/logo100.png?raw=true)

**Booking Star** is a cutting-edge, user-friendly application that revolutionizes the way you plan your travels and accommodations. With a wide range of functionalities, Booking Star aims to make your travel experiences seamless and unforgettable.

- **Explore the World:**
  At its core, Booking Star is a comprehensive travel booking platform that allows users to effortlessly reserve hotel rooms, guesthouses, homestays, and even camping sites from anywhere around the globe. Whether you're embarking on a spontaneous weekend getaway or planning a dream vacation, Booking Star has got you covered.

- **Convenient Scheduling:**
  Say goodbye to last-minute hassles! Booking Star empowers users to create detailed itineraries by scheduling accommodations, activities, and trips all within the app. No more toggling between multiple platforms – with Booking Star, everything you need is right at your fingertips.

- **Transparent Pricing:**
  We believe in transparency, and that's why Booking Star provides real-time pricing information for all listings. Compare prices, amenities, and reviews to make informed decisions tailored to your preferences and budget.

- **Secure Payments:**
  Booking Star prioritizes your safety and security. Our platform employs robust encryption and secure payment gateways, giving you peace of mind when making transactions.

- **Host Your Space:**
  Have a spare room or property? Booking Star enables users to list their spaces as accommodations for travelers to book. Share your unique space with the world and earn extra income through the platform.

- **Discover Unique Experiences:**
  In addition to traditional accommodations, Booking Star features a unique section dedicated to extraordinary experiences. Explore local events, tours, and activities to immerse yourself in the culture of your destination fully.

- **Personalized Recommendations:**
  Our advanced AI-driven algorithm learns from your preferences, past bookings, and interactions to provide personalized travel recommendations. Booking Star tailors its suggestions to suit your tastes and interests, making each journey truly one of a kind.

- **24/7 Customer Support:**
  We value your satisfaction, and our dedicated customer support team is available round the clock to assist you with any inquiries, booking changes, or issues that may arise during your travels.

- **Innovative Loyalty Program:**
- Booking Star rewards your loyalty! With our exclusive loyalty program, you can earn points and enjoy special perks for being a frequent user of the app.

Join the millions of travelers who have already embraced Booking Star's convenience, reliability, and exceptional service. Download the app today and unlock a world of possibilities for your next adventure!

## Features in project:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
  - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
  - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

## Require: `Node version 14.x`

## Technologies: 
- `Next JS v13 App Router`
- `React JS`
- `TailwindCSS`
- `Prisma`
- `MongoDB`
- `NextAuth`
- `Typescript`

## Getting Started
Cloning the repository: 
```bash 
git clone https://github.com/github-nqvnlc/booking-star.git
```

First, Install packages:
```bash
npm i
```

Second, setup .env file:
```bash
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

Third, setup Prisma: 
```bash
npx prisma db push
```

Finaly, run the development server:

```bash
npm run dev
# or
yarn dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

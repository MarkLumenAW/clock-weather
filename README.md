# Clock & Weather App

This application, built with [Next.js](https://nextjs.org/), provides real-time clock and weather data for four different cities around the world. The time and weather information is fetched from an API, providing the user with up-to-the-minute updates.

In the future, this app is planned to be updated with features such as automatic detection of the user's location and custom city selection. User creation and login functionality are also in the pipeline to allow personalized settings and storage of user-specific data.

## Technical Stack

This application utilizes several modern web technologies, including:

- **Next.js**: The core framework used to build this server-rendered React application.
- **React (with Hooks)**: Used for building the user interface and handling component state and side effects.
- **Styled Components**: Utilized for writing CSS in JavaScript, allowing for more dynamic and reusable components.
- **SWR**: Used for efficient, fast, and lightweight data fetching.
- **Axios**: Promised-based HTTP client for making API calls.
- **Moment.js & Moment Timezone**: Used for parsing, validating, manipulating, and displaying dates and times in JavaScript, in any timezone.
- **Tailwind CSS**: A utility-first CSS framework used for rapidly building custom user interfaces.
- **Headless UI**: A completely unstyled, fully accessible UI component library, designed to integrate beautifully with Tailwind CSS.
- **@iconify/react**: An icons library that includes popular icon sets that can be used easily in React.
- **PostCSS and Autoprefixer**: Tools for transforming CSS with JavaScript, and for adding vendor prefixes to CSS rules.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

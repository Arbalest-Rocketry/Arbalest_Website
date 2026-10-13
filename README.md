# Arbalest Rocketry Website

The official website of **Arbalest Rocketry** a student design team at Lassonde

## Features

- **Home:** a launch countdown to Launch Canada 2027 and a showcase of every rocket, from Goose II to Moose 1.
- **About:** our mission, the design, build and launch cycle and a timeline of our rockets
- **Rocket pages:** a page for each rocket with its story, launch video and photo gallery. Click any photo to view it full screen.
- **Subteams:** the team structure
- **Members:** the leads, with bios and contact emails.
- **Sponsorships, Contact and Donations:** ways to support and reach the team.

## Tech stack

- [React 19](https://react.dev) with [React Router](https://reactrouter.com)
- [Vite](https://vite.dev) for development and builds
- Plain CSS, one stylesheet per component
- Self-hosted fonts
- Hosted on [Vercel](https://vercel.com)
- Testing branch hosted on Pages

## Getting started

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
git clone https://github.com/zaina1405/Arbalest_Website.git
cd Arbalest_Website
npm install
npm run dev
```

Then open the local address Vite prints, usually http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with live reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with ESLint |

## Project structure

```
public/          Images, fonts and icons, served as-is
src/
  pages/         One component and stylesheet per page
  Navbar.jsx     Top navigation
  Footer.jsx     Site footer
  Hero.jsx       Home page hero and launch countdown
  GooseShowCase.jsx   Rocket list shown on the home page
  GalleryLightbox.jsx Full-screen photo viewer for galleries
scripts/         Image optimization helpers
archive/         Retired pages and assets kept for reference
```

## Updating content

Most content lives in plain lists at the top of each file, so updates rarely need new code.

- **Rockets:** edit the `rockets` list in `src/GooseShowCase.jsx`. The home page and the About timeline both read from it.
- **Moose 1 and Red Robin pages:** edit `rocketPages` in `src/pages/RocketDetailPage.jsx` (story, video, gallery).
- **Members:** edit the lists in `src/pages/MembersPage.jsx`, with photos in `public/members/`.
- **Team structure:** edit the lists at the top of `src/pages/SubteamsPage.jsx`.
- **Countdown date:** edit `LAUNCH_DATE` in `src/Hero.jsx`.

Please save new photos as `.webp` and keep them under about 2000px wide so the site stays fast.

## Contributing

1. Fork the repository and create a branch for your change.
2. Run `npm run dev` and check your change on desktop and mobile widths.
3. Run `npm run lint` and `npm run build` to make sure nothing breaks.
4. Open a pull request describing what changes you have made.
5. Then I review your changes and make a decision accordingly

## License

Released under the [Apache License 2.0](LICENSE).

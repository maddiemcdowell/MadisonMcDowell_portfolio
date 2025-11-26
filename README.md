# React Portfolio Website

A modern, responsive portfolio website built with React. This template showcases your projects, skills, and provides a way for potential clients or employers to get in touch.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with React
- 🎯 Smooth scrolling navigation
- 📊 Skills visualization with progress bars
- 📧 Contact form
- 🎭 Smooth animations and transitions
- 🌙 Professional color scheme

## Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal information and statistics
- **Projects** - Showcase of your best work with live demo and GitHub links
- **Skills** - Technical skills organized by category with progress indicators
- **Contact** - Contact form and information
- **Footer** - Additional links and social media

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd hyde
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.js`):

   - Replace "Your Name" with your actual name
   - Update the profile image URL
   - Modify the description and social media links

2. **About Section** (`src/components/About.js`):

   - Update the about text and statistics
   - Modify the features to match your strengths

3. **Projects Section** (`src/components/Projects.js`):

   - Replace the sample projects with your actual projects
   - Update images, descriptions, technologies, and links

4. **Skills Section** (`src/components/Skills.js`):

   - Modify the skills and their proficiency levels
   - Add or remove skill categories as needed

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information (email, phone, location)
   - Integrate with a backend service for form submissions

### Styling

- Main styles are in `src/styles/`
- Component-specific styles are in each component's CSS file
- Colors and fonts can be customized in `src/styles/index.css`

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Add the corresponding CSS file
3. Import and use the component in `src/App.js`
4. Update the navigation in `src/components/Header.js`

## Technologies Used

- React 18
- CSS3 with Flexbox and Grid
- React Icons
- Modern JavaScript (ES6+)
- Responsive Design
- CSS Animations

## Browser Support

This portfolio works on all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE.md).

---

**Note**: Don't forget to update the meta tags in `public/index.html` with your actual information for better SEO.

![Hyde screenshot](https://f.cloud.github.com/assets/98681/1831228/42af6c6a-7384-11e3-98fb-e0b923ee0468.png)

## Contents

- [Usage](#usage)
- [Options](#options)
  - [Sidebar menu](#sidebar-menu)
  - [Sticky sidebar content](#sticky-sidebar-content)
  - [Themes](#themes)
  - [Reverse layout](#reverse-layout)
- [Development](#development)
- [Author](#author)
- [License](#license)

## Usage

Hyde is a theme built on top of [Poole](https://github.com/poole/poole), which provides a fully furnished Jekyll setup—just download and start the Jekyll server. See [the Poole usage guidelines](https://github.com/poole/poole#usage) for how to install and use Jekyll.

## Options

Hyde includes some customizable options, typically applied via classes on the `<body>` element.

### Sidebar menu

Create a list of nav links in the sidebar by assigning each Jekyll page the correct layout in the page's [front-matter](http://jekyllrb.com/docs/frontmatter/).

```
---
layout: page
title: About
---
```

**Why require a specific layout?** Jekyll will return _all_ pages, including the `atom.xml`, and with an alphabetical sort order. To ensure the first link is _Home_, we exclude the `index.html` page from this list by specifying the `page` layout.

### Sticky sidebar content

By default Hyde ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disable this by removing the `.sidebar-sticky` class from the sidebar's `.container`. Sidebar content will then normally flow from top to bottom.

```html
<!-- Default sidebar -->
<div class="sidebar">
  <div class="container sidebar-sticky">...</div>
</div>

<!-- Modified sidebar -->
<div class="sidebar">
  <div class="container">...</div>
</div>
```

### Themes

Hyde ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde in red](https://f.cloud.github.com/assets/98681/1831229/42b0b354-7384-11e3-8462-31b8df193fe5.png)

There are eight themes available at this time.

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, add anyone of the available theme classes to the `<body>` element in the `default.html` layout, like so:

```html
<body class="theme-base-08">
  ...
</body>
```

To create your own theme, look to the Themes section of [included CSS file](https://github.com/poole/hyde/blob/master/public/css/hyde.css). Copy any existing theme (they're only a few lines of CSS), rename it, and change the provided colors.

### Reverse layout

![Hyde with reverse layout](https://f.cloud.github.com/assets/98681/1831230/42b0d3ac-7384-11e3-8d54-2065afd03f9e.png)

Hyde's page orientation can be reversed with a single class.

```html
<body class="layout-reverse">
  ...
</body>
```

## Development

Hyde has two branches, but only one is used for active development.

- `master` for development. **All pull requests should be submitted against `master`.**
- `gh-pages` for our hosted site, which includes our analytics tracking code. **Please avoid using this branch.**

## Author

**Mark Otto**

- <https://github.com/mdo>
- <https://twitter.com/mdo>

## License

Open sourced under the [MIT license](LICENSE.md).

<3

# Developer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your projects, skills, and experience in a clean and professional manner.

## Features

- **Fully Responsive**: Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Project Showcase**: Display your projects with images, descriptions, and links
- **Skills Section**: Highlight your technical skills with interactive tags
- **Contact Information**: Easy way for visitors to get in touch with you
- **SEO Optimized**: Built with best practices for search engines

## Getting Started

### Prerequisites

- A GitHub account
- A code editor (like [VS Code](https://code.visualstudio.com/))
- Git installed on your computer

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Open the project**
   - Open the project folder in your favorite code editor

3. **Customize the content**
   - Edit `index.html` to update your personal information, projects, and links
   - Update the colors in `css/styles.css` by modifying the CSS variables at the top of the file
   - Replace the placeholder images in the project cards with your project screenshots
   - Update the social media links in the contact section

## Deployment to GitHub Pages

1. **Create a new repository**
   - Go to [GitHub](https://github.com/new)
   - Name the repository `yourusername.github.io` (replace 'yourusername' with your GitHub username)
   - Make it public
   - Don't initialize it with a README, .gitignore, or license

2. **Initialize git and push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - In the left sidebar, click on "Pages"
   - Under "Source", select the `main` branch and click "Save"
   - Your site will be published at `https://yourusername.github.io`

## Customization

### Changing Colors

You can easily change the color scheme by updating the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;       /* Main brand color */
    --secondary-color: #1e40af;     /* Darker shade of primary */
    --text-color: #1f2937;          /* Main text color */
    --light-text: #6b7280;          /* Secondary text color */
    --background: #ffffff;           /* Main background */
    --light-bg: #f3f4f6;            /* Secondary background */
}
```

### Adding Projects

To add a new project, copy and paste a project card in the projects section of `index.html`:

```html
<div class="project-card">
    <img src="path/to/your/project-image.jpg" alt="Project Name">
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Brief description of the project and the technologies used.</p>
        <div class="project-links">
            <a href="#" target="_blank" class="btn">Live Demo</a>
            <a href="#" target="_blank" class="btn btn-outline">Code</a>
        </div>
    </div>
</div>
```

### Updating Skills

To update your skills, modify the skills section in `index.html`:

```html
<div class="skills-container">
    <span class="skill-tag">HTML5</span>
    <span class="skill-tag">CSS3</span>
    <span class="skill-tag">JavaScript</span>
    <!-- Add more skills as needed -->
</div>
```

## Browser Support

This portfolio is built with modern web standards and works best in the latest versions of:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All the amazing open-source projects that made this possible

---

Happy coding! 🚀

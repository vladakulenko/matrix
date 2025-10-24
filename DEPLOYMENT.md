# GitHub Pages Deployment Guide

## Quick Setup

1. **Enable GitHub Pages in your repository:**

    - Go to your repository on GitHub
    - Click on "Settings" tab
    - Scroll down to "Pages" section
    - Under "Source", select "GitHub Actions"

2. **Push your changes:**

    ```bash
    git add .
    git commit -m "Add GitHub Pages deployment"
    git push origin main
    ```

3. **Monitor the deployment:**

    - Go to the "Actions" tab in your repository
    - You should see the "Deploy to GitHub Pages" workflow running
    - Wait for it to complete (usually takes 2-3 minutes)

4. **Access your deployed app:**
    - Once deployed, your app will be available at:
    - `https://[your-username].github.io/matrix/`

## Important Notes

-   The workflow is configured to deploy on every push to the `main` branch
-   The Vite config has been updated with `base: '/matrix/'` for proper GitHub Pages routing
-   Make sure to replace `[your-username]` in the README.md with your actual GitHub username

## Troubleshooting

-   If deployment fails, check the Actions tab for error details
-   Ensure GitHub Pages is enabled and set to "GitHub Actions" source
-   Verify that the repository name matches the base path in vite.config.ts

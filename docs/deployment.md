# Deployment Guide

This project currently has only basic documentation. Below are steps to deploy the application to Firebase Hosting, or alternatively to other static site hosting platforms. The instructions assume you have a simple static site.

## Firebase Hosting

1. **Install Firebase CLI**
   - Ensure Node.js is installed.
   - Run `npm install -g firebase-tools` to install the Firebase CLI.

2. **Login and Initialize**
   - Run `firebase login` and follow the browser authentication.
   - Initialize Firebase in your project directory:
     ```
     firebase init hosting
     ```
   - Select an existing Firebase project or create a new one.
   - When prompted for the public directory, specify the folder containing your compiled assets (e.g., `dist` or `build`).
   - Choose whether to configure as a single-page app if you are using a framework like React.

3. **Environment Variables**
   - If your application uses environment variables, store them in a `.env` file (not committed to version control) and reference them in your build process.
   - For example, in a Node-based project with `dotenv`, load the variables during the build or start script.

4. **Deploy**
   - Run `firebase deploy` to upload your files to Firebase Hosting.

## CI/CD with GitHub Actions

1. **Setup Workflow**
   - Create `.github/workflows/deploy.yml` with a job that installs dependencies, builds the project, and deploys to Firebase Hosting.
   - Use the `Firebase-CLI` action to simplify authentication using a service account key stored as a GitHub secret.

2. **Example Workflow Snippet**
   ```yaml
   name: Firebase Deploy
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - run: npm install -g firebase-tools
         - run: npm ci
         - run: npm run build
         - run: firebase deploy --token "$FIREBASE_TOKEN"
           env:
             FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
   ```

## Alternative Hosting Platforms

- **Netlify**
  - Connect your repository to Netlify and set the build command and publish directory in the web UI.
  - Store any environment variables in the Netlify dashboard under Site settings.

- **Vercel**
  - Install the Vercel CLI with `npm i -g vercel` and run `vercel` to deploy.
  - Configure environment variables in the Vercel dashboard or via the CLI.

## Local Testing

- Run `firebase serve` to preview the site locally before deploying.


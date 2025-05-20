# Free Motion Gear

Free Motion Gear is an e-commerce platform focused on selling sports and rehabilitation equipment. The project uses modern web technologies to provide a responsive storefront and a streamlined checkout experience.

## Key Features

- **Stripe Payments:** The site integrates with Stripe to handle secure credit card transactions.
- **Firebase & Firebase Authentication:** Customer accounts, product data, and order information are stored in Firebase. Firebase Authentication manages login and signup.
- **Analytics Integrations:** The site can integrate analytics tools (such as Google Analytics) to track user behavior and sales performance.

## Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- A Firebase project with authentication configured.
- A Stripe account for processing payments.

### Installation

1. Clone this repository:
   ```bash
   git clone <REPO_URL>
   cd freemotiongear
   ```
2. Install dependencies (if this project has a package.json):
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root with the following environment variables:
   ```bash
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   STRIPE_PUBLIC_KEY=your_public_key
   STRIPE_SECRET_KEY=your_secret_key
   ```
4. Run the development server:
   ```bash
   npm start
   ```

Feel free to modify these instructions based on how you plan to structure the codebase.

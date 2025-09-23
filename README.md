# Master-Type
---

MasterType is a typing speed test web app to help users practice and improve their typing accuracy and speed.Tracks typing progress over time; helps users see improvement and identify weak spots (common mistakes, slow keys etc.).

It is built using React.js on the frontend and Firebase for authentication & database, with Material-UI for styling.

---
## Features

- Typing Modes – Users can practice in Time mode (15s, 30s, 60s) or Word mode, making it flexible for quick practice or extended sessions.
- Real-time Accuracy & Speed Tracking – As you type, it calculates Words Per Minute (WPM), accuracy %, and errors so you can monitor progress instantly.
- Custom Themes – Users can switch between different font styles/themes, adding personalization to the typing experience.
- User Authentication & Comparison – With the Compare and Profile buttons, users can log in, track their performance, and compare scores with others.
  
---

## Run Locally

Clone the project

```bash
git clone https://github.com/shagun078/typing_test.git
```

Go to the project directory

```bash
cd typing_test

```

Install dependencies

```bash
  yarn install
```
#### Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server directory

`REACT_APP_API_KEY`=`your_firebase_api_key  `

`REACT_APP_AUTH_DOMAIN`=`your_firebase_auth_domain  `

`REACT_APP_PROJECT_ID`=`your_firebase_project_id  `

`REACT_APP_STORAGE_BUCKET`=`your_firebase_storage_bucket  `

`REACT_APP_MESSAGING_SENDER_ID`=`your_firebase_messaging_sender_id  `

`REACT_APP_APP_ID`=`your_firebase_app_id  `

`REACT_APP_MEASUREMENT_ID`=`your_firebase_measurement_id  `

Run the Application

```bash
  yarn start
```

Open your web browser and visit http://localhost:3000 (or the port shown in your terminal

---
##  Usage & Testing Guide

Follow these steps to use MasterType:
- Create an account using your email.
- If you already have an account, simply sign in.
- Type and it will calculate metrics like words per minute (WPM), accuracy %, and error count.
- You can even make your friends join and can compare your growth.

---


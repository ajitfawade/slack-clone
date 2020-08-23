# Slack Clone
Visit [here](https://slack-clone-8242f.web.app/).

## Firebase setup

* Install firebase tools: ```npm install -g firebase-tools```
* Clone Repository: ```git clone https://github.com/ajitfawade/slack-clone.git```
* Change current directory: ```cd slack-clone```
* Firebase Login: ```firebase login```


* Go to Firebase Console in your browser and create new project **slack-clone**
* Go to Project Settings and create new web app **slack-clone**
* In the Firebase SDK snippet section, select config
* Copy the code and paste it in the **firebase.js** file in ```src``` folder of our git repository.
* Go to Cloud Firestore and create new collection **rooms**


### `npm install`

### `npm start`

## Deploy
* `npm run build` - Create a production build.
* `firebase init` - choose all default options except for **public** folder type **build**.
* `firebase deploy` - Hit the URL displayed on the terminal.

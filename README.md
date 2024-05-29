### Send Push Notification

<p align="center">
  <img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png" />
  <img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_logo_dark.svg" />
</p>

---

- Clone the repo.
- execute the `npm i` command.
- Get the service account key from the Firebase Console.

#### Generating a Service Account Key JSON

To acquire the account key JSON file for your service account

- Select your project, and click the gear icon on the top of the sidebar.
- Head to project settings.
- Navigate to the service account tab.
- Click `Generate New Private Key`, then confirm by clicking `Generate Key`.
- Clicking `Generate Key` downloads the JSON file.

After that, paste the entire JSON file content in the `serviceAccountKey.json`.

- Then follow the `index.js` file.
- To execute this index.js file run the `node index.js` command.

Follow the `success` response:

```json
Successfully sent message: {
  responses: [
    {
      success: true,
      messageId: 'projects/ciplaverse/messages/1716989881088072'
    }
  ],
  successCount: 1,
  failureCount: 0
}
```

Follow the `error` response:

```json
Successfully sent message: {
  responses: [ { success: false, error: [FirebaseMessagingError] } ],
  successCount: 0,
  failureCount: 1
}
```

---

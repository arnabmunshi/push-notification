const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

// Get the FCM token you want to send the notification to
const FCM_TOKEN = "YOUR_FCM_TOKEN";

// This registration token comes from the client FCM SDKs.
const registrationToken = [FCM_TOKEN];

const message = {
	tokens: registrationToken,
	notification: {
		title: 'FCM Notification',
		body: 'Testing FCM Notification',
	},
	data: {
		body: "{type:'YOR_DATA',navigate_to:'YOR_DATA',}",
		title: "Data",
	},
	// apns: {
	// 	payload: {
	// 		aps: {
	// 			'mutable-content': 1,
	// 		},
	// 	},
	// 	fcmOptions: {
	// 		imageUrl: 'https://i.ibb.co/LZHq1c9/Approval.png',
	// 	},
	// },
	// android: {
	// 	notification: {
	// 		imageUrl: 'https://i.ibb.co/LZHq1c9/Approval.png',
	// 	},
	// },
};

// Send a message to the device corresponding to the provided
// registration token.
admin
	.messaging()
	.sendEachForMulticast(message)
	.then((response) => {
		console.log('Successfully sent message:', response);
	})
	.catch((error) => {
		console.log('Error sending message:', error);
	});

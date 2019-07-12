import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export interface Notification {
  content: string;
  user: string;
  time: any;
}

const createNotification = (notification: Notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc: any) => {
      console.log("Notification Added", doc);
    });
};

export const projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc: any) => {
    const project = doc.data();
    const notification: Notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

export const userJoined = functions.auth.user().onCreate((user: any) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc: any) => {
      const newUser = doc.data();
      const notification: Notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});

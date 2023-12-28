import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const generateFirebaseId = (path: string) => {
  const firRef = firestore().collection(path).doc();

  return firRef.id;
};

export enum FIREBASE_COLLECTIONS {
  USER = 'user',
  POST = 'post',
  FRIENDSHIP = 'friendship',
  MESSAGE_THREAD = 'messageThread',
  MESSAGE = 'message',
}

/**
 * When retrieving documents using a WhereCriteria, we receive back a QuerySnapshot.
 *
 * Resources:
 * - [WhereCriteria](https://rnfirebase.io/reference/firestore/wherefilterop)
 * - [QuerySnapshot](https://rnfirebase.io/reference/firestore/querysnapshot)
 */
export const getDocumentsFromQuerySnapshot = (
  querySnapshot: FirebaseFirestoreTypes.QuerySnapshot,
) => {
  const documents: any = [];
  querySnapshot.forEach(doc => {
    documents.push(doc.data());
  });
  return documents;
};

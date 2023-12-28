import {
  createDocumentWithId,
  updateDocument,
} from '../api/firestore/DocumentMutator';
import {
  WhereCriteria,
  getDocumentsWithCriteria,
} from '../api/firestore/DocumentRetriever';
import {FIREBASE_COLLECTIONS} from '../api/firestore/utils';
import {MessageThread} from '../model/messageThread';

export const createMessageThreadDocument = async (
  messageThread: MessageThread,
) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.MESSAGE_THREAD,
    messageThread.id,
    messageThread,
  );

  if (resp.error) {
    throw resp.error;
  }
};

export const updateMessageThreadDocument = async (
  messageThread: MessageThread,
) => {
  await updateDocument(
    FIREBASE_COLLECTIONS.MESSAGE_THREAD,
    messageThread.id,
    messageThread,
  );
};

export const getMessageThreadsForUser = async (user: string) => {
  console.log('user', user);
  const criteria: WhereCriteria = {
    field: 'users',
    operation: 'array-contains',
    criteria: user,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.MESSAGE_THREAD,
    criteria,
  );

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as MessageThread[];
};

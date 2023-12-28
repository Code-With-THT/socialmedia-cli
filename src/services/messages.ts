import {
  createDocumentWithId,
  updateDocument,
} from '../api/firestore/DocumentMutator';
import {
  WhereCriteria,
  getDocumentsWithCriteria,
} from '../api/firestore/DocumentRetriever';
import {FIREBASE_COLLECTIONS} from '../api/firestore/utils';
import {Message} from '../model/message';

export const createMessageDocument = async (message: Message) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.MESSAGE,
    message.id,
    message,
  );

  if (resp.error) {
    throw resp.error;
  }
};

export const updateMessageDocument = async (message: Message) => {
  await updateDocument(FIREBASE_COLLECTIONS.MESSAGE, message.id, message);
};

export const getMessagesForUser = async (thread: string) => {
  const criteria: WhereCriteria = {
    field: 'messageThread',
    operation: '==',
    criteria: thread,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.MESSAGE,
    criteria,
  );

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as Message[];
};

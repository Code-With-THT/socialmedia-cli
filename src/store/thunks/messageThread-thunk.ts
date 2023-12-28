import {AppThunk} from '..';
import {
  FIREBASE_COLLECTIONS,
  generateFirebaseId,
} from '../../api/firestore/utils';
import {Message} from '../../model/message';
import {MessageThread} from '../../model/messageThread';
import {createMessageThreadDocument} from '../../services/messageThread';
import {createMessageDocument} from '../../services/messages';
import {parseDateToString} from '../../utils/date';
import {MessageThreadsActions} from '../features/messageTheads';
import {MessagesActions} from '../features/messages';

export const createMessageThreadThunk = (
  firstMessage: string,
  onSuccess: () => void,
  onError: () => void,
): AppThunk<void> => {
  return async (dispatch, state) => {
    try {
      const {user, currentUser} = state();
      const newMessageThread: MessageThread = {
        id: generateFirebaseId(FIREBASE_COLLECTIONS.MESSAGE_THREAD),
        users: [user.id, currentUser.id],
        createdDate: Date.now(),
        createdDateString: parseDateToString(Date.now()),
        createdBy: user.id,
      };

      createMessageThreadDocument(newMessageThread);
      dispatch(MessageThreadsActions.addMessageThreads([newMessageThread]));

      const message: Message = {
        id: generateFirebaseId(FIREBASE_COLLECTIONS.MESSAGE),
        messageThread: newMessageThread.id,
        sender: user.id,
        text: firstMessage,
        createdDate: Date.now(),
        createdDateString: parseDateToString(Date.now()),
        hasBeenRead: false,
      };

      createMessageDocument(message);
      dispatch(MessagesActions.addMessages([message]));

      onSuccess();
    } catch (error) {
      console.log('Could not create new MessageThread', error);

      onError();
    }
  };
};

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MessageThread} from '../../model/messageThread';

export type CurrentMessageThreadType = MessageThread;

const initialState: CurrentMessageThreadType = {
  id: '',
  users: [],
  createdDate: 0,
  createdDateString: '',
  createdBy: '',
};

const currentMessageThread = createSlice({
  name: 'currentMessageThread',
  initialState,
  reducers: {
    setCurrentMessageThread: (_, action: PayloadAction<MessageThread>) => {
      return action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const CurrentMessageThreadActions = currentMessageThread.actions;

export default currentMessageThread.reducer;

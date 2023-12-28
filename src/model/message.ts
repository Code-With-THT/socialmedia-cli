export type Message = {
  id: string;
  messageThread: string;
  sender: string;
  text: string;

  /**
   * Metadata
   */
  createdDate: number;
  createdDateString: string;
  hasBeenRead: boolean;
};

import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('Message sent:', message);
  }
}

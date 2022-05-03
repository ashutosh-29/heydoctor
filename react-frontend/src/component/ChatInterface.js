import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import React from 'react';
import ChannelContainer from './ChannelContainer';
import ChannelListContainer from './ChannelListContainer';

const apiKey='6hqhmqawz7cf';
const client = StreamChat.getInstance(apiKey);

function ChatInterface() {
  return (
    <div>
        <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />

        </Chat>
    </div>
  )
}

export default ChatInterface
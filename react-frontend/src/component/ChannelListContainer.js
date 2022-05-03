import React from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';

const SideBar=()=>(
  <div className="">
        <div className="">
            <div className="">
                <h1>HeyDoctor</h1>
            </div>
        </div>
        <div className="">
            <div className="" >
              <h1>Logout</h1>
            </div>
        </div>
    </div>
);

function ChannelListContainer() {
  return (
    <>
    
      <SideBar  />
    </>
  )
}

export default ChannelListContainer
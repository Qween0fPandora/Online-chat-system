import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
      <div className="background">
        <PrettyChatWindow
          projectId='870c51da-28e4-4988-b1d6-a0f44934e968'
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%' }}
        />
      </div>
    );
  };

export default ChatsPage;
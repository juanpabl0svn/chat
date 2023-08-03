import { type IMessage } from "../utils/types";


function UserList({messages} : {messages: IMessage[]}) {
  return (
    <aside className="w-full bg-slate-500 overflow-y-scroll h-60">
      {messages.map((message : IMessage,index : number) => {
        return (
        <div key={index} className={message.type} >
          <p>{message.message}</p>
        </div>
      )})}
    </aside>
  );
}

export default UserList;

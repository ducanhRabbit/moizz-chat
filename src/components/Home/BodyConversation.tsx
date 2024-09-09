import { DocMsg, ImgMsg, LinkMsg, MessageOptions, ReplyMsg, TextMsg, TimeLine } from "../Chat/MsgTypes";

function BodyConversation() {
  return (
    <>
      <div className="flex-1 min-h-0 overflow-auto flex flex-col gap-4 bg-avo-yellow p-4">
        <TextMsg/>
        <TimeLine/>
        <LinkMsg/>
        <ImgMsg/>
        <ReplyMsg/>
        <DocMsg/>
        <MessageOptions/>
      </div>
    </>
  );
}

export default BodyConversation;

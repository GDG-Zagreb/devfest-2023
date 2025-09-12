import React from 'react';

export default function AgendaCard(props: {
  talk: {
    time: string;
    name: string;
    talkName: string;
  };
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items:left lg:items-center p-3 gap-5 w-full items border rounded-lg bg-background">
        <div className="text-font-semibold">{props.talk.time}</div>
        <div className="text-bold text-2xl lg:w-1/2">{props.talk.talkName}</div>
        <div className="text-semibold text-xl lg:w-2/5 text-muted-foreground">
          {props.talk.name}
        </div>
      </div>
    </>
  );
}

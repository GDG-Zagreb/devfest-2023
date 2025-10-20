interface AgendaItemProps {
    talk: {
        time: string;
        type?: string;
        name?: string;
        speaker?: {
            speakerName: string;
            speakerJobTitle: string;
            sessionTitle: string;
            speakerImgSrc: string;
        };
    };
}

const AgendaItem = ({ talk }: AgendaItemProps) => {
    return (
        <div className='flex flex-row p-4 gap-4 border rounded-lg bg-background hover:shadow-md transition-shadow'>
            {/* Time */}
            <div className='text-semibold min-w-[60px]'>{talk.time}</div>

            {/* Talk Title and Speaker Info */}
            <div className='flex flex-col gap-2'>
                <div className='text-bold text-xl md:text-2xl'>
                    {talk.name || 'Event'}
                </div>

                {/* Speaker Name and Title */}
                {talk.speaker && (
                    <div className='flex flex-col gap-1'>
                        <div className='text-semibold text-lg font-semibold text-muted-foreground'>
                            {talk.speaker.speakerName}
                        </div>
                        <div className='text-sm text-muted-foreground'>
                            {talk.speaker.speakerJobTitle}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AgendaItem;

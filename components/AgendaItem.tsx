
interface AgendaItemProps {
    talk: {
        time: string;
        type?: string;
        speakerName?: string;
        speakerInfo?: string;
        name?: string;
        info?: string;
        imgSrc?: string;
    };
}

const AgendaItem = ({ talk }: AgendaItemProps) => {
    return (
        <div className='flex flex-col lg:flex-row p-3 gap-6 justify-between border rounded-lg bg-background'>
            <div className='flex flex-row gap-4 items-center sm:w-full md:w-5/6 lg:w-2/3 '>
                <div className='text-font-semibold'>{talk.time}</div>
                <div className='text-bold text-xl md:text-2xl md:w-4/5 lg:w-full'>
                    {talk.name || 'Event'}
                </div>
            </div>

            <div className='flex flex-row gap-2 lg:w-1/2 ml-[56px]  lg:ml-0'>
                <div className='flex flex-col w-full gap-1'>
                    <div className='text-semibold text-xl text-muted-foreground'>
                        {talk.speakerName}
                    </div>
                    <div className='text-semibold text-xs lg:w-4/5 text-muted-foreground'>
                        {talk.speakerInfo}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgendaItem;

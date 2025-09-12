import speakers from '@/json/speakers.json';
import speakers2024 from '@/json/archive/2024/speakers.json';
import speakers2023 from '@/json/archive/2023/speakers.json';

// Base speaker type (for archives)
export type BaseSpeaker = {
    type: string;
    speakerName: string;
    speakerInfo: string;
    name: string;
    info: string;
    imgSrc: string;
};

// Current speaker type (2025) with featured flag
export type Speaker = BaseSpeaker & {
    isFeatured: boolean;
};

export type ScheduleItem = {
    time: string;
    id: number;
    speakerRef?: string;  // Reference to speaker by name
    name?: string;        // For non-speaker items like breaks
    type?: string;
};

export type EnhancedScheduleItem = ScheduleItem & {
    speaker?: BaseSpeaker;    // Merged speaker data (base type to work with all years)
};

/**
 * Get speaker data by name from speakers.json (current year or specified archive year)
 */
export function getSpeakerByName(speakerName: string, year?: string): BaseSpeaker | undefined {
    switch(year) {
        case '2023':
            return speakers2023.speakers.find((speaker: BaseSpeaker) => 
                speaker.speakerName === speakerName
            );
        case '2024':
            return speakers2024.speakers.find((speaker: BaseSpeaker) => 
                speaker.speakerName === speakerName
            );
        default:
            // For current year (2025), we need to return BaseSpeaker (without isFeatured)
            const currentSpeaker = speakers.speakers.find((speaker: Speaker) => 
                speaker.speakerName === speakerName
            );
            if (currentSpeaker) {
                // Strip the isFeatured property to match BaseSpeaker type
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { isFeatured, ...baseSpeaker } = currentSpeaker;
                return baseSpeaker;
            }
            return undefined;
    }
}

/**
 * Enhance schedule items by merging speaker data from speakers.json
 */
export function enhanceScheduleWithSpeakers(schedule: ScheduleItem[], year?: string): EnhancedScheduleItem[] {
    return schedule.map((item: ScheduleItem) => {
        if (item.speakerRef) {
            const speaker = getSpeakerByName(item.speakerRef, year);
            if (speaker) {
                return {
                    ...item,
                    speaker,
                    // Use speaker's talk name if no custom name provided
                    name: item.name || speaker.name,
                    type: item.type || speaker.type
                };
            }
        }
        return item;
    });
}

/**
 * Get all speakers for easy reference (current year or specified archive year)
 */
export function getAllSpeakers(year?: string): BaseSpeaker[] {
    switch(year) {
        case '2023':
            return speakers2023.speakers as BaseSpeaker[];
        case '2024':
            return speakers2024.speakers as BaseSpeaker[];
        default:
            // For current year, strip isFeatured from all speakers
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return speakers.speakers.map(({ isFeatured, ...baseSpeaker }) => baseSpeaker);
    }
}
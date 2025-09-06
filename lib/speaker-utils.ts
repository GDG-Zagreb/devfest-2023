import speakers from '@/json/speakers.json';
import speakers2024 from '@/json/archive/2024/speakers.json';
import speakers2023 from '@/json/archive/2023/speakers.json';

export type Speaker = {
    type: string;
    speakerName: string;
    speakerInfo: string;
    name: string;
    info: string;
    imgSrc: string;
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
    speaker?: Speaker;    // Merged speaker data
};

/**
 * Get speaker data by name from speakers.json (current year or specified archive year)
 */
export function getSpeakerByName(speakerName: string, year?: string): Speaker | undefined {
    let speakerData;
    
    switch(year) {
        case '2023':
            speakerData = speakers2023.speakers;
            break;
        case '2024':
            speakerData = speakers2024.speakers;
            break;
        default:
            speakerData = speakers.speakers; // Current year (2025)
    }
    
    return speakerData.find((speaker: Speaker) => 
        speaker.speakerName === speakerName
    );
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
export function getAllSpeakers(year?: string): Speaker[] {
    switch(year) {
        case '2023':
            return speakers2023.speakers;
        case '2024':
            return speakers2024.speakers;
        default:
            return speakers.speakers; // Current year (2025)
    }
}
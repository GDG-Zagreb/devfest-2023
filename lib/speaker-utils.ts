import speakers from '@/json/speakers.json';
import speakers2024 from '@/json/archive/2024/speakers.json';
import speakers2023 from '@/json/archive/2023/speakers.json';

// Base speaker type (for archives)
export type BaseSpeaker = {
    type: string;
    speakerName: string;
    speakerJobTitle: string;
    sessionTitle: string;
    sessionDescription: string;
    speakerImgSrc: string;
};

// Current speaker type (2025) with featured flag
export type Speaker = BaseSpeaker & {
    isFeatured: boolean;
    isPublishable: boolean;
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
            const speaker2023 = speakers2023.speakers.find((speaker) =>
                speaker.speakerName === speakerName
            );
            if (speaker2023) {
                return {
                    type: speaker2023.type,
                    speakerName: speaker2023.speakerName,
                    speakerJobTitle: speaker2023.speakerInfo,
                    sessionTitle: speaker2023.name,
                    sessionDescription: speaker2023.info,
                    speakerImgSrc: speaker2023.imgSrc
                };
            }
            return undefined;
        case '2024':
            const speaker2024 = speakers2024.speakers.find((speaker) =>
                speaker.speakerName === speakerName
            );
            if (speaker2024) {
                return {
                    type: speaker2024.type,
                    speakerName: speaker2024.speakerName,
                    speakerJobTitle: speaker2024.speakerInfo,
                    sessionTitle: speaker2024.name,
                    sessionDescription: speaker2024.info,
                    speakerImgSrc: speaker2024.imgSrc
                };
            }
            return undefined;
        default:
            // For current year (2025), we need to return BaseSpeaker (without isFeatured)
            const currentSpeaker = speakers.speakers.find((speaker) =>
                speaker.speakerName === speakerName
            );
            if (currentSpeaker) {
                return {
                    type: currentSpeaker.type,
                    speakerName: currentSpeaker.speakerName,
                    speakerJobTitle: currentSpeaker.speakerInfo,
                    sessionTitle: currentSpeaker.name,
                    sessionDescription: currentSpeaker.info,
                    speakerImgSrc: currentSpeaker.imgSrc
                };
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
                    // Use speaker's session title if no custom name provided
                    name: item.name || speaker.sessionTitle,
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
            return speakers2023.speakers.map((speaker) => ({
                type: speaker.type,
                speakerName: speaker.speakerName,
                speakerJobTitle: speaker.speakerInfo,
                sessionTitle: speaker.name,
                sessionDescription: speaker.info,
                speakerImgSrc: speaker.imgSrc
            }));
        case '2024':
            return speakers2024.speakers.map((speaker) => ({
                type: speaker.type,
                speakerName: speaker.speakerName,
                speakerJobTitle: speaker.speakerInfo,
                sessionTitle: speaker.name,
                sessionDescription: speaker.info,
                speakerImgSrc: speaker.imgSrc
            }));
        default:
            // For current year, map to new field names
            return speakers.speakers.map((speaker) => ({
                type: speaker.type,
                speakerName: speaker.speakerName,
                speakerJobTitle: speaker.speakerInfo,
                sessionTitle: speaker.name,
                sessionDescription: speaker.info,
                speakerImgSrc: speaker.imgSrc
            }));
    }
}
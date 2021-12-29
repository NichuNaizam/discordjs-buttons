import { ButtonInteraction, TextChannel } from 'discord.js';
export declare function onButtonClick(customId: string, channel: TextChannel, maxClicks: number, click: onClick): void;
export interface onClick {
    onClick(i: ButtonInteraction): void;
}

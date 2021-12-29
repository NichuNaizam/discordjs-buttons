import { ButtonInteraction, MessageComponentInteraction, TextChannel } from 'discord.js';

export function onButtonClick(customId: string, channel: TextChannel, maxClicks: number, click: onClick) {
    const filter = (i: MessageComponentInteraction) => { return i.customId === customId };

    const collector = channel.createMessageComponentCollector({
        filter,
        max: maxClicks
    });

    collector.on('collect', (i) => {
        if (!i.isButton()) return;
        
        click.onClick(i);
    })
}

export interface onClick {
    onClick(i: ButtonInteraction): void;
}
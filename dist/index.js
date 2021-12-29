"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onButtonClick = void 0;
function onButtonClick(customId, channel, maxClicks, click) {
    const filter = (i) => { return i.customId === customId; };
    const collector = channel.createMessageComponentCollector({
        filter,
        max: maxClicks
    });
    collector.on('collect', (i) => {
        if (!i.isButton())
            return;
        click.onClick(i);
    });
}
exports.onButtonClick = onButtonClick;

const fs = require('fs');
const { EmbedBuilder } = require('discord.js');
const { Hastebin } = require('hastebin-save');

module.exports = async function saveTicket(transcript, openerName, receiverName, channel, logChannel) {
  const url = await Hastebin(transcript, { extension: 'txt' });

  const embed = new EmbedBuilder()
    .setTitle('📩 تم حفظ التذكرة')
    .setColor(0xFF0000)
    .addFields(
      { name: 'فاتح التذكرة', value: openerName, inline: true },
      { name: 'المستلم', value: receiverName || 'غير محدد', inline: true },
      { name: 'رابط المحادثة', value: `[اضغط هنا لعرض المحادثة](${url})` }
    );

  logChannel.send({ embeds: [embed] });
};

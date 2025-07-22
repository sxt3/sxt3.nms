module.exports = {
  name: 'تقديم-ادارة',
  async execute(message, args, client) {
    const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

    const embed = new EmbedBuilder()
      .setTitle('طلب تقديم للإدارة')
      .setDescription('اضغط الزر بالأسفل للتقديم')
      .setColor(0x00AE86);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('apply_admin')
        .setLabel('إدارة السيرفر')
        .setStyle(ButtonStyle.Primary)
    );

    await message.channel.send({ embeds: [embed], components: [row] });
  }
};

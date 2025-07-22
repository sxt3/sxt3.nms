module.exports = {
  name: 'تكت-ستاف',
  async execute(message, args, client) {
    const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

    const embed = new EmbedBuilder()
      .setTitle('نظام التذاكر - الإدارة')
      .setDescription('اختر أحد الأزرار أدناه للتفاعل مع التذكرة.')
      .setColor(0x2f3136);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('notify_role_1').setLabel('تنبيه رول 1').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId('notify_role_2').setLabel('تنبيه رول 2').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId('save_ticket').setLabel('حفظ التذكرة').setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId('close_ticket').setLabel('إغلاق التذكرة').setStyle(ButtonStyle.Danger)
    );

    await message.channel.send({ embeds: [embed], components: [row] });
  }
};

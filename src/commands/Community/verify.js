const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports =  {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('**TR**Bu komut ile sunucunun geri kalanına erişebileceksiniz. **EN**With this command you will be able to access the rest of the server'),
    async execute(interaction, client) {
      const member = interaction.member;

      const embed = new EmbedBuilder()
      .setColor("#be6666")
      .setDescription("Samael")

      member.roles.add("882999228471840809")

        await interaction.reply({ embeds:[embed] });
    }
}

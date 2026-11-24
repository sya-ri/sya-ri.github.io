private fun UiScope.playerRow(player: ReadmePlayer) {
    Row(
        modifier = Modifier
                .background(ArgbColor(0xFF4A4A4A.toInt()))
                .padding(6).fillMaxWidth(),
        spacing = 8,
        verticalAlignment = VerticalAlignment.Center, ) {
        PlayerHead(player.skin, PlayerHeadScale(3))
        Column( modifier = Modifier.weight(1f), spacing = 4, ) {
            Text(player.name)
            Text(player.role)
        }
        Button("Invite", width = 60)
    }
}

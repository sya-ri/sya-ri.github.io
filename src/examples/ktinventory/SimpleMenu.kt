class SimpleMenu(
    context: KtInventoryPluginContext,
) : KtInventory(context, 1) {
    override fun title() = "Teleport"

    init {
        button(3, ItemStack(Material.RED_BED)) { click ->
            val player = click.player as? Player ?: return@button
            player.respawnLocation?.let(player::teleport)
        }
        button(5, ItemStack(Material.COMPASS)) { click ->
            click.player.teleport(click.player.world.spawnLocation)
        }
    }
}

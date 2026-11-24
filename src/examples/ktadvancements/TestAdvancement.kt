enum class TestAdvancement(
    override val parent: TestAdvancement?,
    override val requirement: Int,
    icon: Material,
    description: String,
) : KtAdvancement<TestAdvancement> {
    Root(null, 1, Material.GRASS_BLOCK, "Game-test root"),
    Progress(Root, 10, Material.STONE, "Complete ten steps"),
    ;

    override val display = Display(ordinal * 1.5f, 0f, ItemStack(icon), name, description)
    override val id get() = NamespacedKey("ktadvancements_test", name.lowercase())
    override val visibility = KtAdvancement.Visibility.Always
    override val defaultGranted get() = parent == null
}

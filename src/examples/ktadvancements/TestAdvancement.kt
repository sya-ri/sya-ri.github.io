enum class TestAdvancement(
    override val parent: TestAdvancement?,
    override val display: Display,
    override val requirement: Int = 1,
) : KtAdvancement<TestAdvancement> {
    Root(null, Display(0f, 0f, ItemStack(Material.GRASS_BLOCK),
        "Game test", "Game-test root", background = NamespacedKey.minecraft(
            "textures/gui/advancements/backgrounds/adventure.png"
        ), showToast = false)),
    Progress(Root, Display(1.5f, 0f, ItemStack(Material.STONE),
        "Progress", "Complete ten steps"), requirement = 10);

    override val id get() = NamespacedKey("ktadvancements_test", name.lowercase())
    override val visibility = KtAdvancement.Visibility.Always
    override val defaultGranted get() = parent == null
}

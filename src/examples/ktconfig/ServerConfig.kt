@KtConfig(hasDefault = true)
data class ServerConfig(
    val serverName: String = "My Server",
    val maxPlayers: Int = 100,
)

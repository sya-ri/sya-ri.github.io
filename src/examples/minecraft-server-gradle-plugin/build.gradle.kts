val installPlugin = tasks.register<Copy>("installPlugin") {
    from(tasks.named<Jar>("jar").flatMap { it.archiveFile })
    into(layout.buildDirectory.dir("MinecraftServer/plugins"))
}

tasks.register<LaunchMinecraftServerTask>("testPlugin") {
    dependsOn(installPlugin)
    jarUrl.set(JarUrl.Paper("1.21.11"))
    agreeEula.set(true)
}

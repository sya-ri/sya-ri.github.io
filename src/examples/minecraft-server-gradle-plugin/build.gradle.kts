val pluginJar = tasks.named<Jar>("jar")
task<LaunchMinecraftServerTask>("testPlugin") {
    dependsOn("build")
    doFirst {
        copy {
            from(pluginJar.get().archiveFile)
            into(layout.buildDirectory.dir("MinecraftServer/plugins"))
        }
    }
    jarUrl.set(JarUrl.Paper("1.19.2"))
    agreeEula.set(true)
}

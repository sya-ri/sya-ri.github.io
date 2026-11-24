// git clone https://github.com/sya-ri/KGit.git
val git = KGit.cloneRepository {
    setURI("https://github.com/sya-ri/KGit.git")
    setDirectory(File("KGit"))
}
git.close()

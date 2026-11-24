// git clone https://github.com/sya-ri/KGit.git
KGit
    .cloneRepository {
        setURI("https://github.com/sya-ri/KGit.git")
        setDirectory(File("KGit"))
    }.close()

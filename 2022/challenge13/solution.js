function getFilesToBackup(lastBackup, changes) {
    let files = changes.filter(item => item[1] > lastBackup)
    return [...(new Set(files.map(item => item[0])))].sort((a, b) => a-b)
}

module.exports = getFilesToBackup

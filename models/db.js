const fs = require('fs/promises')
const { join } = require ('path')

class storageAdapter {
    constructor (file) {
        this.file = file
    }

    async read () {
        const result = await fs.readFile(join(__dirname, this.file), 'utf-8')
        return JSON.parse(result)
    }

    async write (data) {
        await fs.writeFile(join(__dirname, this.file), JSON.stringify(data, null, 2))
    }
}

module.exports = storageAdapter
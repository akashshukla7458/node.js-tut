
const { readFile, writeFile } = require('fs').promises
const start = async () => {
    try {
        const first = await readFile('./contents/first.txt', 'utf-8')
        const second = await readFile('./contents/second.txt', 'utf-8')
        await writeFile(
            './contents/result-mind-grenade.txt',
            `this is awesome :${first} ${second}`,
            { flag: 'a' }

        )
        console.log(first, second)
    }
    catch (error) {
        console.log(error)
    }
}


const { getData } = require('./service');

const SEARCH_BY_DATE = '2024-03-12'
const SEARCH_BY_FILENAME = '.pdf'

let sum_arr = []

const selector = function (item, time_str, filename_str) {
    if (time_str.startsWith(SEARCH_BY_DATE) && filename_str.includes(SEARCH_BY_FILENAME)) {
        sum_arr.push(item)
    }
}

getData(null, selector).then(() => {
    sum_arr.sort((a, b) => new Date(a.lastModified) - new Date(b.lastModified))
    sum_arr.forEach(item => {
        console.log(`🌸 ${new Date(item.lastModified).toLocaleString()} 🌸 ${item.name} 🌸`)
        console.log(item)
    })
})

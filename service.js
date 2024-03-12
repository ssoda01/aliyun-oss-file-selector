const { client } = require('./connect')


const getData = async (nextMaker, selector) => {
    const default_config = {
        'max-keys': 1000,
        'X-OSS-Process': 'meta',
    }
    if (nextMaker) {
        config = {
            ...default_config,
            'marker': nextMaker
        }
    }
    else {
        config = { ...default_config }
    }
    await client.list(config).then(e => {
        let nextMaker = e.nextMarker;
        e.objects.map(item => {
            let time_str = item.lastModified
            let filename_str = item.name
            if (typeof selector === 'function') selector(item, time_str, filename_str)
        })
        if (nextMaker) {
            getData(nextMaker)
        }
    })
}
module.exports = { getData }
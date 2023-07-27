const db = require('../../data/db-config')

const getall = () => {
    return db('main')
}

const getBy = (info) => {
    return db('main').where(info).first()
}

const add = async (data) => {
    const [id] = await getall().insert(data)
    const newData = await getBy({id: id})

    return newData

}

const del = async (id) => {
    await getBy({id: id}).del()
    return getall()
}

module.exports = {
    getall,
    getBy,
    add,
    del
}
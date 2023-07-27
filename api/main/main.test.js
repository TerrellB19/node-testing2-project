
const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')
const Data = require('./main_model')

const data1 = {
    info: "Value4",
    someNumber: 20
}
const data2 = {
    info: "Value5",
    someNumber: 25
}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    
})

beforeEach(async () => {
    await db('main').truncate()
})

afterAll(async () => {
     await db.destroy()
})


it('correct env var', () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe("Main model functions", () => {
    describe('can create main data', () => {
        it('can add info and someNumber to the db', async () => {
            let information;
            await Data.add(data1)
            information = await db('main')
            expect(information).toHaveLength(1)
        })
        it('can add multiple pieces of info and someNumber to the db', async () => {
            let information;
            await Data.add(data1)
            await Data.add(data2)
            information = await db('main')
            expect(information).toHaveLength(2)
        })
        it('can delete  info and someNumber from the db', async () => {
            let information;
            await Data.add(data1)
            await Data.del(1)
            information = await db('main')
            expect(information).toHaveLength(0)
        })
        it('can delete multiple pieces of info and someNumber from the db', async () => {
            let information;
            await Data.add(data1)
            await Data.add(data2)
            await Data.del(1)
            await Data.del(2)
            information = await db('main')
            expect(information).toHaveLength(0)
        })
        it('can get info value by id', async () => {
            let information;
            await Data.add(data1)
            await Data.add(data2)
            information = await Data.getBy({id: 1})
            expect(information.info).toBe('Value4')
        })
        it('can get someNumber value by id', async () => {
            let information;
            await Data.add(data1)
            await Data.add(data2)
            information = await Data.getBy({id: 2})
            expect(information.someNumber).toBe(25)
        })
    })
    describe("server functions work", () => {
        it.todo('server creates data')
        it.todo('server deletes data')
        it.todo('server returns all data')
        it.todo('server returns specific data')
    })
})




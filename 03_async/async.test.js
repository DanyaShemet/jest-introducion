const axios = require("axios");
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {

    test('should return value async', async () => {
        let data = 'some data'
        const result = await Ajax.echo(data)
        expect(result).toBe(data)
    })

    test('should return value with promise',() => {
        let data = 'some data'
        return Ajax.echo(data).then(d => {
            expect(d).toBe(data)
        })
    })

    test('should catch error with promise',() => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('should catch error with async',async () => {
        try{
            await Ajax.echo()
        }catch (e){
            expect(e.message).toBe('error')
        }
    })

})


describe('Ajax get', () => {
    let response
    let todos
    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]
        response = {
            data: {
                todos
            }
        }
    })
    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})
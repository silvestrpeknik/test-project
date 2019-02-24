import {hello, Hello} from './hello'

describe('hello test', ()=>{
    it('should throw error if message is not present', ()=>{

        const wrongInput = {wrongMessage: 'cosik'}

        expect(()=>hello(wrongInput)).toThrow()
    })

    it('should return false when message is empty', ()=>{
        expect(hello({
            message: ''
        })).toBeFalsy()

        expect(hello({
            message: undefined
        })).toBeFalsy()

        expect(hello({
            message: null
        })).toBeFalsy()
    })

    it('should return true when message is hello', ()=>{
        expect(hello({
            message: 'hello'
        })).toBeTruthy()
    })

    it('should return true when message is HELLO', ()=>{
        expect(hello({
            message: 'HELLO'
        })).toBeTruthy()
    })

    it('should return true when message is " Hello "', ()=>{
        expect(hello({
            message: ' hello '
        })).toBeTruthy()
    })

    it('should return false when message is not hello', ()=>{
        expect(hello({
            message: 'Ahoj jak se mas co delas'
        })).toBeFalsy()

    })
})
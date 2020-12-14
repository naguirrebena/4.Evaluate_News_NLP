import { checkURL } from '../src/client/js/urlChecker'

describe("URL validate function", () => {
    test("reject URL with space", () => {
        const input = 'https://uda city.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with missing protocol", () => {
        const input = 'udacity.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with misspelled protocol", () => {
        const input = 'htps://udacity.com'
        expect(checkURL(input)).toBe(false)
    })
    test("reject URL with protocol not at start", () => {
        const input = 'udacity.http://com'
        expect(checkURL(input)).toBe(false)
    })
    test("accept valid URL", () => {
        const input = 'https://udacity.com'
        expect(checkURL(input)).toBe(true)
    })

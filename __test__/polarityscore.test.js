
import { polarityScore } from "../src/client/js/formHandler"

describe("Test different polarities", () => {
    test("should return \"Strongly Positive\"", () => {
        expect(polarityScore("P+")).toBe("Strongly Positive")
    })
    test("should return \"Positive\"", () => {
        expect(polarityScore("P")).toBe("Positive")
    })
    test("should return \"Neutral\"", () => {
        expect(polarityScore("NEU")).toBe("Neutral")
    })
    test("should return \"Negative\"", () => {
        expect(polarityScore("N")).toBe("Negative")
    })
    test("should return \"Strongly Negative\"", () => {
        expect(polarityScore("N+")).toBe("Strongly Negative")
    })
    test("should return \"No sentiment\"", () => {
        expect(polarityScore("NONE")).toBe("No sentiment")
    })
});
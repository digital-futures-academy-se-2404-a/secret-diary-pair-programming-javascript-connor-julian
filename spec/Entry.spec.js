import Entry from "../src/Entry.js";

let newEntry, newDiary, expected;

describe("Entry Tests:", () => {

    beforeEach(() => {
        newDiary = {};
        newEntry = new Entry();
        });

    afterEach(() => {
        newDiary = undefined;
        newEntry = undefined;
        expected = undefined;
    });

    describe("User Story 2 Tests:", () => {
        
        it("Test that an @Entry object has a date variable of type Date", () => {
            // Arrange
            // let testDate = new Date("2024-04-23");
            // expected = new Date();
            // Act
            
            // Assert
            expect(newEntry.getDate()).toBeInstanceOf(Date);
        });
               
    });

});
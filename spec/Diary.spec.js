import Diary from "../src/Diary.js";

let newEntry, newDiary, expected;

describe("Diary Tests:", () => {

    beforeEach(() => {
            newDiary = new Diary();
            newEntry = {};
        });

        afterEach(() => {
            newDiary = undefined;
            newEntry = undefined;
            expected = undefined;
        });
    
    describe("User Story 1 Tests:", () => {

        it("Test that a new Diary has an allEntries property that is initialised to 0", () => {
            // Arrange
            // Act
            // Assert
            expect(newDiary.getAllEntries().length).toBe(0);
            
        });
    
        it("Test that the addEntry() method increases the array allEntries length by 1", () => {
            // Arrange
            expected = newDiary.getAllEntries().length + 1;
            // const newEntry = jasmine.createSpyObj("Test Entry", {getName : "Test",});
            // Act
            newDiary.addEntry(newEntry)
            // Assert
            expect(newDiary.getAllEntries().length).toBe(expected);
        });

        it("Diary contains the new entry added to it", () => {
            // Act
            newDiary.addEntry(newEntry);
            // Assert
            //expect(newDiary.getAllEntries()[0]).toBe(newEntry);
            expect(newDiary.getAllEntries()).toContain(newEntry);
        });

        it("Test that we can add to a Diary with existing items", () => {
            // Arrange
            let newEntry2 = {};
            newDiary.addEntry(newEntry);
            expected = newDiary.getAllEntries().length + 1;
            // Act
            newDiary.addEntry(newEntry2);

            // Assert
            expect(newDiary.getAllEntries().length).toBe(expected);
        });

        it("Test that Null items can't be added to diary", () => {
            // Arrange
            let fakeEntry = null;
            newDiary.addEntry(newEntry);
            // Act
            newDiary.addEntry(fakeEntry);
            // Assert
            expect(newDiary.getAllEntries()).not.toContain(fakeEntry);
        });

        describe("User Story 2 Tests:", () => {
            it("Get Entry doesn't return is Entry corresponding to date isn't in diary", () => {
                // Arrange
                let date = new Date("1969-04-20");
                let date2 = new Date("2069-04-20");
                const sneakyEntry = jasmine.createSpyObj("fake", {getDate : date2,});
                newDiary.addEntry(sneakyEntry);
                //expect(newDiary.getAllEntries()[0]).toBe(newEntry);
                // Act
                expect(newDiary.getEntry(date)).toBe(undefined);
                // Assert  
            });            

        });
});

});
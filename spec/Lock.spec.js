import Lock from "../src/Lock.js";

let newLock, expected;

describe("Lock Tests:", () => {
  beforeEach(() => {
    newLock = new Lock();
  });

  afterEach(() => {
    newLock = undefined;
    expected = undefined;
  });

  describe("User Story 1 Tests:", () => {
    it("Test that can lock the lock", () => {
        // Act
        newLock.lock();
        // Assert
        expect(newLock.getIsLocked()).toBe(true);
    });
      
    it("Test that lock() changes an unlocked lock to locked", () => {
        // Arrange
        expected = (newLock.getIsLocked());
        // Act
        newLock.lock()
        // Assert
        expect(newLock.getIsLocked).not.toBe(expected);
    });
      
  })
});

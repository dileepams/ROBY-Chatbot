const { getTime } = require('./getTimeHelper');

describe('getTime', () => {
  it('should return time in HH:MM format with leading zeros for single digit hours and minutes', () => {
    // Mock Date to return a specific time: 09:05
    const mockDate = new Date(2023, 10, 21, 9, 5, 0); // Month is 0-indexed (10 is November)
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    expect(getTime()).toBe('09:05');

    // Restore original Date object
    global.Date.mockRestore();
  });

  it('should return time in HH:MM format for double digit hours and minutes', () => {
    // Mock Date to return a specific time: 15:30
    const mockDate = new Date(2023, 10, 21, 15, 30, 0);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    expect(getTime()).toBe('15:30');

    // Restore original Date object
    global.Date.mockRestore();
  });

  it('should return time in HH:MM format with leading zero for single digit hours and double digit minutes', () => {
    // Mock Date to return a specific time: 08:25
    const mockDate = new Date(2023, 10, 21, 8, 25, 0);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    expect(getTime()).toBe('08:25');

    // Restore original Date object
    global.Date.mockRestore();
  });

  it('should return time in HH:MM format with leading zero for single digit minutes and double digit hours', () => {
    // Mock Date to return a specific time: 14:07
    const mockDate = new Date(2023, 10, 21, 14, 7, 0);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    expect(getTime()).toBe('14:07');

    // Restore original Date object
    global.Date.mockRestore();
  });
});

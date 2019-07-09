const  caller= require('../main');

it ('should return null when start greater end', () => {
    expect( caller.createMultiplyTable(5, 3,caller.isStartLessThanEnd,caller.isInputInRange)).toBe(null);
});
it ('should return string "out of range" when start less than 1 and end greater than 1000', () => {
    expect( caller.createMultiplyTable(-1, 1001,caller.isStartLessThanEnd,caller.isInputInRange)).toBe("out of range");
});
it ('should return mutiplytable when start and end is reasonable', () => {
    expect( caller.createMultiplyTable(2,4,caller.isStartLessThanEnd,caller.isInputInRange)).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n");
});



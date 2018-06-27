// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier
  };
};

const fareDoubler = createFareMultiplier(2);
fareDoubler(5);

const fareTripler = createFareMultiplier(3);
fareDoubler(5);

//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

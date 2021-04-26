// FIRST PROBLEM
// FUNCTION FOR CONVERT KILOMETER TO METER 
function kilometerToMeter(kilometer) {

    // CONDITION FOR CHECKING VALID INPUT NUMBER AND CALCULATION
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;       
    } else {
        return "Please enter a valid number";
    }

}

// GETTING INPUT FOR FUNCTION  
var meterResult = kilometerToMeter(15);

// SHOW THE RESULT
console.log(meterResult);





// SECOND PROBLEM
// FUNCTION FOR CALCULATE TOTAL AMOUNT 
function budgetCalculator(watchNumber, phoneNumber, laptopNumber) {

    // CONDITION FOR CHECKING VALID INPUT NUMBER AND CALCULATION
    if ( watchNumber > 0 && phoneNumber > 0 && laptopNumber > 0) {
        var watchPrice = watchNumber * 50;
        var phonePrice = phoneNumber * 100;
        var laptopPrice =  laptopNumber * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    } else {
        return "Please enter a valid number";
    }
}

// GETTING INPUT FOR FUNCTION  
var totalAmount = budgetCalculator(15, 10, 5);

// SHOW THE RESULT
console.log(totalAmount); 





// THIRD PROBLEM
// FUNCTION FOR CALCULATE HOTEL COST
function hotelCost(days) {
    var cost = 0;

    // CONDITION FOR CHECKING VALID NUMBER AND CALCULATION
    if (days > 0 && days <=10 ) {
        cost = days * 100;
    } else if (days > 0 && days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var SecondTenDays = remainingDays * 80;
        cost = firstTenDays + SecondTenDays;
    } else if (days > 0 && days > 20) {
        var firstTenDays = 10 * 100;
        var SecondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var restOfTheDays = remainingDays * 50;
        cost = firstTenDays + SecondTenDays + restOfTheDays;
    } else  {
        return "Please enter a valid number";
    }
    return cost;
}

// GETTING INPUT FOR FUNCTION
var totalCost = hotelCost(20);

// SHOW THE RESULT
console.log(totalCost);





// FOURTH PROBLEM
// FUNCTION FOR FINDING LARGEST ARRAY ELEMENT
function megaFriend(friends) {
    var largestName = friends[0];

    // LOOP FOR CHECKING ARRAY LENGTH
    for (var i = 0; i < friends.length; i++) {
        var name = friends[i];

        // CONDITION FOR CHECKING LARGEST ARRAY
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
}

// GETTING ARRAY FOR FUNCTION
var friendList = megaFriend(["Arafat Redwan", "Amin Ruhul", "MD. Sazzatul Zaman", "Tazrian Yeasfi", "Tayab Pabel"]);

// SHOW THE RESULT
console.log(friendList);
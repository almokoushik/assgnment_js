
function kilometerToMeter(distanceKilometer) {
    //Checking Distance is number and  Bigger Than or Equal 0
    if (typeof distanceKilometer == "number" && distanceKilometer >= 0) {

        if (distanceKilometer > 0) {
            return distanceKilometer * 1000
        }

        else {
            return 0
        }
    }
    //Distance Is not Number or Less Than 0
    else {
        console.log("Wrong Input")
        return "Try Again..."
    }
}


function budgeCalculator(watch, phone, laptop) {
    var sum = 0
    //Checking All The variable are number 
    if (typeof watch == "number" && typeof phone == "number" && typeof laptop == "number") {
        //Checking all Numbers are integer or Not
        if (Number.isInteger(watch) && Number.isInteger(phone) && Number.isInteger(laptop)) {
            //Checking all The Variable are Bigger Than 0
            if (watch >= 0 && phone >= 0 && laptop >= 0) {
                return watch * 50 + phone * 100 + laptop * 500
            }
            //When Numbers are not Bigger Than 0
            else {
                console.log("Cant Buy Neg Number ")
                return "Try Again..."
            }

        }
        else {
            console.log("Fraction Not possible")
            return "Try Again..."
        }

    }
    //They are not in Number Type
    else {
        console.log("Wrong Input");
        return "Try Again...";

    }
}

function hotelCost(totalDays) {
    var sum = 0;
    //Checking Staying Day is  in NUmber Type and Bigger Than 0 and IS it integer
    if (totalDays > 0 && typeof totalDays == "number" && Number.isInteger(totalDays)) {
        for (var i = 1; i <= totalDays; i++) {
            if (i >= 1 && i <= 10) {
                //Days are between 1 to 10 cost is 100
                sum += 100
            }
            //Days are between 11 to 20 cost is 80
            else if (i >= 11 && i <= 20) {
                sum += 80
            }
            //Days are avove 20 cost  is 50
            else {
                sum += 50
            }
        }
        return sum
    }
    //Maybe day is not in number or Bigger Than 0
    else {
        console.log("Wrong Input")
        return "Try Again......"
    }
}

function megaFriend(friendsName) {
    //Checking Array is empty or not
    if (friendsName.length > 0) {
        bigName = friendsName[0]
        //Searching Big Name
        for (var i = 0; i < friendsName.length; i++) {
            //Checking names string or Not
            if (typeof friendsName[i] == "string") {
                if (friendsName[i].length > bigName.length) {
                    bigName = friendsName[i];
                }
            }
            else {
                console.log("Names Support Only String")
                return "Try Again..."
                break;
            }

        }
        return bigName
    }
    //Maybe array empty
    else {
        console.log("Try Again")
        return "Array Can't Empty..."
    }
}
console.log(kilometerToMeter(11))
console.log("OK")
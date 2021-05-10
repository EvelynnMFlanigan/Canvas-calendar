let date_var = new Date();
window.viewedMonth = 0;
window.viewedYear = date_var.getFullYear();



function monthConversion(month){
    let monthName = ""
    let finalDay;
    switch(month){
        case month =  0:
            monthName = "January"
            finalDay = 29
            break;
        case month =  1:
            monthName = "February"
            if(viewedYear%4 == 0){
                finalDay = 29
                break;
            }else{
                finalDay = 28
            }
            break;
        case month =  2:
            monthName = "March"
            finalDay = 31
            break;
        case month =  3:
            monthName = "April"
            finalDay = 30
            break;
        case month =  4:
            monthName = "May"
            finalDay = 31
            break;
        case month =  5:
            monthName = "June"
            finalDay = 30
            break;
        case month =  6:
            monthName = "July"
            finalDay = 31
            break;
        case month =  7:
            monthName = "August"
            finalDay = 31
            break;
        case month =  8:
            monthName = "September"
            finalDay = 30
            break;
        case month =  9:
            monthName = "October"
            finalDay = 31
            break;
        case month =  10:
            monthName = "November"
            finalDay = 30
            break;
        case month =  11:
            monthName = "December"
            finalDay = 31;
            break;
    }
    return monthName;
}
function finalDay(month){

    let finalDay;
    switch(month){
        case month =  0:
            finalDay = 29
            break;
        case month =  1:
            if(viewedYear%4 == 0){
                finalDay = 29
                break;
            }else{
                finalDay = 28
            }
            break;
        case month =  2:
            finalDay = 31
            break;
        case month =  3:
            finalDay = 30
            break;
        case month =  4:
            finalDay = 31
            break;
        case month =  5:
            finalDay = 30
            break;
        case month =  6:
            finalDay = 31
            break;
        case month =  7:
            finalDay = 31
            break;
        case month =  8:
            finalDay = 30
            break;
        case month =  9:
            finalDay = 31
            break;
        case month =  10:
            finalDay = 30
            break;
        case month =  11:
            finalDay = 31;
            break;
    }
    return finalDay;
}


//initializes the calendar to the correct month and year.
window.onload = function(){
    viewedMonth = date_var.getMonth()
    let zD = new Date(monthConversion(date_var.getMonth()) + ' 1,' + viewedYear.toString());
    let zeroDay = zD.getDay();
    let dayCount = 1;

document.getElementById("monthText").innerText = monthConversion(date_var.getMonth());
document.getElementById("yearText").innerText = date_var.getFullYear().toString();

var daysList = document.getElementById("dayHolder").getElementsByTagName("div")
for(var i = 0; i <  daysList.length; i++){
    let testDay = new Date(monthConversion(zD.getMonth()) + " " + dayCount.toString() + ", " + viewedYear.toString())
    if(isNaN(testDay.getDay()) ) {
        break;
    }

    if(i < zeroDay){
    }else {
        daysList[i].innerHTML = dayCount.toString()
        dayCount++
    }
    }

};


// moves the calendar back a month on click of "prev" arrow
document.getElementById("prev").onclick = function(){
    if(viewedMonth == 0){
        viewedMonth = 11;
        viewedYear = viewedYear -1
        document.getElementById("yearText").innerText = viewedYear;
    }else{
    viewedMonth = viewedMonth -1;}

    document.getElementById("monthText").innerText = monthConversion(viewedMonth);
    let nextMonth = new Date(monthConversion(viewedMonth) + ' 1,' + viewedYear.toString());
    let zeroDay = nextMonth.getDay();
    let dayCount = 1;
    var daysList = document.getElementById("dayHolder").getElementsByTagName("div")

    for (var i = 0; i < daysList.length; i++) {
        if (dayCount == finalDay(viewedMonth) + 1) {
            for (var x = i; x < daysList.length; x++) {
                daysList[x].innerHTML = " ";
            }
            return;
        }

        if (i < zeroDay) {
            daysList[i].innerHTML = " "
        } else {
            daysList[i].innerHTML = dayCount.toString()
            dayCount++
        }

}
}
//Moves the calendar forward by a month on click of "next" arrow
document.getElementById("next").onclick = function() {
    if (viewedMonth == 11) {
        viewedMonth = 0;
        viewedYear = viewedYear + 1
        document.getElementById("yearText").innerText = viewedYear;
    } else {
        viewedMonth = viewedMonth + 1;
    }
    document.getElementById("monthText").innerText = monthConversion(viewedMonth);
    let nextMonth = new Date(monthConversion(viewedMonth) + ' 1,' + viewedYear.toString());
    let zeroDay = nextMonth.getDay();
    let dayCount = 1;
    var daysList = document.getElementById("dayHolder").getElementsByTagName("div")

    for (var i = 0; i < daysList.length; i++) {
        if (dayCount == finalDay(viewedMonth) + 1) {
            for (var x = i; x < daysList.length; x++) {
                daysList[x].innerHTML = " ";
            }
            return;
        }

        if (i < zeroDay) {
            daysList[i].innerHTML = " "
        } else {
            daysList[i].innerHTML = dayCount.toString()
            dayCount++
        }
    }
}

document.getElementsByClassName("inactive").onclick = function(){
window.open('addAssignment.html', '_blank','top=500,left=200,frame=false,nodeIntegration=no')

}


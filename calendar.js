let date_var = new Date();
window.viewedMonth = 0;
window.viewedYear = date_var.getFullYear();


function monthConversion(month){
    let monthName = ""
    switch(month){
        case month =  0:
            monthName = "January"
            break;
        case month =  1:
            monthName = "February"
            break;
        case month =  2:
            monthName = "March"
            break;
        case month =  3:
            monthName = "April"
            break;
        case month =  4:
            monthName = "May"
            break;
        case month =  5:
            monthName = "June"
            break;
        case month =  6:
            monthName = "July"
            break;
        case month =  7:
            monthName = "August"
            break;
        case month =  8:
            monthName = "September"
            break;
        case month =  9:
            monthName = "October"
            break;
        case month =  10:
            monthName = "November"
            break;
        case month =  11:
            monthName = "December"
            break;
    }
    return monthName;
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


// moves the calendar back a month
document.getElementById("prev").onclick = function(){
    if(viewedMonth == 0){
        viewedMonth = 11;
        viewedYear = viewedYear -1
        document.getElementById("yearText").innerText = viewedYear;
    }else{
    viewedMonth = viewedMonth -1;}

    document.getElementById("monthText").innerText = monthConversion(viewedMonth);
}
document.getElementById("next").onclick = function(){
    if(viewedMonth == 11){
        viewedMonth = 0;
        viewedYear = viewedYear +1
        document.getElementById("yearText").innerText = viewedYear;
    }else{
        viewedMonth = viewedMonth +1;}

    document.getElementById("monthText").innerText = monthConversion(viewedMonth);
}

document.getElementsByClassName("inactive").onclick = function(){
    window.open('')
}

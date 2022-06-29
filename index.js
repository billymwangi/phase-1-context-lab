/* Your Code Here */
function createEmployeeRecord(employeeArray){
    return{
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


const createEmployeeRecords = employeeRecordsArray => {
    return employeeRecordsArray.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function(dateTimeStamp){
    const [date, hour] = dateTimeStamp.split (' ')


    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(dateTimeStamp){
    const [date, hour] = dateTimeStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate( hoursWorked){
    const clockInTime  = this.timeInEvents.find((event) =>{
        return event.date === hoursWorked
    })

    const clockOutTime = this.timeOutEvents.find((event) => {
        return event.date === hoursWorked
    })

    return (clockOutTime.hour - clockInTime.hour) / 100
}

function wagesEarnedOnDate(workedDates){
     const employeeWage = hoursWorkedOnDate.call(this, workedDates)
     *this.payPerHour
     return parseFloat(employeeWage.toString())
}

//

function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(function(record){
      return record.firstName === firstName
    })
  }

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
}
function allWagesFor(){
    const eligibleDates = this.timeInEvents.map(function(event){
        return event.date
    })

    const payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (event) {
//         return event.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }


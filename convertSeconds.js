
// write a function that will take a number of seconds, and 
// convert it into hours, minutes and seconds. 
// convertSeconds(60)
// "0 hours, 1 minutes, 0 seconds"
// 
// for extra credit handle printing s's and so on, like 'minutes' vs 'minute'. 

 
// 8000
// can add months if they're 30 days. print approximate months, days, hours and seconds 
function convertSeconds(givenSeconds) {
    let leftOverSeconds = givenSeconds % 60; // 20 leftover seconds
    let minutes = Math.floor(givenSeconds / 60); // 133 (is how many minutes there are)
    let leftOverMinutes = minutes % 60
    let hours = Math.floor(minutes / 60); 
    let days = Math.floor(hours / 24);
    let leftOverHours = hours % 24
    let leftOverDays = days % 30
    let months = Math.floor(days / 30);

    return (`${months} months, ` + `${leftOverDays} days, ` + `${leftOverHours} hours, ` + `${leftOverMinutes} minutes, ` + `${leftOverSeconds} seconds`)
}



console.log("testing 800000: " + convertSeconds(80000000000));
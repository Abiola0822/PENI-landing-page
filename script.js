// reference to the timer html element
const timerEl = document.getElementById('timer')

// START THE COUNTDOWN
// edit launch time by changing the date values below in the order (year, month, day) with non leading-zero digits, i,e use 1, not 01
// please note that months are zero-indexed, meaning January is 0 and not 1 while June is 5 and not 6
const launchDate = new Date(2022, 6, 11) // you can change this

const countdownProcess = countdown(
  (ts) => {
    timerEl.innerHTML = ts.toHTML('strong')
  },
  launchDate,
  countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
).toString()

// STOP THE COUNTDOWN AFTER THE LAUNCHDATE
if (new Date().getTime() > launchDate.getTime()) {
  timerEl.innerHTML = '<strong>0 days, 0 hours, 0 minutes, 0 seconds</strong>'
  window.clearInterval(countdownProcess)
}

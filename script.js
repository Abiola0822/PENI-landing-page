const timerEl = document.getElementById('timer')
const [daysEl, hoursEl, minutesEl, secondsEl, ...rest] = timerEl.children

// edit launch time by changing the date values below in the order (year, month, day) with non leading-zero digits, i,e use 1, not 01
const timespan = countdown(
  (ts) => {
    timerEl.innerHTML = ts.toHTML('strong')
  },
  new Date(2022, 7, 12),
  countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
).toString()

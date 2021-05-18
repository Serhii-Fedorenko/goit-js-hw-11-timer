class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.refs = {
        days: document.querySelector(`[data-value="days"]`),
        hours: document.querySelector(`[data-value="hours"]`),
        mins: document.querySelector(`[data-value="mins"]`),
        secs: document.querySelector(`[data-value="secs"]`),
        timerFace: document.querySelector('#timer-1'),
      };
    }
}
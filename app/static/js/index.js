import '../scss/base.scss';
import '../scss/common.scss';
import '../scss/index.scss';
class Timeout {
    constructor(timenum, containner) {
      this.timenum = timenum;
      this.containner = containner;
    }
    countRun () {
      let timmer1 = setTimeout(function() {
        this.containner.html('倒计时：' + this.timenum);
        this.timenum--;
        // arguments.callee(this.timenum); // 第5版ES5 严格模式下已禁止使用
        this.countRun(this.timenum);
      }.bind(this), 1000);
      if (this.timenum <0) {
        clearTimeout(timmer1);
      }
    }
    timeRun () {
      let timmer = setTimeout(function() {
      let dd = this.formatTime(this.timenum, 'd'),
          hh = this.formatTime(this.timenum, 'h'),
          mm = this.formatTime(this.timenum, 'm'),
          ss = this.formatTime(this.timenum, 's');
          let timeStr = '还剩：' + dd + '日' + hh + '小时' + mm + '分' + ss + '秒';
          this.containner.html(timeStr);
          this.timenum--;
          this.timeRun(this.timenum);
      }.bind(this), 1000);
      if (this.timenum <0) {
        clearTimeout(timmer);
      }
    }
    formatTime (time, type) {
      let days = '';
      switch (type) {
        case 'd':
          days = time / 60 / 60 / 24;
          break;
        case 'h':
          days = time / 60 / 60 % 24;
          break;
        case 'm':
          days = time / 60 % 60;
          break;
        case 's':
          days = time % 60;
          break;
        default:
          days = '';
          break;
      }
      return this.fix(Math.floor(days), 2);
    }
    fix (num, length) {
      return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
    }
  }
  const mytime = $('#time');
  const mytime2 = $('#time2');
  const time1 = new Timeout(10, mytime);
  const time2 = new Timeout(20, mytime2);
  time1.countRun();
  time2.countRun();
  var time = [];
  var nowTime = Math.round(new Date() / 1000);
  $('.timeItem').each(function(){
    let $this = $(this);
    let timeData = $(this).attr('data-time');
        timeData = parseInt(timeData, 10);
    let remainingTime = timeData - nowTime;
    let _curIndex = $(this).index();
    if (remainingTime && remainingTime > 0) {
      time[_curIndex] = new Timeout(remainingTime, $this);
      time[_curIndex].timeRun();
    }
  })
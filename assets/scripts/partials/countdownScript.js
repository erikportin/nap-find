$(function(){var a=moment(),b=moment("11:30","HH:mm").day(6),c=b.diff(a,"milliseconds",!0),d=1e3;setInterval(function(){c=moment.duration(c-d,"milliseconds"),$(".m-countdown-timer").text(c.days()+":"+c.hours()+":"+c.minutes())},d)});
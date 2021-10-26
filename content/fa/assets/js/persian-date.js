var times = document.getElementsByTagName("time");
for (i = 0; i < times.length; i++) {
    let tim = times[i].getAttribute("datetime");
    const m = moment(tim);
    m.locale('fa');
    times[i].innerText = m.format('DD jMMMM YYYY');
};
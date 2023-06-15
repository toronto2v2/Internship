
const dates = new Date();

const intls = Intl.DateTimeFormat('ua-UA', {
    weekday:'long',
    day: '2-digit',
    month:'long',
    weekday:'short',
    hour:'numeric',
    minute: '2-digit'
});

console.log(intls.format(dates));
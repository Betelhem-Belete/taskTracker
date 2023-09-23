const currentDate = document.querySelector('.current-date');
const currentTime = document.querySelector('.current-time');
const date = new Date();

//Display Date
const getDate = (today) => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  const day = days[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

currentDate.innerHTML = getDate(date);

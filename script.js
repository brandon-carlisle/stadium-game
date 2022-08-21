const teams = [
  {
    teamName: 'AFC Bournemouth',
    teamColor: '#e62333',
    stadiumName: 'Vitality Stadium',
    stadiumCapacity: 11307,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Arsenal',
    teamColor: '#fe0002',
    stadiumName: 'Emirates Stadium',
    stadiumCapacity: 60704,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Aston Villa',
    teamColor: '#480025',
    stadiumName: 'Villa Park',
    stadiumCapacity: 42657,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Brentford',
    teamColor: '#c61d23',
    stadiumName: 'Gtech Community Stadium',
    stadiumCapacity: 17250,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Brighton and Hove Albion',
    teamColor: '#0054a6',
    stadiumName: 'Amex Stadium',
    stadiumCapacity: 31780,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Chelsea',
    teamColor: '#0a4595',
    stadiumName: 'Stamford Bridge',
    stadiumCapacity: 40343,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Crystal Palace',
    teamColor: '#eb302e',
    stadiumName: 'Selhurst Park',
    stadiumCapacity: 25486,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Everton',
    teamColor: '#00369c',
    stadiumName: 'Goodison Park',
    stadiumCapacity: 39414,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Fulham',
    teamColor: '#f5f5f5',
    stadiumName: 'Craven Cottage',
    stadiumCapacity: 22384,
    fontColor: 'var(--rich-black-fogra-39)',
  },
  {
    teamName: 'Leeds United',
    teamColor: '#f5f5f5',
    stadiumName: 'Elland Road',
    stadiumCapacity: 37608,
    fontColor: 'var(--rich-black-fogra-39)',
  },
  {
    teamName: 'Leicester City',
    teamColor: '#273e8a',
    stadiumName: 'King Power Stadium',
    stadiumCapacity: 32262,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Liverpool',
    teamColor: '#e31b23',
    stadiumName: 'Anfield',
    stadiumCapacity: 53394,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Manchester City',
    teamColor: '#6caee0',
    stadiumName: 'Etihad Stadium',
    stadiumCapacity: 53400,
    fontColor: 'var(--rich-black-fogra-39)',
  },
  {
    teamName: 'Manchester United',
    teamColor: '#d81920',
    stadiumName: 'Old Trafford',
    stadiumCapacity: 74310,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Newcastle United',
    teamColor: '#383838',
    stadiumName: "St. James' Park",
    stadiumCapacity: 52305,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Nottingham Forest',
    teamColor: '#eb0024',
    stadiumName: 'The City Ground',
    stadiumCapacity: 30332,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Southampton',
    teamColor: '#d71920',
    stadiumName: "St. Mary's Stadium",
    stadiumCapacity: 32384,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Tottenham Hotspur',
    teamColor: '#f5f5f5',
    stadiumName: 'Tottenham Hotspur Stadium',
    stadiumCapacity: 62850,
    fontColor: 'var(--rich-black-fogra-39)',
  },
  {
    teamName: 'West Ham United',
    teamColor: '#7d2c3b',
    stadiumName: 'London Stadium',
    stadiumCapacity: 60000,
    fontColor: 'var(--platinum)',
  },
  {
    teamName: 'Wolverhampton Wanderers',
    teamColor: '#f9a01b',
    stadiumName: 'Molineux Stadium',
    stadiumCapacity: 32750,
    fontColor: 'var(--rich-black-fogra-39)',
  },
];

const header = document.querySelector('.header');
const app = document.querySelector('.app');
const scoreContainer = document.querySelector('.score__container');
const scoreEl = document.querySelector('.score__value');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const stadiumNameLeft = document.querySelector('.stadium__name--left');
const stadiumNameRight = document.querySelector('.stadium__name--right');
const clubNameLeft = document.querySelector('.club__name--left');
const clubNameRight = document.querySelector('.club__name--right');

const colorCorrect = 'var(--sheen-green)';
const colorIncorrect = 'var(--french-raspberry)';

let score = 0;

// const generateRandomNumber = () => Math.floor(Math.random() * 20);

const randomNumber = (max, min, except) => {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === except ? randomNumber(max, min, except) : num;
};

const getTwoTeams = function () {
  let team1Index = randomNumber(19, 0, -1);
  let team2Index = randomNumber(19, 0, team1Index);

  return [teams[team1Index], teams[team2Index]];
};

const checkIfHigher = function (t1, t2) {
  if (t1.stadiumCapacity >= t2.stadiumCapacity) {
    return true;
  } else {
    return false;
  }
};

let team1;
let team2;

const updateTeamsUI = function () {
  team1 = getTwoTeams()[0];
  team2 = getTwoTeams()[1];

  if (team1 !== team2) {
    left.style.backgroundColor = team1.teamColor;
    left.style.color = team1.fontColor;
    stadiumNameLeft.textContent = team1.stadiumName;
    clubNameLeft.textContent = team1.teamName;

    right.style.backgroundColor = team2.teamColor;
    right.style.color = team2.fontColor;
    stadiumNameRight.textContent = team2.stadiumName;
    clubNameRight.textContent = team2.teamName;
  }
};

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    // team1 = getTwoTeams()[0];
    // team2 = getTwoTeams()[1];
    updateTeamsUI();
  }
});

app.addEventListener('click', function (e) {
  if (e.target === left && checkIfHigher(team1, team2)) {
    console.log('correct');
    // scoreContainer.style.backgroundColor = colorCorrect;
    header.style.backgroundColor = colorCorrect;
    score++;
  } else if (e.target === left && checkIfHigher(team2, team1)) {
    console.log('incorrect');
    // scoreContainer.style.backgroundColor = colorIncorrect;
    header.style.backgroundColor = colorIncorrect;
  }

  if (e.target === right && checkIfHigher(team2, team1)) {
    console.log('correct');
    score++;
    // scoreContainer.style.backgroundColor = colorCorrect;
    header.style.backgroundColor = colorCorrect;
  } else if (e.target === right && checkIfHigher(team1, team2)) {
    console.log('incorrect');
    // scoreContainer.style.backgroundColor = colorIncorrect;
    header.style.backgroundColor = colorIncorrect;
  }
  updateTeamsUI();
  scoreEl.textContent = score;
});

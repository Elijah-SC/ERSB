// console.log(`this is going to be painful`)

let bank = 2000

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

function collectTeam1() {
  let team1content = ``
  players.forEach((team) => {
    if (team.teamNumber == 1) {
      team1content += team.emoji
    }
  })
  console.log(team1content)
  let ElmTeam1 = document.getElementById(`team1`)
  ElmTeam1.innerText = team1content;
}

function collectTeam2() {
  let team2content = ``
  players.forEach((team) => {
    if (team.teamNumber == 2) {
      team2content += team.emoji
    }
  })
  let ElmTeam2 = document.getElementById(`team2`)
  ElmTeam2.innerText = team2content;

}

function betTeam1(betAmount) {
  let team1score = 0
  let team2score = 0
  players.forEach((team) => {
    if (team.teamNumber == 1) {
      team1score += team.skill
      // return team1score
    }
  })
  console.log(`team 1 score is`, team1score)

  players.forEach((team) => {
    if (team.teamNumber == 2) {
      team2score += team.skill
      // return team2score
    }
  })
  console.log(`team 2 score is`, team2score)

  if (team1score > team2score) {
    bank += betAmount
  } else bank -= betAmount
  console.log(bank)
  drawBank()
  draftTeams()
}

function betTeam2(betAmount) {
  let team1score = 0
  let team2score = 0
  players.forEach((team) => {
    if (team.teamNumber == 1) {
      team1score += team.skill
      // return team1score
    }
  })
  console.log(`team 1 score is`, team1score)

  players.forEach((team) => {
    if (team.teamNumber == 2) {
      team2score += team.skill
      // return team2score
    }
  })
  console.log(`team 2 score is`, team2score)

  if (team2score > team1score) {
    bank += betAmount
  } else bank -= betAmount
  console.log(bank)
  drawBank()
  draftTeams()
}


function draftTeams() {
  // console.log(`Drafting Teams`)
  players.forEach((team) => {
    let randomDraft = Math.ceil(Math.random() * 2)
    team.teamNumber = randomDraft

    console.log(randomDraft)
  })
  collectTeam1()
  collectTeam2()
}

// function betTeam1(betAmount) {
//   console.log(`betting`, betAmount, `On Team 1`)

// }











function drawBank() {
  let ElmBank = document.getElementById(`bank`)
  ElmBank.innerText = bank.toString();
}


collectTeam1()
collectTeam2()
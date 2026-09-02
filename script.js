/// CONST ///
const raceDescriptions = {
  'Human': [
    ["Trustworthy","In a world where non-humans can’t be trusted, humans look more trustworthy. Humans have an inherent +1 to their Charisma, Seduction, and Persuasion checks against other humans."],
    ["Ingenuity","Humans are clever and often have brilliant solutions to difficult problems. Humans gain an inherent +1 to Deduction."],
    ["Blindly Stubborn","Part of the human race’s greatest strength is its willingness to charge forward endlessly, even into truly life-threatening situations. A human can summon up their courage and reroll a failed Resist Coercion or Courage roll 3 times per game session. They take the higher of the two rolls, but if they still fail they cannot re-use the ability to roll again."]
  ],

  'Elf': [
    ["Artistic","Elves have a natural eye for beauty and a talent for artistic endeavours. Elves gain an inherent +1 to their Fine Arts skill."],
    ["Marksman", "Years of tradition and practice make elves some of the best archers in the world. Elves gain an inherent +2 to their Archery skill and can draw and string a bow without taking an action."],
    ["Natural Attunement","Elves have a deep magical bond with nature itself. Elves do not disturb animals, meaning that any beast they encounter is considered friendly and will not attack unless provoked. Elves also automatically find any plant substance rated as commonly availabile (or lower) that they are seeking, as long as the substance would occur naturally in the surrounding terrain."]
  ],

  'Witcher': [
    ["Enhanced Senses","Due to their heightened senses, witchers take no penalties from areas of dim light and gain an inherent +1 to their Awareness skill, as well as the ability to track things by scent alone."],
    ["Resilient Mutation","After all of the mutations required to become a witcher, they are immune to diseases and are able to use mutagens."],
    ["Dulled Emotions","Thanks to trauma and mutation, a witcher’s emotions are dulled. Witchers do not have to make courage checks against Intimidation, but they have a -4 to their Empathy Stat. This cannot bring Empathy below 1."],
    ["Lightning Reflexes","After intensive training and mutation, witchers are much faster and more agile than humans. They gain a permanent +1 to their Reflex and Dexterity that can raise both stats above 10."]
  ],

  'Dwarf': [
    ["Tough","Spending much of their time in the mountains and mines, dwarves have naturally tough skin. As such a dwarfs’ skin has a natural stopping power of 2. This SP is applied on top of any armor the Dwarf is already wearing and cannot be lowered via weapon attacks or ablation damage."],
    ["Strong","Due to their compact frame and propensity for tough, physically demanding professions, dwarves gain a +1 to their Physique skill and raise their Encumberance by 25."],
    ["Crafter’s Eye","With their eye for fine detail and appraisal it is hard to bluff a dwarf. Dwarves have an inherent +1 to their Business skill."]
  ]
}

const raceSkillBonuses = {
  'Human':   { "Deduction": 1 },
  'Elf':     { "Fine Arts": 1, "Archery": 2 },
  'Dwarf':   { "Physique": 1, "Business": 1 },
  'Witcher': { "Awareness": 1 }
};

const raceAttributeBonuses = {
  'Witcher': { "REF": 1, "DEX": 1, "EMP": -4 }
};

const professionDescriptions = {
  'Bard': {
    "Defining Skill": "Busking",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Charisma", "Deceit", "Performance", "Language (Choose 1)", "Human Perception", "Persuasion", "Streetwise", "Fine Arts", "Seduction", "Social Etiquette"],
    "Gear": ["Dice poker board", "Gwent deck", "Hand mirror", "An instrument", "Flask of spirits", "Dagger", "Perfume/cologne", "Belt pouch", "Garter sheath", "A journal with a lock"],
    "GearPickCount": 5
  },

  'Craftsman': {
    "Defining Skill": "Patch Job",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Athletics", "Alchemy", "Business", "Crafting", "Education", "Endurance", "Fine Arts", "Persuasion", "Physique", "Streetwise"],
    "Gear": ["50 crowns of components", "Alchemy set", "Crafting tools", "Hourglass", "Iron long sword", "Lock", "Mace", "Merchant's tools", "Small chest", "Tinker's forge"],
    "GearPickCount": 5
  },

  'Criminal': {
    "Defining Skill": "Practiced Paranoia",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Athletics", "Awareness", "Deceit", "Forgery", "Intimidation", "Pick Locks", "Sleight of Hand", "Small Blades", "Stealth", "Streetwise"],
    "Gear": ["Brass knuckles", "Bullseye lantern", "Chloroform", "Loaded dice", "Satchel", "Secret pocket", "Sleeve sheath", "Stiletto", "Thieves' tools", "Throwing knives x5"],
    "GearPickCount": 5
  },

  'Doctor': {
    "Defining Skill": "Healing Hands",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Alchemy", "Business", "Charisma", "Courage", "Deduction", "Human Perception", "Resist Coercion", "Small Blades", "Social Etiquette", "Wilderness Survival"],
    "Gear": ["Blanket", "Candles x10", "Clotting powder x10", "Dagger", "Hourglass", "Large tent", "Numbing herbs x10", "Sterlizing fluid x10", "Surgeon's kit", "Writing kit"],
    "GearPickCount": 5
  },

  'Mage': {
    "Defining Skill": "Magic Training",
    "Vigor": 5,
    "Magical Perks": ["5 Novice Spells", "1 Novice Ritual", "1 Low Danger Hex"],
    "Skills": ["Education", "Grooming & Style", "Hex Weaving", "Human Perception", "Resist Magic", "Ritual Crafting", "Seduction", "Social Etiquette", "Spell Casting", "Staff/Spear"],
    "Gear": ["100 crowns of components", "Belt pouch", "Dagger", "Garter sheath", "Hand mirror", "Hourglass", "Journal", "Makeup kit", "Staff", "Writing kit"],
    "GearPickCount": 5
  },

  'ManAtArms': {
    "Defining Skill": "Tough As Nails",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Any 5 Combat Skills", "Courage", "Dodge/Escape", "Intimidation", "Physique", "Wilderness Survival"],
    "Gear": ["Armored trousers", "Battle axe", "Brigandine", "Chain coif", "Crossbow & bolts x20", "Kord", "Satchel", "Spear", "Steel buckler", "Throwing knives x5"],
    "GearPickCount": 5
  },

  'Merchant': {
    "Defining Skill": "Well Traveled",
    "Vigor": 0,
    "Magical Perks": "None",
    "Skills": ["Business", "Charisma", "Education", "Gambling", "Human Perception", "Language (Choose 2)", "Persuasion", "Resist Coercion", "Small Blades", "Streetwise"],
    "Gear": ["Crossbow & bolts x20", "Dagger", "Journal", "Large tent", "Merchant's tools", "Writing kit"],
    "GearPickCount": 3,
    "Special": ["Cart: a mule and a cart with 1000 crowns of common or everyday items"],
  },

  'Priest': {
    "Defining Skill": "Initiate of the Gods",
    "Vigor": 2,
    "Magical Perks": ["2 Novice Invocations", "2 Novice Rituals", "2 Low Danger Hexes"],
    "Skills": ["Charisma", "Courage", "First Aid", "Hex Weaving", "Human Perception", "Leadership", "Ritual Crafting", "Spell Casting", "Teaching", "Wilderness Survival"],
    "Gear": ["100 crowns of components", "Alchemy set", "Clotting powder x5", "Dagger", "Holy symbol", "Hourglass", "Numbing herbs x5", "Staff", "Sterilizing fluid x5", "Surgeon's kit"],
    "GearPickCount": 5
  },

  'Witcher': {
    "Defining Skill": "Witcher Training",
    "Vigor": 2,
    "Magical Perks": "All Basic Signs",
    "Skills": ["Alchemy", "Athletics", "Awareness", "Deduction", "Dodge/Escape", "Riding", "Spell Casting", "Stealth", "Swordsmanship", "Wilderness Survival"],
    "Gear": ["Alchemy set", "Double woven gambeson", "Hand crossbow", "Horse", "Throwing knives x5"],
    "GearPickCount": 2,
    "Special": ["Decoction formulae", "Oil formulae x2", "Potion formulae x2", "Witcher medallion", "Witcher's steel sword", "Witcher's silver sword"],
  }
}

const skillList = {
  // Intelligence
  "Awareness":        { stat: "INT", difficult: false },
  "Business":         { stat: "INT", difficult: false },
  "Deduction":        { stat: "INT", difficult: false },
  "Education":        { stat: "INT", difficult: false },
  "Language":         { stat: "INT", difficult: true },
  "Monster Lore":     { stat: "INT", difficult: true },
  "Social Etiquette": { stat: "INT", difficult: false },
  "Streetwise":       { stat: "INT", difficult: false },
  "Tactics":          { stat: "INT", difficult: true },
  "Teaching":         { stat: "INT", difficult: false },
  "Wilderness Survival": { stat: "INT", difficult: false },

  // Reflex
  "Brawling":     { stat: "REF", difficult: false },
  "Dodge/Escape": { stat: "REF", difficult: false },
  "Melee":        { stat: "REF", difficult: false },
  "Riding":       { stat: "REF", difficult: false },
  "Sailing":      { stat: "REF", difficult: false },
  "Small Blades": { stat: "REF", difficult: false },
  "Swordsmanship":{ stat: "REF", difficult: false },

  // Dexterity
  "Archery":        { stat: "DEX", difficult: false },
  "Athletics":      { stat: "DEX", difficult: false },
  "Crossbow":       { stat: "DEX", difficult: false },
  "Sleight of Hand":{ stat: "DEX", difficult: false },
  "Stealth":        { stat: "DEX", difficult: false },

  // Body
  "Physique":  { stat: "BODY", difficult: false },
  "Endurance": { stat: "BODY", difficult: false },

  // Craft
  "Alchemy":       { stat: "CRA", difficult: true },
  "Crafting":      { stat: "CRA", difficult: true },
  "Disguise":      { stat: "CRA", difficult: false },
  "First Aid":     { stat: "CRA", difficult: false },
  "Forgery":       { stat: "CRA", difficult: false },
  "Pick Locks":     { stat: "CRA", difficult: false },
  "Trap Crafting": { stat: "CRA", difficult: true },

  // Empathy
  "Charisma":         { stat: "EMP", difficult: false },
  "Deceit":           { stat: "EMP", difficult: false },
  "Fine Arts":        { stat: "EMP", difficult: false },
  "Gambling":         { stat: "EMP", difficult: false },
  "Grooming & Style": { stat: "EMP", difficult: false },
  "Human Perception": { stat: "EMP", difficult: false },
  "Leadership":       { stat: "EMP", difficult: false },
  "Performance":      { stat: "EMP", difficult: false },
  "Persuasion":       { stat: "EMP", difficult: false },
  "Seduction":        { stat: "EMP", difficult: false },

  // Will
  "Courage":         { stat: "WILL", difficult: false },
  "Hex Weaving":     { stat: "WILL", difficult: true },
  "Intimidation":    { stat: "WILL", difficult: false },
  "Spell Casting":   { stat: "WILL", difficult: true },
  "Resist Magic":    { stat: "WILL", difficult: true },
  "Resist Coercion": { stat: "WILL", difficult: false },
  "Ritual Crafting": { stat: "WILL", difficult: true },
};
var skillsValues = {};

///  NAVIGATION  ////////


function goToStep(id) {
  document.querySelectorAll('.step').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  return target;
}

function saveRaceAndProfession() {
  const race = document.querySelector('.raceOption.active')?.id.replace('race', '');
  const profession = document.querySelector('.professionOption.active')?.id.replace('profession', '');
  if (!race || !profession) {
    alert('Please select both a race and a profession before proceeding.');
    return;
  }
  if (race!=profession && (race=='Witcher' || profession=='Witcher')) {
    alert('To be a Witcher, you must select both the Witcher race and the Witcher profession.');
    return;
  }
  if (profession=='Mage' && !(race=='Elf' || race=='Human')) {
    alert('Only Elves and Humans can be Mages.');
    return;
  }
  try{
    const character = JSON.parse(localStorage.getItem('buildCharacter'));
    character.race = race;
    character.class = profession;
  }
  catch(e){
    createCharacter();
  }
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  character.race = race;
  character.class = profession;
  localStorage.setItem('buildCharacter', JSON.stringify(character));
  goToStep('step2');
}
function checkIfWitcher() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  if (character.race!="Witcher") {
    document.getElementById('witcherHint').textContent='';
    return;
  }
  document.getElementById('witcherHint').textContent='As a Witcher, you have a +1 to REF, DEX. But suffer a -4 to EMP.';
}

//////// CHARACTER CREATION ////////
function initializeSkills() {
  const skills = {};
  for (const name in skillList) {
    skills[name] = 0; // starting value, points get allocated later
  }
  return skills;
}


function createCharacter() {
  const character = {
    race: '',
    class: '',
    attributes: {
      "INT": 0, "REF": 0, "DEX": 0, "BODY": 0,
      "SPD": 0, "CRA": 0, "EMP": 0, "WILL": 0, "LUCK": 0
    },
    derivedStats: calculateDerivedStats({ BODY: 0, WILL: 0, SPD: 0 }),
    definingSkill: { name: '', value: 0 },
    vigor: 0,
    skills: {},
    equipment: []
  };
  character.skills = initializeSkills();
  localStorage.setItem('buildCharacter', JSON.stringify(character));
}

function initBuild() {
    try{
        const character = JSON.parse(localStorage.getItem('buildCharacter'));
    }
    catch(e){
        createCharacter();
    }

}

function selectRace(race) {
    document.querySelectorAll('.raceOption').forEach(a => a.classList.remove('active'));
    document.getElementById('race' + race).classList.add('active');
    document.getElementById('raceDescription').innerHTML = '';
    raceDescriptions[race]?.forEach(element => {
        document.getElementById('raceDescription').innerHTML += `<p><strong>${element[0]}:</strong> ${element[1]}</p>`;
    });
}

function selectProfession(professionName) {
    document.querySelectorAll('.professionOption').forEach(a => a.classList.remove('active'));
    document.getElementById('profession' + professionName).classList.add('active');
    document.getElementById('professionDescription').innerHTML = `<p>${professionDescriptions[professionName]}</p>`;
}


function debugPrint() {
    try{
        const character = JSON.parse(localStorage.getItem('buildCharacter'));
        console.log(character);
    }
    catch(e){
        console.log("No character found.");
    }
}

function availableSkillPoints(race){
  output=44;
  for (const [key, value] of Object.entries(skillsValues)) {
    if (raceSkillBonuses[race][key]!=undefined) {
      output += raceSkillBonuses[race][key];
      
      if (skillList[key].difficult){
        output += raceSkillBonuses[race][key];
      }
    }
    if(skillList[key].difficult){
      output -= value;
    }
    output -= value;
  }
  return output;
}

function increaseSkill(skill,race) {
  if (skillsValues[skill] > 5) {
    return;
  }
  if (availableSkillPoints(race) <= 0) {
    alert('No skill points remaining.');
    return;
  }
  skillsValues[skill]++;
  document.getElementById('skillPointsRemaining').textContent = availableSkillPoints(race);
  document.getElementById('skill-'+skill).textContent = skillsValues[skill];
}


function decreaseSkill(skill,race) {
  if (skillsValues[skill] <= 1+(raceSkillBonuses[race][skill] || 0)) {
    return;
  }
  skillsValues[skill]--;
  document.getElementById('skillPointsRemaining').textContent = availableSkillPoints(race);
  document.getElementById('skill-'+skill).textContent = skillsValues[skill];
}

function renderProfessionDetails() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const profession = character.class;
  const data = professionDescriptions[profession];

  document.getElementById('professionName').textContent = profession;
  document.getElementById('definingSkill').textContent = data['Defining Skill'];
  document.getElementById('vigor').textContent = data['Vigor'];

  const perks = data['Magical Perks'];
  document.getElementById('magicalPerks').textContent =
    Array.isArray(perks) ? perks.join(', ') : perks;


  
  const skillsList = document.getElementById('skillsList');
  skillsValues = {};
  data['Skills'].forEach(skill => {
    skillsValues[skill] = 1+(raceSkillBonuses[character.race][skill]||0);
  });
  document.getElementById('skillPointsRemaining').textContent = availableSkillPoints(character.race);
  skillsList.innerHTML = '';
  data['Skills'].forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${skill}:</strong>  (${skillList[skill]?.stat}):  <button onclick="decreaseSkill('${skill}', '${character.race}')">-</button> <span id="skill-${skill}">${skillsValues[skill]}</span> <button onclick="increaseSkill('${skill}', '${character.race}')">+</button>`;
    skillsList.appendChild(li);
  });

  const pickCount = data['GearPickCount'] || 5;
  document.getElementById('gearPickHint').textContent = `Pick ${pickCount}:`;

  const gearList = document.getElementById('gearList');
  gearList.innerHTML = '';
  data['Gear'].forEach(item => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = item;
    checkbox.name = 'gearChoice';
    checkbox.addEventListener('change', () => enforceGearLimit(pickCount));
    label.appendChild(checkbox);
    label.append(' ' + item);
    li.appendChild(label);
    gearList.appendChild(li);
  });

  const specialBlock = document.getElementById('specialBlock');
  const specialList = document.getElementById('specialList');
  if (data['Special']) {
    specialBlock.style.display = 'block';
    specialList.innerHTML = '';
    data['Special'].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      specialList.appendChild(li);
    });
  } else {
    specialBlock.style.display = 'none';
  }
}

function enforceGearLimit(pickCount) {
  const checkboxes = document.querySelectorAll('input[name="gearChoice"]');
  const checked = [...checkboxes].filter(cb => cb.checked);
  checkboxes.forEach(cb => {
    cb.disabled = checked.length >= pickCount && !cb.checked;
  });
}

function saveProfessionDetails() {
  const chosenGear = [...document.querySelectorAll('input[name="gearChoice"]:checked')]
    .map(cb => cb.value);

  try{
    const character = JSON.parse(localStorage.getItem('buildCharacter'));
  }
  catch(e){
    createCharacter();
  }
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const pickCount = professionDescriptions[character.class]['GearPickCount'] || 5;
  if (chosenGear.length !== pickCount) {
    alert(`Please select exactly ${pickCount} gear items.`);
    return;
  }

  character.definingSkill = professionDescriptions[character.class]['Defining Skill'];
  character.vigor = professionDescriptions[character.class]['Vigor'];
  let equipment = chosenGear;
  equipment.push(...professionDescriptions[character.class]['Special'] || []);
  character.equipment = equipment;
  for (const [skill, value] of Object.entries(skillsValues)) {
    character.skills[skill] = value;
  }
  character.definingSkill = professionDescriptions[character.class]['Defining Skill'];
  localStorage.setItem('buildCharacter', JSON.stringify(character));
  goToStep('step3');
}

function randomizeAttributes() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const attributes = ['INT', 'REF', 'DEX', 'BODY', 'SPD', 'CRA', 'EMP', 'WILL', 'LUCK'];
  attributes.forEach(attr => {
    let randomValue = Math.floor(Math.random() * 10) + 1;
    while (randomValue < 3) {
      randomValue = Math.floor(Math.random() * 10) + 1;
    }
    if (character.race == 'Witcher'){
      if (attr == 'REF' || attr == 'DEX') {
        randomValue += 1;
      }
      if (attr == 'EMP') {
        randomValue = Math.max(1, randomValue-4);
      }
    }
    document.getElementById(attr).value = randomValue;
  });
}

function saveAttributes() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const attributes = ['INT', 'REF', 'DEX', 'BODY', 'SPD', 'CRA', 'EMP', 'WILL', 'LUCK'];

  const values = {};
  for (const attr of attributes) {
    const value = parseInt(document.getElementById(attr).value, 10);
    if (isNaN(value) || value < 1) {
      alert(`Please enter a valid number for ${attr}.`);
      return;
    }
    values[attr] = value;
  }

  character.attributes = values;
  character.derivedStats = calculateDerivedStats(values);
  localStorage.setItem('buildCharacter', JSON.stringify(character));
}


const physicalTable = {
  2: { HP: 10, STA: 10, REC: 2,  STUN: 2  },
  3: { HP: 15, STA: 15, REC: 3,  STUN: 3  },
  4: { HP: 20, STA: 20, REC: 4,  STUN: 4  },
  5: { HP: 25, STA: 25, REC: 5,  STUN: 5  },
  6: { HP: 30, STA: 30, REC: 6,  STUN: 6  },
  7: { HP: 35, STA: 35, REC: 7,  STUN: 7  },
  8: { HP: 40, STA: 40, REC: 8,  STUN: 8  },
  9: { HP: 45, STA: 45, REC: 9,  STUN: 9  },
  10:{ HP: 50, STA: 50, REC: 10, STUN: 10 },
  11:{ HP: 55, STA: 55, REC: 11, STUN: 10 },
  12:{ HP: 60, STA: 60, REC: 12, STUN: 10 },
  13:{ HP: 65, STA: 65, REC: 13, STUN: 10 },
};

function getMeleeBonus(body) {
  if (body <= 2) return -4;
  if (body <= 4) return -2;
  if (body <= 6) return 0;
  if (body <= 8) return 2;
  if (body <= 10) return 4;
  if (body <= 12) return 6;
  return 8;
}

function calculateDerivedStats(attributes) {
  const { BODY, WILL, SPD } = attributes;

  // (Body+Will)/2, rounded down, used as the Physical Table lookup key
  const physKey = Math.max(2, Math.min(13, Math.floor((BODY + WILL) / 2)));
  const phys = physicalTable[physKey];

  const run = SPD * 3;

  return {
    HP: phys.HP,
    STA: phys.STA,
    REC: phys.REC,
    STUN: phys.STUN,
    ENC: BODY * 10,               // Encumbrance
    RUN: run,
    LEAP: Math.floor(run / 5),
    MELEE_BONUS: getMeleeBonus(BODY),
  };
}

///THis part needs work

let workingPickupSkills = {};

function getEligiblePickupSkills(data) {
  const excluded = new Set([...data['Skills'], data['Defining Skill']]);
  return Object.keys(skillList).filter(skill => !excluded.has(skill));
}

function getPickupPointPool(character) {
  return character.attributes.INT + character.attributes.REF;
}

function calculatePickupSpent(eligibleSkills) {
  return eligibleSkills.reduce((sum, skill) => {
    const cost = skillList[skill]?.difficult ? 2 : 1;
    return sum + workingPickupSkills[skill] * cost;
  }, 0);
}

function renderPickupSkills() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const data = professionDescriptions[character.class];
  const eligible = getEligiblePickupSkills(data);

  // Seed working copy from character.skills (0 if never touched)
  workingPickupSkills = {};
  eligible.forEach(skill => {
    workingPickupSkills[skill] = character.skills[skill] ?? 0;
  });

  const list = document.getElementById('pickupSkillsList');
  list.innerHTML = '';

  eligible.forEach(skill => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${skill}</strong> (${skillList[skill]?.stat}):
      <button onclick="decreasePickupSkill('${skill}')">-</button>
      <span id="pickupVal-${skill}">${workingPickupSkills[skill]}</span>
      <button onclick="increasePickupSkill('${skill}')">+</button>`;
    list.appendChild(li);
  });

  updatePickupPointsRemaining();
}

function increasePickupSkill(skill) {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const data = professionDescriptions[character.class];
  const eligible = getEligiblePickupSkills(data);
  const pool = getPickupPointPool(character);
  const cost = skillList[skill]?.difficult ? 2 : 1;

  if (workingPickupSkills[skill] >= 6) return;
  if (calculatePickupSpent(eligible) + cost > pool) return;

  workingPickupSkills[skill]++;
  document.getElementById(`pickupVal-${skill}`).textContent = workingPickupSkills[skill];
  updatePickupPointsRemaining();
}

function decreasePickupSkill(skill) {
  if (workingPickupSkills[skill] <= 0) return;
  workingPickupSkills[skill]--;
  document.getElementById(`pickupVal-${skill}`).textContent = workingPickupSkills[skill];
  updatePickupPointsRemaining();
}

function updatePickupPointsRemaining() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const data = professionDescriptions[character.class];
  const eligible = getEligiblePickupSkills(data);
  const pool = getPickupPointPool(character);
  const spent = calculatePickupSpent(eligible);
  document.getElementById('pickupPointsRemaining').textContent = pool - spent;
}

function savePickupSkills() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));
  const data = professionDescriptions[character.class];
  const eligible = getEligiblePickupSkills(data);
  const pool = getPickupPointPool(character);
  const spent = calculatePickupSpent(eligible);

  if (spent > pool) {
    alert('You have overspent your Pick-Up Skill points.');
    return;
  }

  eligible.forEach(skill => {
    character.skills[skill] = workingPickupSkills[skill];
  });

  localStorage.setItem('buildCharacter', JSON.stringify(character));
  goToStep('step4'); // adjust to whatever your next step is
}

function goToSheet(){
  createCharacter();
  window.location.href = 'sheet.html';
}
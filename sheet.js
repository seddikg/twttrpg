// sheet.js

// Maps each skill-group container id to the stat category it displays.
// (Matches skillList's `stat` field, grouped by which INT/REF/DEX/etc. bucket they belong to.)
const skillGroupMap = {
  intSkills:     'INT',
  reflexSkills:  'REF',
  dexSkills:     'DEX',
  bodySkills:    'BODY',
  empathySkills: 'EMP',
  craftSkills:   'CRA',
  willSkills:    'WILL',
};

function renderSheet() {
  const character = JSON.parse(localStorage.getItem('buildCharacter'));

  // Identity + profession
  setText('s-race', character.race);
  setText('s-profession', character.class);
  setText('s-definingSkillName', character.definingSkill?.name || '');

  // Attributes
  const attrKeys = ['INT', 'REF', 'DEX', 'BODY', 'SPD', 'EMP', 'CRA', 'WILL', 'LUCK'];
  attrKeys.forEach(attr => setText(`s-${attr}`, character.attributes[attr]));

  // Derived stats
  const d = character.derivedStats;
  setText('s-STUN', d.STUN);
  setText('s-RUN', d.RUN);
  setText('s-LEAP', d.LEAP);
  setText('s-HP', d.HP);
  setText('s-STA', d.STA);
  setText('s-ENC', d.ENC);
  setText('s-REC', d.REC);
  // Punch/Kick come from the Hand-to-Hand table (p.48), keyed by BODY —
  // not built yet in the character object, left blank for now
  setText('s-Punch', '');
  setText('s-Kick', '');

  setText('s-reputation', ''); // not tracked yet
  setText('s-ip', '');         // not tracked yet

  renderSkillGroups(character);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? '';
}

function renderSkillGroups(character) {
  Object.entries(skillGroupMap).forEach(([groupId, statCategory]) => {
    const table = document.querySelector(`#${groupId} table`);
    table.innerHTML = '';

    const skillsInGroup = Object.entries(skillList)
      .filter(([, info]) => info.stat === statCategory)
      .map(([name]) => name);

    skillsInGroup.forEach(skill => {
      const value = character.skills[skill] ?? 0;
      const row = document.createElement('tr');
      row.innerHTML = `<td class="label">${skill}</td><td>${value}</td>`;
      table.appendChild(row);
    });
  });
}

document.addEventListener('DOMContentLoaded', renderSheet);
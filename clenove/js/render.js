const usersContainer = document.getElementById("users-container");
const modalsContainer = document.getElementById("modals-container");

// 1. Vykreslení všech modálů podle souboru badges.js
Object.values(BADGES).forEach(badge => {
  modalsContainer.innerHTML += `
    <div class="badge-modal" id="${badge.modalId}">
        <img src="img/close-icon.webp" class="close-icon" onclick="window.location.hash = 'home'">
        
        <div class="badge-icon-box">
            <img src="${badge.bigIcon}">
        </div>

        <span class="badge-name">${badge.name}</span>

        <span class="badge-desc">
            ${badge.desc}
        </span>

        <div class="badge-rarity-box ${badge.rarityClass}-box">
            <div class="badge-rarity-dot ${badge.rarityClass}"></div>
            <span class="badge-rarity-text ${badge.rarityClass}">${badge.rarity}</span>
        </div>
    </div>
  `;
});

// 2. Vykreslení karet členů podle souboru members.js
MEMBERS.forEach(member => {
  // Poskládání odznaků pro daného člena
  const badgesHtml = member.badges.map(badgeKey => {
    const badge = BADGES[badgeKey];
    if (!badge) return ""; // Pojistka proti překlepu v názvu odznaku

    return `
      <div class="user-badge" onclick="window.location.href='#${badge.modalId}'">
          <img src="${badge.smallIcon}">
      </div>
    `;
  }).join("");

  // Vykreslení samotné user-box karty
  usersContainer.innerHTML += `
    <div class="user-box" id="${member.id}">
        <div class="user">
            <img src="${member.avatar}" class="icon">
            <div class="user-text">
                <span class="user-name">${member.name}</span>
                <div class="user-role ${member.roleClass}-box"><span class="role ${member.roleClass}">${member.role}</span></div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="user-badges">
            ${badgesHtml}
        </div>
    </div>
  `;
});

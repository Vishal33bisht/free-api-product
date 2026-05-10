const API_URL = "https://api.freeapi.app/api/v1/public/randomusers";

const userGrid = document.querySelector("#userGrid");
const statusPanel = document.querySelector("#statusPanel");
const summary = document.querySelector("#summary");
const loadMoreButton = document.querySelector("#loadMoreButton");
const userCount = document.querySelector("#userCount");
const nationalityCount = document.querySelector("#nationalityCount");
const genderCount = document.querySelector("#genderCount");

let allUsers = [];

function getUsers(payload) {
  if (Array.isArray(payload?.data?.data)) {
    return payload.data.data;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function userTemplate(user) {
  const title = escapeHtml(user.name?.title || "");
  const firstName = escapeHtml(user.name?.first || "User");
  const lastName = escapeHtml(user.name?.last || "");
  const username = escapeHtml(user.login?.username || "");
  const email = escapeHtml(user.email || "");
  const phone = escapeHtml(user.phone || "");
  const cell = escapeHtml(user.cell || "");
  const gender = escapeHtml(user.gender || "");
  const age = user.dob?.age || "N/A";
  const city = escapeHtml(user.location?.city || "");
  const country = escapeHtml(user.location?.country || "");
  const nationality = escapeHtml(user.nat || "");
  const image = escapeHtml(user.picture?.large || "");

  const genderBadge =
    gender.toLowerCase() === "male"
      ? "♂️ Male"
      : gender.toLowerCase() === "female"
        ? "♀️ Female"
        : "Gender";

  const emailLink =
    email && email !== ""
      ? `<a href="mailto:${email}" class="contact-link">📧 Email</a>`
      : "";

  const phoneLink =
    phone && phone !== ""
      ? `<a href="tel:${phone}" class="contact-link">📞 Phone</a>`
      : "";

  const cellLink =
    cell && cell !== ""
      ? `<a href="tel:${cell}" class="contact-link">📱 Cell</a>`
      : "";

  return `
    <article class="user-card">
      <div class="user-header">
        <img src="${image}" alt="${firstName} ${lastName}" class="user-avatar" loading="lazy" />
        <span class="gender-badge">${genderBadge}</span>
      </div>
      <div class="user-body">
        <h2 class="user-name">${title} ${firstName} ${lastName}</h2>
        <p class="user-username">@${username}</p>
        
        <div class="user-info">
          <div class="info-row">
            <span class="info-label">🎂 Age:</span>
            <span class="info-value">${age} years</span>
          </div>
          <div class="info-row">
            <span class="info-label">📍 Location:</span>
            <span class="info-value">${city}, ${country}</span>
          </div>
          <div class="info-row">
            <span class="info-label">🌍 Nationality:</span>
            <span class="info-value">${nationality}</span>
          </div>
        </div>

        <div class="user-footer">
          <div class="contact-info">
            ${emailLink}
            ${phoneLink}
            ${cellLink}
          </div>
        </div>
      </div>
    </article>
  `;
}

function updateSummary() {
  const nationalities = new Set(
    allUsers.map((user) => user.nat).filter(Boolean)
  );
  const genders = allUsers.reduce((acc, user) => {
    const gender = user.gender || "unknown";
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  userCount.textContent = allUsers.length;
  nationalityCount.textContent = nationalities.size;
  genderCount.textContent = Object.keys(genders).length;
  summary.hidden = false;
}

function showStatus(message, isError = false) {
  statusPanel.textContent = message;
  statusPanel.hidden = false;
  statusPanel.classList.toggle("error", isError);
}

async function loadMoreUsers() {
  loadMoreButton.disabled = true;
  showStatus("Loading users...");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const users = getUsers(payload);

    if (!users.length) {
      showStatus("No users were returned by the API.");
      return;
    }

    allUsers = [...allUsers, ...users];
    updateSummary();
    statusPanel.hidden = true;
    userGrid.innerHTML = allUsers.map(userTemplate).join("");
  } catch (error) {
    showStatus(
      "Unable to load users right now. Please try again in a moment.",
      true
    );
    console.error(error);
  } finally {
    loadMoreButton.disabled = false;
  }
}

loadMoreButton.addEventListener("click", loadMoreUsers);
loadMoreUsers();
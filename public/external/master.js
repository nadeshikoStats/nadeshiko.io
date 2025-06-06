var languageJSON, imageFileType;

function und(text, undefinedValue = 0) {
  // Returns a set value (typically 0) in the case of a missing value
  if (text === null || text === undefined || Number.isNaN(text)) return undefinedValue;
  else return text;
}

function calculateRatio(numerator, denominator, digits = 2) {
  // Calculates a ratio based on two stats
  return checkAndFormat(numerator / (und(denominator) == 0 ? 1 : denominator), digits);
}

function checkAndFormat(number, digits = 0) {
  // Ensures undefined values become zero and format to user's locale
  return locale(und(number), digits);
}

function deformatName(text) {
  if (text == undefined || text == null) {
    return text;
  }

  return text
    .replace(/§[0-9a-fk-or]\[.*?\]/g, "")
    .replace(/§[0-9a-fk-or]/g, "")
    .trim();
}

function updateTag(parentElement, dataI, value, useHTML = false) {
  let element = parentElement.querySelector(`[data-i=${dataI}]`);

  if (element == null) {
    console.warn(`Element with data-i ${dataI} not found!`);
    return;
  }

  element.innerText = value;
  if (useHTML) {
    element.innerHTML = value;
  }
}

function updateAllTags(parentElement, dataI, value, useHTML = false) {
  let elements = parentElement.querySelectorAll(`[data-i=${dataI}]`);
  elements.forEach((element) => {
    element.innerText = value;
    if (useHTML) {
      element.innerHTML = value;
    }
  });
}

function getValue(object, valueArray) {
  for (let i = 0; i < valueArray.length; i++) {
    if (object == undefined) {
      return undefined;
    }
    object = object[valueArray[i]];
  }
  return object;
}

function updateElement(id, value, useInnerHTML = false, scope = document) {
  const element = scope.getElementById(id);
  if (element) {
    if (useInnerHTML) {
      element.innerHTML = DOMPurify.sanitize(value);
    } else {
      element.textContent = value;
    }
  } else {
    console.warn(`Element with ID ${id} not found!`);
  }
}

function locale(number, digits = 2, language = userLanguage) {
  return number.toLocaleString(language, { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function rawLocale(number) {
  return number.toLocaleString(userLanguage);
}

function shortDateFormat(date) {
  return new Intl.DateTimeFormat(userLanguage, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    calendar: "gregory",
  }).format(date);
}

function mediumDateFormat(date) {
  return new Intl.DateTimeFormat(userLanguage, {
    dateStyle: "short",
    timeStyle: "short",
    calendar: "gregory",
    hour12: false,
  }).format(date);
}

function longDateFormat(date) {
  return new Intl.DateTimeFormat(userLanguage, {
    dateStyle: "long",
    timeStyle: "long",
    calendar: "gregory",
  }).format(date);
}

function getValue(object, valueArray) {
  for (let i = 0; i < valueArray.length; i++) {
    if (object == undefined) {
      return undefined;
    }
    object = object[valueArray[i]];
  }
  return object;
}

function smallDuration(seconds, ms = false) {
  // Converts a number of seconds into a human-readable duration of time
  if (seconds == -1 || seconds == undefined || isNaN(seconds)) {
    return getTranslation(["player", "errors", "not_applicable"]);
  }

  let dateNames = {
    year: getTranslation("times.year_short"),
    day: getTranslation("times.day_short"),
    hour: getTranslation("times.hour_short"),
    minute: getTranslation("times.minute_short"),
    second: getTranslation("times.second_short"),
  };

  const MINUTE = 60;
  const HOUR = 3600;
  const DAY = 86400;
  const YEAR = 31556952;

  const years = Math.floor(seconds / YEAR);
  const days = Math.floor((seconds % YEAR) / DAY);
  const hours = Math.floor((seconds % DAY) / HOUR);
  const minutes = Math.floor((seconds % HOUR) / MINUTE);
  const secondsMod = Math.floor(seconds % MINUTE);

  if (years > 0) {
    return `${years}${dateNames["year"]} ${days}${dateNames["day"]}`;
  } else if (days > 0) {
    return `${days}${dateNames["day"]} ${hours}${dateNames["hour"]}`;
  } else if (hours > 0) {
    return `${hours}${dateNames["hour"]} ${minutes}${dateNames["minute"]}`;
  } else if (minutes > 0) {
    return `${minutes}${dateNames["minute"]} ${secondsMod}${dateNames["second"]}`;
  } else {
    return `${ms ? checkAndFormat(seconds, 3) : secondsMod}${dateNames["second"]}`;
  }
}

function rainbowText(text, colorCodes = ["§c", "§6", "§e", "§a", "§b", "§d", "§5"]) {
  // Returns a string with cycling colour codes after providing an array of colour codes
  let coloredText = "";

  for (let i = 0; i < text.length; i++) {
    let character = text.charAt(i);
    let colorCode = colorCodes[i % colorCodes.length];
    coloredText += `${colorCode}${character}`;
  }

  return coloredText;
}

function veryLargeNumber(number) {
  // Changes number to compact notation if it's over a million
  number = und(number);
  if (number >= 1000000) {
    return new Intl.NumberFormat("default", { notation: "compact", compactDisplay: "short", maximumSignificantDigits: 4 }).format(number);
  } else {
    return locale(number, 0);
  }
}

function addPrefixZero(number, totalLength) {
  // Adds zeroes to the start of a number to make it a certain length
  let numberStr = number.toString();
  while (numberStr.length < totalLength) {
    numberStr = "0" + numberStr;
  }
  return numberStr;
}

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (const numeral in romanNumerals) {
    const count = Math.floor(num / romanNumerals[numeral]);
    num -= count * romanNumerals[numeral];
    result += numeral.repeat(count);
  }

  return result;
}

function sortStrings(a, b) {
  // Sorts strings alphabetically based on locale
  return a.localeCompare(b, userLanguage, { sensitivity: "base" });
}

function checkSearchBox(event, textBoxValue) {
  // Check if the user's typing in the search box
  if (event.key === "Enter") {
    // Did the user press enter?
    event.preventDefault();
    let userInput;
    if (currentScope == "guild") {
      userInput = textBoxValue.replaceAll(/[^A-Za-z0-9_ ]/g, ""); // Spaces are allowed in guild names
    } else {
      userInput = textBoxValue.replaceAll(/[^A-Za-z0-9_]/g, ""); // Removes all characters that can't be in a username or UUID
    }
    if (userInput.length == 0) return;
    window.location.href = `/${currentScope || "player"}/${userInput}`; // Redirect to the desired URL
  }
}

function relativeTime(timestamp, currentTime = Date.now()) {
  // Returns a timestamp showing how long ago a date was in the past
  let dateNew = new Date(currentTime);
  let dateOld = new Date(timestamp);

  let years = dateNew.getFullYear() - dateOld.getFullYear();
  let months = dateNew.getMonth() - dateOld.getMonth();
  let days = dateNew.getDate() - dateOld.getDate();
  let hours = dateNew.getHours() - dateOld.getHours();
  let minutes = dateNew.getMinutes() - dateOld.getMinutes();
  let seconds = dateNew.getSeconds() - dateOld.getSeconds();

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (days < 0) {
    months--;
    days += new Date(dateOld.getFullYear(), dateOld.getMonth() + 1, 0).getDate(); // Ensures that a month has the correct number of days.
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let timeValue;
  let dateIsInFuture = false;

  if (years > 0) timeValue = `${years}${getTranslation("times.year_short")}`;
  else if (months > 0) timeValue = `${months}${getTranslation("times.month_short")}`;
  else if (days > 0) timeValue = `${days}${getTranslation("times.day_short")}`;
  else if (hours > 0) timeValue = `${hours}${getTranslation("times.hour_short")}`;
  else if (minutes > 0) timeValue = `${minutes}${getTranslation("times.minute_short")}`;
  else if (seconds > 0) timeValue = `${seconds}${getTranslation("times.second_short")}`;
  else dateIsInFuture = true;

  if (dateIsInFuture) return getTranslation("times.now");
  else return insertPlaceholders(getTranslation("times.time_ago"), { time: timeValue });
}

/*
 * Counts the number of significant digits in a number
 * @param {number} number - The number to count the significant digits for
 * @returns {number} The number of significant digits
 */
function countSignificantDigits(number) {
  const numberStr = number.toString();
  const significantStr = numberStr.replace(/0+$/, "");
  return significantStr.length;
}

/*
 * Simplifies a number to a more readable format if it has fewer than or equal to 3 significant digits
 * @param {number} number - The number to simplify
 * @returns {string} The simplified number
 * @example
 * simplifyNumber(1230) // returns "1.23K" in en-CA
 * simplifyNumber(1234567) // returns "1,234,567" in en-CA
 */
function simplifyNumber(number, maxSigDigits = 3) {
  let languageToUse;
  if (userLanguage.startsWith("zh")) {
    // Apparently 万 is falling out of favour
    languageToUse = "en-CA";
  } else {
    languageToUse = userLanguage;
  }
  const numberFormatter = new Intl.NumberFormat(languageToUse, {
    notation: "compact",
    compactDisplay: "short",
    maximumSignificantDigits: maxSigDigits,
  });

  let significantDigits = countSignificantDigits(number);

  if (significantDigits <= maxSigDigits) {
    return numberFormatter.format(number);
  } else {
    return locale(number, 0);
  }
}

function checkBadgeInList(badge, where) {
  if (badge != "NONE") {
    let badgeElement = document.createElement("img");
    badgeElement.src = `/img/special/${badge}.png`;

    badgeElement.classList.add("badge-small");
    badgeElement.classList.add("icon");
    badgeElement.classList.add("special");
    badgeElement.style.display = "inline-block";

    let badgeGradient = document.createElement("p");
    badgeGradient.classList.add("badge-gradient");

    let badgeColor = badgeColors[badge] || "#f6acd6";
    badgeGradient.style.background = `linear-gradient(90deg, ${badgeColor} 0%, ${badgeColor} 20%, ${badgeColor}80 20%, transparent 100%)`;

    where.style.backgroundColor = `${badgeColor}30`;

    where.classList.add("has-badge");
    where.querySelector(`[data-i="name"]`).appendChild(badgeElement);

    where.appendChild(badgeGradient);
    console.warn(badgeElement);
  }
}

function updateChipStats(name, chipId, gamemode) {
  // Updates what a chip does when a dropdown is clicked
  newValue = name;
  console.log([newValue, chipId, gamemode]);

  switch (gamemode) {
    case "duels":
      updateElement(chipId, generateChipStats(allDuelsStats[newValue][0]), true);
      break;

    case "bedwars":
      if (newValue == "overall") {
        updateElement(chipId, generateChipStats(totalDreamModeStats), true);
      } else {
        console.log(newValue);
        updateElement(chipId, generateChipStats(getBedWarsModeStats(newValue)), true);
      }
      break;

    case "skywars":
      updateElement(chipId, generateChipStats(getSkyWarsModeStats(newValue)), true);
      break;

    case "tntgames":
      updateElement(chipId, generateChipStats(allTNTWizardStats[newValue]), true);
      break;

    case "arcade_zombies":
      updateElement(chipId, generateChipStats(getZombiesStats(newValue)), true);
      break;

    case "arcade_seasonal":
      updateElement(chipId, generateChipStats(getArcadeSeasonalStats(newValue)), true);
      break;

    case "arcade_hide_and_seek":
      updateElement(chipId, generateChipStats(getArcadeHideAndSeekStats(newValue)), true);
      break;

    case "arcade_party_games":
      updateElement(chipId, generateChipStats(getArcadePartyGamesStats(newValue)), true);
      break;

    case "arena":
      updateElement(chipId, generateChipStats(getArenaBrawlStats(newValue)), true);
      break;

    case "quake":
      updateElement(chipId, generateChipStats(getQuakeStats(newValue)), true);
      break;

    case "vampirez":
      updateElement(chipId, generateChipStats(getVampireZStats(newValue)), true);
      break;

    case "tkr":
      updateElement(chipId, generateChipStats(getTKRStats(newValue)), true);
      break;

    case "copsandcrims_guns":
      updateElement(chipId, generateChipStats(getCopsAndCrimsGunStats(newValue)), true);
      break;

    case "woolgames":
      updateElement(chipId, generateChipStats(getWoolWarsStats(newValue)), true);
      break;

    case "blitz":
      updateElement(chipId, generateChipStats(getBlitzKitsStats(newValue)), true);
      break;

    case "megawalls":
      if (chipId == "megawalls-classes") {
        updateElement(chipId, generateChipStats(getMegaWallsClassStats(newValue)), true);
      } else if (chipId == "megawalls-standard") {
        updateElement(chipId, generateChipStats(getMegaWallsClassStats(newValue, "standard")), true);
      } else if (chipId == "megawalls-faceoff") {
        updateElement(chipId, generateChipStats(getMegaWallsClassStats(newValue, "face_off")), true);
      }
      break;

    case "warlords":
      if (chipId == "warlords-classes") {
        updateElement(chipId, generateChipStats(getWarlordsClassStats(newValue)), true);
      } else {
        updateElement(chipId, generateChipStats(formatWarlordsWeaponStats(Number(newValue))), true);
      }
      break;

    case "uhc":
      updateElement(chipId, generateChipStats(getUHCModeStats(newValue)), true);
      break;

    case "speeduhc":
      updateElement(chipId, generateChipStats(getSpeedUHCModeStats(newValue)), true);
      break;

    case "smashheroes":
      if (chipId == "smashheroes-classes") {
        updateElement(chipId, generateChipStats(getSmashStats("class", newValue)), true);
      } else if (chipId == "smashheroes-solo") {
        updateElement(chipId, generateChipStats(getSmashStats("normal", newValue)), true);
      } else if (chipId == "smashheroes-team") {
        updateElement(chipId, generateChipStats(getSmashStats("teams", newValue)), true);
      } else if (chipId == "smashheroes-2v2") {
        updateElement(chipId, generateChipStats(getSmashStats("2v2", newValue)), true);
      } else if (chipId == "smashheroes-1v1") {
        updateElement(chipId, generateChipStats(getSmashStats("one_v_one", newValue)), true);
      } else if (chipId == "smashheroes-friend") {
        updateElement(chipId, generateChipStats(getSmashStats("friend", newValue)), true);
      }
      break;

    case "fishing":
      if (chipId == "fishing-specialfish") {
        updateElement(chipId, generateChipStats(getSpecialFishStats(newValue)), true);
      } else if (chipId == "fishing-zones") {
        updateElement(chipId, generateChipStats(getFishingZoneStats(newValue)), true);
      } else if (chipId == "fishing-catches") {
        updateElement(chipId, generateChipStats(getFishingCatches(newValue)), true);
      } else if (chipId == "fishing-seasons") {
        const fishingSeason = fishingParticipatedSeasons.find((item) => item.id === newValue);
        if (fishingSeason) {
          updateElement(chipId, generateChipStats(formatFishingParticipatedSeason(fishingSeason)), true);
        }
      }
      break;

    case "wizard":
      cardWizardSettings[chipId] = newValue;
      generateCardLink();
      break;

    case "settings":
      settings[chipId] = newValue;
      updateSetting(chipId, newValue);
      if (chipId == "language") {
        document.getElementById("settings-language-reload").style.display = "block";
      }
      break;

    case "achievements":
      filterData(chipId, newValue);
      break;

    default:
      console.warn(`Unknown gamemode ${gamemode}`);
      break;
  }
}

/*
 * Formats a string representing a Hypixel rank into Minecraft text
 * @param {string} text - The player rank text
 * @param {number} style - The style of the rank text. 0 for raw HTML, 1 for an array with the colour and the text
 */
function cuteRank(text, style = 0) {
  if (style == 0) return generateMinecraftText(text);
  else {
    var playerRankColorRegexMatch = text.match(/§([0-9a-f])/);
    var playerRankColor = playerRankColorRegexMatch == null ? "7" : playerRankColorRegexMatch[1];

    if (playerRankColorRegexMatch != null) {
      var playerRankRest = text.substring(2).replace(/\[|\]/g, "");
    } else {
      var playerRankRest = text;
    } // Emergency fallback if no section code is detected

    return [playerRankColor, generateMinecraftText(playerRankRest)];
  }
}

let badgeColors = {
  // Badge colours for the badge system, must be in 6-digit hex format
  DEVELOPER: "#85d8f9",
  PATREON: "#f6adc6",
  FOUNDER: "#e9b600",
};

function checkBadge(badge) {
  if (badge != "NONE") {
    let badgeLinks = {
      DEVELOPER: "https://github.com/nadeshikoStats",
      PATREON: "https://patreon.com/nadeshikoStats",
      FOUNDER: "https://github.com/nadeshikoStats",
    };

    document.getElementById("badge").style.display = "unset";
    document.getElementById("badge").src = `/img/special/${badge}.png`;
    if (badge.startsWith("PATREON")) {
      document.getElementById("badge-text").textContent = getTranslation(["player", "badges", "patreon"]);
      document.getElementById("badge-link").href = badgeLinks["PATREON"];
    } else {
      document.getElementById("badge-text").textContent = getTranslation(["player", "badges", badge.toLowerCase()]);
      document.getElementById("badge-link").href = badgeLinks[badge] || "#";
    }
  }
}

setTimeout(function () {
  let text = "                                               \r\n                 _           _     _ _         \r\n                | |         | |   (_) |        \r\n _ __   __ _  __| | ___  ___| |__  _| | _____  \r\n| '_ \\ / _` |/ _` |/ _ \\/ __| '_ \\| | |/ / _ \\ \r\n| | | | (_| | (_| |  __/\\__ \\ | | | |   < (_) |\r\n|_| |_|\\__,_|\\__,_|\\___||___/_| |_|_|_|\\_\\___/ \r\n                                               \r\n  the simple, beautiful Hypixel stats tracker  \r\n                                               ";
  const colors = ["#2D0614", "#2D0514", "#2D0514", "#2D0515", "#2D0515", "#2D0516", "#2D0516", "#2D0517", "#2D0517", "#2D0518", "#2D0518", "#2D0519", "#2D0519", "#2D0519", "#2D051A", "#2D051A", "#2D051B", "#2D051B", "#2D051C", "#2D051C", "#2D051D", "#2D051D", "#2D051E", "#2D051E", "#2D051E", "#2D051F", "#2D051F", "#2D0520", "#2D0520", "#2D0521", "#2D0521", "#2D0522", "#2D0522", "#2D0523", "#2D0523", "#2D0523", "#2D0524", "#2D0524", "#2D0525", "#2D0525", "#2D0526", "#2D0526", "#2D0527", "#2D0527", "#2D0528", "#2D0528", "#2D0528", "#2D0529", "#2D0529", "#2D052A", "#2D052A", "#2D052B", "#2D052B", "#2D052C", "#2D052C", "#2D052D"];

  let styleText = "";
  let styleInstructions = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    let row = Math.floor(i / 49);
    let column = i % 49;

    const color = colors[row + column];
    styleText += `%c${char}`;
    styleInstructions.push(`color: #f6acd6; background-color: ${color};`);
  }

  console.log(styleText, ...styleInstructions);
}, 4000);

/*
 * Generates a title based on the number of wins (or kills, depending on the gamemode) a player has
 * @param {number} wins - The number of wins (kills) a player has
 * @param {string} winsObject - The object containing the titles and their requirements
 * @param {string} definedColor - i forgor
 * @param {boolean} useToGo - Whether to display the number of wins to the next title in (x to go) format
 * @param {string} suffix - The suffix to add to the number of wins
 * @param {boolean} useDifferentBracketColors - Whether to use a provided custom colour for the brackets
 * @param {boolean} useBrackets - Whether to even use brackets around the title
 * @param {boolean} alternativeNaming - Whether to use supplied names for the title
 * @param {boolean} returnAsObject - Whether to return the title as an object or a string
 *
 * @returns {string} - The title generated based on the number of wins (if returnAsObject is false)
 * @returns {object} - The title generated based on the number of wins (if returnAsObject is true)
 */
function getGenericWinsPrefix({ wins, winsObject, definedColor = undefined, useToGo = true, suffix = "", useDifferentBracketColors = false, useBrackets = true, alternativeNaming = false, returnAsObject = true, useThousandsSeparator = false } = {}) {
  let chosenTitle = winsObject[0];
  wins = und(wins);
  let chosenBracketColor;
  let nextTitleWins = ``; // number of wins to next title
  let winsToGoNum;
  let brackets = ["[", "]"];
  let winsPrefixText;

  if (useThousandsSeparator) {
    winsPrefixText = locale(wins, 0, "en-CA");
  } else {
    winsPrefixText = wins.toString();
  }

  if (!useBrackets) {
    brackets = ["", ""];
  }

  for (let i = 0; i < winsObject.length; i++) {
    if (wins >= winsObject[i]["req"]) {
      chosenTitle = winsObject[i];
    }
  }

  if (useToGo || returnAsObject) {
    if (wins >= winsObject[winsObject.length - 1]["req"]) {
      winsToGoNum = -2;
    } else {
      winsToGoNum = und(winsObject[winsObject.indexOf(chosenTitle) + 1]["req"] - wins);
    }

    if (useToGo) {
      if (winsToGoNum >= 0) {
        nextTitleWins = ` ` + insertPlaceholders(getTranslation(["statistics", "wins_to_go"]), { num: checkAndFormat(winsToGoNum) });
      } else {
        nextTitleWins = ` ` + getTranslation(["statistics", "max_title"]);
      }
    }
    /*if (wins >= winsObject[winsObject.length - 1]["req"]) {
      nextTitleWins = ` ` + getTranslation(["statistics", "max_title"]);
      winsToGoNum = -2;
    } else {
      nextTitleWins = ` ` + insertPlaceholders(getTranslation(["statistics", "wins_to_go"]), {num: checkAndFormat(winsObject[winsObject.indexOf(chosenTitle) + 1]["req"] - wins)});
    }*/
  }

  if (definedColor != undefined) {
    chosenTitle = winsObject.find((x) => x.internalId == definedColor) || { color: "§f" };
  }

  if (useDifferentBracketColors) {
    chosenBracketColor = chosenTitle["bracketColor"] || chosenTitle["color"];
  } else {
    chosenBracketColor = chosenTitle["color"];
  }

  if (alternativeNaming) {
    winsPrefixText = chosenTitle["altName"] || winsPrefixText;
  }

  let winsPrefix;

  if (chosenTitle["color"] != "rainbow") {
    winsPrefix = `${generateMinecraftText(`${chosenBracketColor}${brackets[0]}${chosenTitle["color"]}${winsPrefixText}${suffix}${chosenBracketColor}${brackets[1]}`, true)}${nextTitleWins}`;
  } else {
    let colorCodeArray = chosenTitle["colorArray"] || undefined;

    winsPrefix = `${generateMinecraftText(rainbowText(brackets[0] + winsPrefixText + suffix + brackets[1], colorCodeArray), true)}${nextTitleWins}`;
  }

  if (returnAsObject) {
    return {
      title: winsPrefix,
      winsToGo: winsToGoNum,
      currentTitleRequirement: chosenTitle["req"],
    };
  } else {
    return winsPrefix;
  }
}

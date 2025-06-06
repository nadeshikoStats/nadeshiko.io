function getBedWarsLevel(exp) {
  // Calculates a player's Bed Wars level based on their experience stat
  let level = 100 * Math.floor(exp / 487000);
  exp = exp % 487000;
  if (exp < 500) return level + exp / 500;
  level++;
  if (exp < 1500) return level + (exp - 500) / 1000;
  level++;
  if (exp < 3500) return level + (exp - 1500) / 2000;
  level++;
  if (exp < 7000) return level + (exp - 3500) / 3500;
  level++;
  exp -= 7000;
  return level + exp / 5000;
}

/* Determines the Cops and Crims level based on the amount of score. This doesn't use the "level" key because we need to determine the fractional amount of the level.
 * @param {number} score - The amount of score to determine the level from
 * @returns {number} The Cops and Crims level, including the fractional amount
 */
function getCopsAndCrimsLevel(score) {
  let copsAndCrimsLevels = [0, 0, 25, 75, 175, 325, 525, 775, 1075, 1425, 1825, 2325, 2925, 3625, 4425, 5325, 6325, 7575, 9075, 10825, 12825, 15025, 17425, 20025, 22825, 25825, 28825, 31825, 34825, 37825, 40825, 43825, 46825, 49825, 52825, 55825, 58825, 61825, 64825, 67825, 70825, 73825, 76825, 79825, 82825, 85825, 88825, 91825, 94825, 97825, 100825];
  let level = 0;
  for (let a = 0; a < copsAndCrimsLevels.length; a++) {
    if (score < copsAndCrimsLevels[a]) {
      break;
    }
    level = a;
  }

  // determine fractional amount of level
  let levelFraction = 0;
  if (level < copsAndCrimsLevels.length - 1) {
    levelFraction = (score - copsAndCrimsLevels[level]) / (copsAndCrimsLevels[level + 1] - copsAndCrimsLevels[level]);
  }

  return level + levelFraction;
}

function formatBedWarsLevel(level) {
  let bedWarsPrestigeColors = [["7"], ["f"], ["6"], ["b"], ["2"], ["3"], ["4"], ["d"], ["9"], ["5"], ["c", "6", "e", "a", "b", "d", "5"], ["7", "f", "f", "f", "f", "7", "7"], ["7", "e", "e", "e", "e", "6", "7"], ["7", "b", "b", "b", "b", "5", "7"], ["7", "a", "a", "a", "a", "2", "7"], ["7", "5", "5", "5", "5", "9", "7"], ["7", "c", "c", "c", "c", "4", "7"], ["7", "d", "d", "d", "d", "5", "7"], ["7", "9", "9", "9", "9", "1", "7"], ["7", "5", "5", "5", "5", "8", "7"], ["8", "7", "f", "f", "7", "7", "8"], ["f", "f", "e", "e", "6", "6", "6"], ["6", "6", "f", "f", "b", "3", "3"], ["5", "5", "d", "d", "6", "f", "f"], ["b", "b", "f", "f", "7", "7", "8"], ["f", "f", "a", "a", "2", "2", "2"], ["4", "4", "c", "c", "d", "d", "5"], ["e", "e", "f", "f", "8", "8", "8"], ["a", "a", "2", "2", "6", "6", "e"], ["b", "b", "5", "5", "9", "9", "1"], ["f", "f", "6", "6", "c", "c", "4"], ["9", "9", "5", "5", "6", "6", "e"], ["c", "4", "7", "7", "4", "c", "c"], ["9", "9", "9", "d", "c", "c", "4"], ["2", "a", "d", "d", "5", "5", "2"], ["c", "c", "4", "4", "2", "a", "a"], ["a", "a", "a", "b", "9", "9", "1"], ["4", "4", "c", "c", "b", "3", "3"], ["1", "1", "b", "5", "5", "d", "1"], ["c", "c", "a", "a", "3", "9", "9"], ["5", "5", "c", "c", "6", "6", "e"], ["e", "e", "6", "c", "d", "d", "5"], ["1", "9", "3", "b", "f", "7", "7"], ["0", "5", "8", "8", "5", "5", "0"], ["2", "2", "a", "e", "6", "5", "d"], ["f", "f", "b", "b", "3", "3", "3"], ["3", "b", "e", "e", "6", "d", "5"], ["f", "4", "c", "c", "9", "1", "9"], ["5", "5", "c", "6", "f", "b", "5"], ["2", "a", "f", "f", "a", "a", "2"], ["c", "c", "5", "9", "9", "1", "0"]];

  level = Math.floor(level);

  let prefixIcon;
  if (level < 1100) {
    prefixIcon = "✫";
  } else if (level < 2100) {
    prefixIcon = "✪";
  } else if (level < 3100) {
    prefixIcon = "⚝";
  } else {
    prefixIcon = "✥";
  }

  let prestige = Math.min(Math.floor(level / 100), 50);
  let levelWithIcon = "[" + level.toString() + prefixIcon + "]";
  let formattedLevel = cycleArrayBeforeChars(bedWarsPrestigeColors[prestige], levelWithIcon, "§");
  return formattedLevel;
}

/*
 * cycleArrayBeforeChars: Cycles through an array and adds items of an array before each character of a string. Useful for adding formatting codes in Bed Wars and SkyWars levels
 * @param {Array} arr - The array containing the formatting codes to cycle through
 * @param {string} str - The string (usually a level)
 * @param {string} addBefore - The string to add before each array item and character
 * @param {string} addAfter - The string to add after the array item, but before the string character (useful for bolding)
 */

function cycleArrayBeforeChars(arr, str, addBefore = "", addAfter = "") {
  let result = "";
  let arrIndex = 0;

  for (let i = 0; i < str.length; i++) {
    result += addBefore;
    result += arr[arrIndex] + addAfter + str[i];
    arrIndex = (arrIndex + 1) % arr.length;
  }

  return result;
}

function formatSkyWarsLevel(level) {
  let skyWarsPrestiges = [
    { colors: ["§7","§7","§7","§7","§7"], icon: "✯" }, // 0
    { colors: ["§f","§f","§f","§f","§f"], icon: "✯" }, // 10
    { colors: ["§6","§6","§6","§6","§6"], icon: "✯" }, // 20
    { colors: ["§b","§b","§b","§b","§b"], icon: "✯" }, // 30
    { colors: ["§c","§c","§c","§c","§c"], icon: "✯" }, // 40
    { colors: ["§d","§d","§d","§d","§d"], icon: "^_^" }, // 50
    { colors: ["§5","§5","§5","§5","§5"], icon: "^_^" }, // 60
    { colors: ["§9","§9","§9","§9","§9"], icon: "^_^" }, // 70
    { colors: ["§e","§e","§e","§e","§e"], icon: "^_^" }, // 80
    { colors: ["§a","§a","§a","§a","§a"], icon: "^_^" }, // 90
    { colors: ["§c","§e","§a","§b","§d"], icon: "@_@" }, // 100
    { colors: ["§4","§c","§c","§c","§4"], icon: "@_@" }, // 110
    { colors: ["§1","§1","§1","§1","§1"], icon: "@_@" }, // 120
    { colors: ["§c","§f","§f","§f","§c"], icon: "@_@" }, // 130
    { colors: ["§4","§4","§4","§4","§4"], icon: "@_@" }, // 140
    { colors: ["§6","§e","§e","§e","§6"], icon: "δvδ" }, // 150
    { colors: ["§2","§2","§2","§2","§2"], icon: "δvδ" }, // 160
    { colors: ["§1","§9","§9","§9","§1"], icon: "δvδ" }, // 170
    { colors: ["§3","§3","§3","§3","§3"], icon: "δvδ" }, // 180
    { colors: ["§4","§e","§e","§e","§4"], icon: "δvδ" }, // 190
    { colors: ["§6","§a","§b","§d","§c"], icon: "zz_zz" }, // 200
    { colors: ["§5","§d","§d","§d","§5"], icon: "zz_zz" }, // 210
    { colors: ["§8","§8","§8","§8","§8"], icon: "zz_zz" }, // 220
    { colors: ["§d","§b","§b","§b","§d"], icon: "zz_zz" }, // 230
    { colors: ["§0","§0","§0","§0","§0"], icon: "zz_zz" }, // 240
    { colors: ["§c","§e","§e","§6","§c"], icon: "■·■" }, // 250
    { colors: ["§0","§6","§6","§e","§0"], icon: "■·■" }, // 260 
    { colors: ["§1","§3","§3","§3","§1"], icon: "■·■" }, // 270
    { colors: ["§a","§a","§e","§a","§2"], icon: "■·■" }, // 280
    { colors: ["§9","§b","§b","§b","§9"], icon: "■·■" }, // 290
    { colors: ["§e","§b","§d","§c","§6"], icon: "ಠ_ಠ" }, // 300
    { colors: ["§8","§7","§7","§7","§8"], icon: "ಠ_ಠ" }, // 310
    { colors: ["§d","§a","§a","§a","§d"], icon: "ಠ_ಠ" }, // 320
    { colors: ["§e","§c","§c","§c","§e"], icon: "ಠ_ಠ" }, // 330
    { colors: ["§b","§b","§d","§a","§a"], icon: "ಠ_ಠ" }, // 340
    { colors: ["§f","§e","§e","§6","§6"], icon: "o...0" }, // 350
    { colors: ["§9","§b","§f","§e","§e"], icon: "o...0" }, // 360
    { colors: ["§e","§f","§f","§8","§8"], icon: "o...0" }, // 370
    { colors: ["§c","§c","§c","§f","§c"], icon: "o...0" }, // 380
    { colors: ["§2","§a","§a","§a","§2"], icon: "o...0" }, // 390
    { colors: ["§a","§d","§c","§6","§e"], icon: ">u<" }, // 400
    { colors: ["§3","§b","§b","§b","§3"], icon: ">u<" }, // 410
    { colors: ["§0","§8","§8","§5","§0"], icon: ">u<" }, // 420
    { colors: ["§6","§f","§f","§b","§3"], icon: ">u<" }, // 430
    { colors: ["§a","§a","§e","§f","§f"], icon: ">u<" }, // 440
    { colors: ["§4","§c","§6","§e","§f"], icon: "v-v" }, // 450
    { colors: ["§9","§3","§d","§5","§4"], icon: "v-v" }, // 460
    { colors: ["§0","§7","§f","§7","§8"], icon: "v-v" }, // 470
    { colors: ["§1","§9","§3","§b","§f"], icon: "v-v" }, // 480
    { colors: ["§9","§f","§f","§c","§4"], icon: "v-v" }, // 490
    { colors: ["§b","§c","§6","§e","§a"], icon: "༼つ◕_◕༽つ" }, // 500
  ];

  level = Math.floor(level);

  let prestige = Math.min(Math.floor(level / 10), skyWarsPrestiges.length - 1);
  let levelWithIcon = "[" + level.toString() + skyWarsPrestiges[prestige]["icon"] + "]";
  let formattedLevel;

  formattedLevel = cycleArrayBeforeChars(skyWarsPrestiges[prestige]["colors"], levelWithIcon, "§");

  return formattedLevel;
}

function getSkyWarsLevel(exp) {
  // Calculates a player's SkyWars level based on their experience stat

  const skyWarsXp = [0, 10, 35, 85, 160, 260, 510, 1010, 1760, 2760, 4010, 5510, 7260, 9260, 11760, 14760, 18260, 22260, 26760, 31760];
  if (exp >= 31760) {
    return (exp - 31760) / 5000 + 20;
  }
  for (a = 0; a < skyWarsXp.length; a++) {
    if (exp < skyWarsXp[a]) {
      return a + (exp - skyWarsXp[a - 1]) / (skyWarsXp[a] - skyWarsXp[a - 1]);
    }
  }
}

function calculateSkyWarsKitPrestige(exp) {
  let prestiges = [
    { req: 75000, style: "rainbow-gradient", title: "VII" },
    { req: 50000, style: "md", title: "VI" },
    { req: 25000, style: "m6", title: "V" },
    { req: 10000, style: "m5", title: "IV" },
    { req: 5000, style: "m9", title: "III" },
    { req: 2500, style: "m2", title: "II" },
    { req: 1000, style: "mf", title: "I" },
  ]

  for (let a = 0; a < prestiges.length; a++) {
    if (exp >= prestiges[a]["req"]) {
      return `<span class="w700 ${prestiges[a]["style"]}">${prestiges[a]["title"]}</span> / `;
    }
  }

  return ``;
}


function getWoolGamesLevel(exp) {
  // Calculates a player's Wool Wars level based on their experience stat
  let level = 100 * Math.floor(exp / 490000) + 1;
  exp = exp % 490000;
  if (exp < 1000) return level + exp / 500;
  level++;
  if (exp < 3000) return level + (exp - 500) / 1000;
  level++;
  if (exp < 6000) return level + (exp - 1500) / 2000;
  level++;
  if (exp < 10000) return level + (exp - 3500) / 3500;
  level++;
  exp -= 10000;
  return level + exp / 5000;
}

function formatWoolGamesLevel(level) {
  let woolGamesPrestigeIcon;

  let woolGamesPrestigeIcons = {
    HEART: { icon: "❤\uFE0E", minStars: 0 },
    PLUS: { icon: "✙\uFE0E", minStars: 100 },
    STAR: { icon: "✫\uFE0E", minStars: 200 },
    PLANE: { icon: "✈\uFE0E", minStars: 300 },
    CROSS: { icon: "✠\uFE0E", minStars: 400 },
    CROWN: { icon: "♕\uFE0E", minStars: 500 },
    LIGHTNING: { icon: "⚡\uFE0E", minStars: 600 },
    NUKE: { icon: "☢\uFE0E", minStars: 700 },
    PENCIL: { icon: "✏\uFE0E", minStars: 900 },
    YIN_YANG: { icon: "☯\uFE0E", minStars: 1000 },
  };

  let woolWarsLevels = [
    { req: 0, color: "§7" },
    { req: 100, color: "§f" },
    { req: 200, color: "§c" },
    { req: 300, color: "§6" },
    { req: 400, color: "§e" },
    { req: 500, color: "§a" },
    { req: 600, color: "§3" },
    { req: 700, color: "§5" },
    { req: 800, color: "§d" },
    { req: 900, color: "rainbow" },
    { req: 1000, color: "§f", bracketColor: "§0" },
  ];

  for (const [key, value] of Object.entries(woolGamesPrestigeIcons)) {
    if (level >= value["minStars"]) {
      woolGamesPrestigeIcon = value["icon"];
    }
  }

  let formattedWoolWarsLevel = getGenericWinsPrefix({
    wins: Math.floor(level),
    winsObject: woolWarsLevels,
    suffix: woolGamesPrestigeIcon,
    useToGo: false,
    useDifferentBracketColors: true,
  })["title"];

  return formattedWoolWarsLevel;
}

function getBuildBattleTitle(score, includeToGo = false) {
  // Gets player's Build Battle title based on an amount of score

  let buildBattleTitles = [
    { req: 0, color: "§f", altName: getTranslation("games.modes.buildbattle.titles.rookie") },
    { req: 100, color: "§7", altName: getTranslation("games.modes.buildbattle.titles.untrained") },
    { req: 250, color: "§8", altName: getTranslation("games.modes.buildbattle.titles.amateur") },
    { req: 500, color: "§a", altName: getTranslation("games.modes.buildbattle.titles.prospect") },
    { req: 1000, color: "§2", altName: getTranslation("games.modes.buildbattle.titles.apprentice") },
    { req: 2000, color: "§b", altName: getTranslation("games.modes.buildbattle.titles.experienced") },
    { req: 3500, color: "§3", altName: getTranslation("games.modes.buildbattle.titles.seasoned") },
    { req: 5000, color: "§9", altName: getTranslation("games.modes.buildbattle.titles.trained") },
    { req: 7500, color: "§1", altName: getTranslation("games.modes.buildbattle.titles.skilled") },
    { req: 10000, color: "§5", altName: getTranslation("games.modes.buildbattle.titles.talented") },
    { req: 15000, color: "§2", altName: getTranslation("games.modes.buildbattle.titles.professional") },
    { req: 20000, color: "§c", altName: getTranslation("games.modes.buildbattle.titles.artisan") },
    { req: 30000, color: "§4", altName: getTranslation("games.modes.buildbattle.titles.expert") },
    { req: 50000, color: "§6", altName: getTranslation("games.modes.buildbattle.titles.master") },
    { req: 100000, color: "§a§l", altName: getTranslation("games.modes.buildbattle.titles.legend") },
    { req: 200000, color: "§b§l", altName: getTranslation("games.modes.buildbattle.titles.grandmaster") },
    { req: 300000, color: "§d§l", altName: getTranslation("games.modes.buildbattle.titles.celestial") },
    { req: 400000, color: "§c§l", altName: getTranslation("games.modes.buildbattle.titles.divine") },
    { req: 500000, color: "§6§l", altName: getTranslation("games.modes.buildbattle.titles.ascended") },
  ];

  let titleObject = getGenericWinsPrefix({
    wins: score,
    winsObject: buildBattleTitles,
    useToGo: includeToGo,
    useBrackets: false,
    alternativeNaming: true,
  });
  return titleObject;
}

let pitXpMap = [15, 30, 50, 75, 125, 300, 600, 800, 900, 1000, 1200, 1500, 0];
let pitPrestiges = [100, 110, 120, 130, 140, 150, 175, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2400, 2800, 3200, 3600, 4000, 4500, 5000, 7500, 10000, 10100, 10100, 10100, 10100, 10100, 20000, 30000, 40000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 300000, 500000, 1000000, 5000000, 10000000];
let pitPrestigeXp = [65950, 138510, 217680, 303430, 395760, 494700, 610140, 742040, 906930, 1104780, 1368580, 1698330, 2094030, 2555680, 3083280, 3676830, 4336330, 5127730, 6051030, 7106230, 8293330, 9612330, 11195130, 13041730, 15152130, 17526330, 20164330, 23132080, 26429580, 31375830, 37970830, 44631780, 51292730, 57953680, 64614630, 71275580, 84465580, 104250580, 130630580, 163605580, 213068080, 279018080, 361455580, 460380580, 575793080, 707693080, 905543080, 1235293080, 1894793080, 5192293080, 11787293080];

let pitPrestigeColors = ["§7", "§9", "§e", "§6", "§c", "§5", "§d", "§f", "§b", "§1", "§0", "§4", "§8"];
let pitLevelColors = ["§7", "§9", "§3", "§2", "§a", "§e", "§6", "§c", "§4", "§5", "§d", "§f", "§b"];

/*
 * Converts an amount of XP to a level in The Pit
 * @param {number} experience - The amount of XP to convert
 * @param {number} dataType - The type of data to return
 *   Data Types:
 *    0: Unformatted      - "[I-26]"
 *    1: Formatting codes - "§9[§eI§9-..."
 *    2: Just prestige    - 1
 *    3: Just level       - 26
 *    4: [120] of pres XP - 138510
 */
function pitXpToLevel(experience, dataType = 1) {
  thisPrestige = 0;
  thisLevel = 120;
  xpAtLevel120 = 0;

  for (; thisPrestige < 50; thisPrestige++) {
    if (experience <= pitPrestigeXp[thisPrestige]) {
      break;
    }
  }

  xpAtLevel120 = pitPrestigeXp[thisPrestige];

  while (xpAtLevel120 > experience) {
    thisLevel = thisLevel - 1;
    xpAtLevel120 = xpAtLevel120 - Math.ceil((pitXpMap[Math.floor(thisLevel / 10)] * pitPrestiges[thisPrestige]) / 100);
  }

  thisLevelColor = pitLevelColors[Math.floor(thisLevel / 10)];
  if (thisLevel >= 60) {
    thisLevelColor += "§l";
  }

  if (thisPrestige === 0) {
    thisPrestigeColor = pitPrestigeColors[0];
  } else if (thisPrestige === 48 || thisPrestige === 49) {
    thisPrestigeColor = pitPrestigeColors[11];
  } else if (thisPrestige === 50) {
    thisPrestigeColor = pitPrestigeColors[12];
  } else {
    thisPrestigeColor = pitPrestigeColors[Math.floor(thisPrestige / 5) + 1];
  }

  if (thisLevel == 0) {
    thisLevel = 1;
  }

  if (dataType == 2) {
    return thisPrestige;
  } else if (dataType == 3) {
    return thisLevel;
  } else if (thisPrestige == 0) {
    if (dataType == 0) {
      return "[" + thisLevel + "]";
    } else if (dataType == 1) {
      return `§7[${thisLevelColor}${thisLevel}§7]`;
    }
  } else {
    if (dataType == 0) {
      return "[" + convertToRoman(thisPrestige) + "-" + thisLevel + "]";
    } else {
      return `${thisPrestigeColor}[§e${convertToRoman(thisPrestige)}-${thisLevelColor}${thisLevel}${thisPrestigeColor}]`;
    }
  }
}

function getPaintballTitle(kills, prefixColor) {
  let paintballTitles = [
    { req: 0, internalId: "DARK_GRAY", color: "§8" },
    { req: 1000, internalId: "GRAY", color: "§7" },
    { req: 2500, internalId: "WHITE", color: "§f" },
    { req: 5000, internalId: "DARK_GREEN", color: "§2" },
    { req: 10000, internalId: "YELLOW", color: "§e" },
    { req: 20000, internalId: "GREEN", color: "§a" },
    { req: 50000, internalId: "BLUE", color: "§9" },
    { req: 75000, internalId: "AQUA", color: "§b" },
    { req: 100000, internalId: "PINK", color: "§d" },
    { req: 200000, internalId: "PURPLE", color: "§5" },
    { req: 500000, internalId: "RED", color: "§c" },
    { req: 1000000, internalId: "GOLD", color: "§6" },
  ];

  return getGenericWinsPrefix({
    wins: und(kills),
    winsObject: paintballTitles,
    definedColor: prefixColor,
    useToGo: false,
    useThousandsSeparator: true,
  })["title"];
}

function getTKRTitle(golds, prefixColor) {
  let tkrTitles = [
    { req: 0, color: "§8", internalId: "dark_gray" },
    { req: 5, color: "§7", internalId: "gray" },
    { req: 25, color: "§f", internalId: "white" },
    { req: 50, color: "§b", internalId: "aqua" },
    { req: 100, color: "§a", internalId: "green" },
    { req: 200, color: "§e", internalId: "yellow" },
    { req: 300, color: "§9", internalId: "blue" },
    { req: 400, color: "§d", internalId: "purple" },
    { req: 500, color: "§6", internalId: "gold" },
    { req: 750, color: "§2", internalId: "dark_green" },
    { req: 1000, color: "§1", internalId: "dark_blue" },
    { req: 2500, color: "§5", internalId: "dark_purple" },
    { req: 5000, color: "§4", internalId: "dark_red" },
    { req: 10000, color: "§0", internalId: "black" },
  ];

  return getGenericWinsPrefix({
    wins: golds,
    winsObject: tkrTitles,
    definedColor: prefixColor,
    useToGo: false,
    suffix: "✪",
    useThousandsSeparator: true,
  })["title"];
}

function getArenaBrawlTitle(wins, prefixColor) {
  let arenaWinPrefixes = [
    { req: 0, internalId: "dark_gray", color: "§8" },
    { req: 500, internalId: "gray", color: "§7" },
    { req: 1000, internalId: "green", color: "§a" },
    { req: 2000, internalId: "dark_green", color: "§2" },
    { req: 3000, internalId: "purple", color: "§d" },
    { req: 4000, internalId: "dark_purple", color: "§5" },
    { req: 5000, internalId: "red", color: "§c" },
    { req: 7500, internalId: "dark_red", color: "§4" },
    { req: 10000, internalId: "gold", color: "§6" },
    { req: 15000, internalId: "rainbow", color: "rainbow", colorArray: ["§c", "§6", "§e", "§a", "§b", "§d", "§9", "§c"] },
  ];

  return getGenericWinsPrefix({
    wins: wins,
    winsObject: arenaWinPrefixes,
    definedColor: prefixColor,
    useToGo: false,
    useThousandsSeparator: true /* Arena Brawl titles have commas */,
  })["title"];
}

function getQuakecraftTitle(wins, prefixColor) {
  let quakecraftTitles = [
    { req: 0, color: "§8", internalId: "DARK_GRAY" },
    { req: 25000, color: "§7", internalId: "GRAY" },
    { req: 50000, color: "§f", internalId: "WHITE" },
    { req: 75000, color: "§2", internalId: "DARK_GREEN" },
    { req: 100000, color: "§e", internalId: "YELLOW" },
    { req: 200000, color: "§a", internalId: "GREEN" },
    { req: 300000, color: "§9", internalId: "BLUE" },
    { req: 400000, color: "§3", internalId: "AQUA" },
    { req: 500000, color: "§d", internalId: "PURPLE" },
    { req: 600000, color: "§5", internalId: "DARK_PURPLE" },
    { req: 750000, color: "§c", internalId: "RED" },
    { req: 1000000, color: "§6", internalId: "GOLD" },
    { req: 2000000, color: "§0", internalId: "BLACK" },
  ];

  return getGenericWinsPrefix({
    wins: wins,
    winsObject: quakecraftTitles,
    definedColor: prefixColor,
    useToGo: false,
    useThousandsSeparator: true,
  })["title"];
}

function getVampireZTitle(wins, mode) {
  if (mode == "human") {
    let vampireZWinPrefixes = [
      { req: 0, color: "§8" },
      { req: 20, color: "§7" },
      { req: 50, color: "§f" },
      { req: 100, color: "§6" },
      { req: 150, color: "§e" },
      { req: 200, color: "§2" },
      { req: 250, color: "§a" },
      { req: 300, color: "§5" },
      { req: 500, color: "§d" },
      { req: 750, color: "§1" },
      { req: 1000, color: "§1§l" },
      { req: 1500, color: "§9§l" },
      { req: 2000, color: "§3§l" },
      { req: 2500, color: "§b§l" },
      { req: 3000, color: "§c§l" },
      { req: 5000, color: "§4§l" },
      { req: 10000, color: "§0§l" },
      { req: 15000, color: "rainbow", colorArray: ["§0§l", "§4§l", "§6§l", "§e§l", "§a§l", "§3§l", "§0§l"], bold: true },
    ];

    return getGenericWinsPrefix({
      wins: wins,
      winsObject: vampireZWinPrefixes,
      useToGo: false,
    })["title"];
  } else {
    let vampireZWinPrefixes = [
      { req: 0, color: "§8" },
      { req: 50, color: "§f" },
      { req: 100, color: "§e" },
      { req: 250, color: "§a" },
      { req: 500, color: "§d" },
      { req: 750, color: "§b" },
      { req: 1000, color: "§c" },
      { req: 1500, color: "§6" },
      { req: 2000, color: "§3" },
      { req: 2500, color: "§a" },
      { req: 3000, color: "§2" },
      { req: 5000, color: "§9" },
      { req: 7500, color: "§1" },
      { req: 10000, color: "§1§l" },
      { req: 20000, color: "§4" },
      { req: 30000, color: "§4§l" },
      { req: 40000, color: "§5§l" },
      { req: 50000, color: "§0§l" },
      { req: 100000, color: "rainbow", colorArray: ["§0§l", "§r§4§l", "§6§l", "§e§l", "§a§l", "§2§l", "§9§l", "§0§l"], bold: true },
    ];

    return getGenericWinsPrefix({
      wins: wins,
      winsObject: vampireZWinPrefixes,
      useToGo: false,
    })["title"];
  }
}

function getUHCTitle(score, useToGo = true) {
  let uhcPrefixes = [
    { req: 0, color: "§6", altName: "1" },
    { req: 10, color: "§6", altName: "2" },
    { req: 60, color: "§6", altName: "3" },
    { req: 210, color: "§6", altName: "4" },
    { req: 460, color: "§6", altName: "5" },
    { req: 960, color: "§6", altName: "6" },
    { req: 1710, color: "§6", altName: "7" },
    { req: 2710, color: "§6", altName: "8" },
    { req: 5210, color: "§6", altName: "9" },
    { req: 10210, color: "§6", altName: "10" },
    { req: 13210, color: "§6", altName: "11" },
    { req: 16210, color: "§6", altName: "12" },
    { req: 19210, color: "§6", altName: "13" },
    { req: 22210, color: "§6", altName: "14" },
    { req: 25210, color: "§6", altName: "15" },
  ];

  return getGenericWinsPrefix({
    wins: score,
    winsObject: uhcPrefixes,
    useToGo: useToGo,
    suffix: "✫",
    alternativeNaming: true,
  })["title"];
}

function getSpeedUHCTitle(score, useToGo = true) {
  let speedUHCPrefixes = [
    { req: 0, color: "§d", altName: "1" },
    { req: 50, color: "§d", altName: "2" },
    { req: 300, color: "§d", altName: "3" },
    { req: 1050, color: "§d", altName: "4" },
    { req: 2560, color: "§d", altName: "5" },
    { req: 5550, color: "§d", altName: "6" },
    { req: 15550, color: "§d", altName: "7" },
    { req: 30550, color: "§d", altName: "8" },
    { req: 55550, color: "§d", altName: "9" },
    { req: 85550, color: "§d", altName: "10" },
  ];

  return getGenericWinsPrefix({
    wins: score,
    winsObject: speedUHCPrefixes,
    useToGo: useToGo,
    suffix: "❋",
    alternativeNaming: true,
  })["title"];
}

function getTNTGamesTitle(wins, useHigh = false, prefixColor) {
  const tntGamesLowPrefixes = [
    { req: 0, internalId: "dark_gray", color: "§8" },
    { req: 15, internalId: "gray", color: "§7" },
    { req: 50, internalId: "white", color: "§f" },
    { req: 100, internalId: "dark_green", color: "§2" },
    { req: 250, internalId: "green", color: "§a" },
    { req: 500, internalId: "blue", color: "§9" },
    { req: 1000, internalId: "dark_purple", color: "§5" },
    { req: 1500, internalId: "gold", color: "§6" },
    { req: 2000, internalId: "red", color: "§c" },
    { req: 5000, internalId: "black", color: "§0" },
    { req: 10000, internalId: "rainbow", color: "rainbow" },
  ];

  const tntGamesHighPrefixes = [
    { req: 0, internalId: "dark_gray", color: "§8" },
    { req: 25, internalId: "gray", color: "§7" },
    { req: 100, internalId: "white", color: "§f" },
    { req: 250, internalId: "dark_green", color: "§2" },
    { req: 500, internalId: "green", color: "§a" },
    { req: 1000, internalId: "blue", color: "§9" },
    { req: 2500, internalId: "dark_purple", color: "§5" },
    { req: 5000, internalId: "gold", color: "§6" },
    { req: 7500, internalId: "red", color: "§c" },
    { req: 10000, internalId: "black", color: "§0" },
    { req: 15000, internalId: "rainbow", color: "rainbow" },
  ];

  let prefix = useHigh ? tntGamesHighPrefixes : tntGamesLowPrefixes;

  return getGenericWinsPrefix({
    wins: wins,
    winsObject: prefix,
    useToGo: false,
    definedColor: prefixColor,
  })["title"];
}

const languageJSON = require("../public/translation/en-CA.json");

function getTranslation(key) {
  let keys;
  // If the key is a string, split it into an array
  if (typeof key === "string") {
    keys = key.split(".");
  } else {
    keys = key;
  }

  let languageJSONSubset = languageJSON;

  for (const k of keys) {
    if (languageJSONSubset === undefined) {
      console.warn("Unable to find key " + key + " in translation file");
      return "⛔" + keys.join(".");
    }
    languageJSONSubset = languageJSONSubset[k];
  }

  if (languageJSONSubset !== undefined) {
    return languageJSONSubset;
  } else {
    console.warn("Unable to find key " + key + " in translation file");
    return "⚠️" + keys.join(".");
  }
}

const leaderboards = [
    {
      translation: "home.favorites",
      icon: "special/PATREON",
      document_id: "leaderboard-favorites",
      leaderboards: [
      ],
    },
    {
      translation: "games.network",
      icon: "logo/hypixel_logo",
      leaderboards: [
        { translation: "statistics.level", id: "NETWORK_NETWORK_LEVEL", format: "decimal_2" },
        { translation: "statistics.achievement_points", id: "NETWORK_ACHIEVEMENT_POINTS", format: "number" },
        { translation: "statistics.karma", id: "NETWORK_KARMA", format: "number" },
        { translation: "statistics.quests_completed", id: "NETWORK_QUESTS_COMPLETED", format: "number" },
        { translation: "statistics.ranks_gifted", id: "NETWORK_RANKS_GIFTED", format: "number" },
        { translation: "statistics.current_reward_streak", id: "NETWORK_REWARDS_CURRENT_STREAK", format: "number" },
        { translation: "statistics.highest_reward_streak", id: "NETWORK_REWARDS_HIGHEST_STREAK", format: "number" },
        { translation: "statistics.first_login", id: "NETWORK_FIRST_LOGIN", format: "date_and_time" },
      ],
    },

    {
      translation: "games.modes.network.guild",
      icon: "icon/minecraft/head_guild",
      leaderboards: [
        { translation: "statistics.level", id: "GUILD_LEVEL", format: "decimal_2" },
      ],
    },

    {
      translation: "games.arcade",
      icon: "icon/minecraft/slime_ball",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_WINS", format: "number" },
            { translation: "statistics.coins", id: "ARCADE_COINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.blockingdead",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_BLOCKING_DEAD_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_BLOCKING_DEAD_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.bountyhunters",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_BOUNTY_HUNTERS_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_BOUNTY_HUNTERS_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.creeperattack",
          leaderboards: [{ translation: "statistics.max_wave", id: "ARCADE_CREEPER_ATTACK_MAX_WAVE", format: "number" }],
        },
        {
          translation: "games.modes.arcade.dragonwars",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_DRAGON_WARS_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_DRAGON_WARS_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.dropper",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_DROPPER_WINS", format: "number" },
            { translation: "statistics.best_time", id: "ARCADE_DROPPER_BEST_TIME", format: "duration_milliseconds" },
          ],
        },
        {
          translation: "games.modes.arcade.enderspleef",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_ENDER_SPLEEF_WINS", format: "number" },
            { translation: "statistics.blocks_destroyed", id: "ARCADE_ENDER_SPLEEF_BLOCKS_DESTROYED", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.farmhunt",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_FARM_HUNT_WINS", format: "number" },
            { translation: "statistics.wins_hunter", id: "ARCADE_FARM_HUNT_HUNTER_WINS", format: "number" },
            { translation: "statistics.wins_animal", id: "ARCADE_FARM_HUNT_ANIMAL_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_FARM_HUNT_KILLS", format: "number" },
            { translation: "statistics.taunts", id: "ARCADE_FARM_HUNT_TAUNTS_USED", format: "number" },
            { translation: "statistics.poop_collected", id: "ARCADE_FARM_HUNT_POOP_COLLECTED", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.football",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_FOOTBALL_WINS", format: "number" },
            { translation: "statistics.goals", id: "ARCADE_FOOTBALL_GOALS", format: "number" },
            { translation: "statistics.kicks", id: "ARCADE_FOOTBALL_KICKS", format: "number" },
            { translation: "statistics.power_kicks", id: "ARCADE_FOOTBALL_POWER_KICKS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.galaxywars",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_GALAXY_WARS_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_GALAXY_WARS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "ARCADE_GALAXY_WARS_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.arcade.hideandseek.category",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_HIDE_AND_SEEK_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.hideandseek.party_pooper"], id: "ARCADE_HIDE_AND_SEEK_PARTY_POOPER_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.hideandseek.prop_hunt"], id: "ARCADE_HIDE_AND_SEEK_PROP_HUNT_WINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.holeinthewall",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_HOLE_IN_THE_WALL_WINS", format: "number" },
            { translation: "statistics.record_qualifications", id: "ARCADE_HOLE_IN_THE_WALL_QUALIFICATIONS_RECORD", format: "number" },
            { translation: "statistics.record_finals", id: "ARCADE_HOLE_IN_THE_WALL_FINALS_RECORD", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.hypixelsays",
          leaderboards: [{ translation: "statistics.wins", id: "ARCADE_HYPIXEL_SAYS_WINS", format: "number" }],
        },
        {
          translation: "games.modes.arcade.miniwalls",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_MINI_WALLS_WINS", format: "number" },
            { translation: "statistics.final_kills", id: "ARCADE_MINI_WALLS_FINAL_KILLS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_MINI_WALLS_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.partygames",
          leaderboards: [{ translation: "statistics.wins", id: "ARCADE_PARTY_WINS", format: "number" }],
        },
        {
          translation: "games.modes.arcade.pixelpainters",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_PIXEL_PAINTERS_WINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.pixelparty.category",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_PIXEL_PARTY_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.pixelparty.normal"], id: "ARCADE_PIXEL_PARTY_NORMAL_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.pixelparty.hyper"], id: "ARCADE_PIXEL_PARTY_HYPER_WINS", format: "number" },
            { translation: "statistics.powerups", id: "ARCADE_PIXEL_PARTY_POWERUPS_COLLECTED", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.throwout",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_THROW_OUT_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_THROW_OUT_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.zombies.category",
          leaderboards: [
            { translation: "statistics.wins", id: "ARCADE_ZOMBIES_WINS", format: "number" },
            { translation: "statistics.kills", id: "ARCADE_ZOMBIES_KILLS", format: "number" },
            { translation: "statistics.windows_repaired", id: "ARCADE_ZOMBIES_WINDOWS_REPAIRED", format: "number" },
            { translation: "statistics.revives", id: "ARCADE_ZOMBIES_PLAYERS_REVIVED", format: "number" },
            { translation: "statistics.doors_opened", id: "ARCADE_ZOMBIES_DOORS_OPENED", format: "number" },
          ],
        },
        {
          translation: "games.modes.arcade.seasonal.category",
          include_name_in_full_translation: false,
          leaderboards: [
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.seasonal.grinch_simulator_v2"], id: "ARCADE_GRINCH_SIMULATOR_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.gifts_stolen", "games.modes.arcade.seasonal.grinch_simulator_v2"], id: "ARCADE_GRINCH_SIMULATOR_GIFTS_STOLEN", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.seasonal.halloween_simulator"], id: "ARCADE_HALLOWEEN_SIMULATOR_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.seasonal.easter_simulator"], id: "ARCADE_EASTER_SIMULATOR_WINS", format: "number" },
            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.seasonal.santa_simulator"], id: "ARCADE_SANTA_SIMULATOR_WINS", format: "number" },

            { translation: "multi", translations: ["statistics.wins", "games.modes.arcade.seasonal.scuba_simulator"], id: "ARCADE_SCUBA_SIMULATOR_WINS", format: "number" },
          ],
        },
      ],
    },
    {
      translation: "games.arena",
      icon: "icon/minecraft/blaze_powder",
      leaderboards: [
        { translation: "statistics.wins", id: "ARENA_BRAWL_WINS", format: "arena_wins" },
        { translation: "statistics.wlr", id: "ARENA_BRAWL_WLR", format: "decimal_2" },
        { translation: "statistics.kills", id: "ARENA_BRAWL_KILLS", format: "number" },
        { translation: "statistics.kdr", id: "ARENA_BRAWL_KDR", format: "decimal_2" },
        { translation: "statistics.coins", id: "ARENA_BRAWL_COINS", format: "number" },
        { translation: "statistics.magical_chests", id: "ARENA_BRAWL_MAGICAL_CHESTS", format: "number" },
      ],
    },
    {
      translation: "games.bedwars",
      icon: "icon/minecraft/red_bed",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.level", id: "BEDWARS_EXP", format: "bedwars_experience" },
            { translation: "statistics.wins", id: "BEDWARS_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_FKDR", format: "decimal_2" },
            { translation: "statistics.kills", id: "BEDWARS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "BEDWARS_KDR", format: "decimal_2" },
            { translation: "statistics.beds_broken", id: "BEDWARS_BEDS", format: "number" },
            { translation: "statistics.bblr", id: "BEDWARS_BBLR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_WINSTREAK", format: "number" },
            { translation: "statistics.challenges_completed", id: "BEDWARS_COMPLETED_CHALLENGES", format: "number" },
            { translation: "statistics.tokens", id: "BEDWARS_TOKENS", format: "number" },
            { translation: "statistics.slumber_tickets_earned", id: "BEDWARS_TICKETS_EARNED", format: "number" },
            { translation: "statistics.iron_collected", id: "BEDWARS_COLLECTED_IRON", format: "number" },
            { translation: "statistics.gold_collected", id: "BEDWARS_COLLECTED_GOLD", format: "number" },
            { translation: "statistics.diamonds_collected", id: "BEDWARS_COLLECTED_DIAMONDS", format: "number" },
            { translation: "statistics.emeralds_collected", id: "BEDWARS_COLLECTED_EMERALDS", format: "number" },
          ],
        },
        {
          translation: "games.modes.bedwars.eight_one",
          leaderboards: [
            { translation: "statistics.wins", id: "BEDWARS_SOLO_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_SOLO_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_SOLO_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_SOLO_FKDR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_SOLO_WINSTREAK", format: "number" },
          ],
        },
        {
          translation: "games.modes.bedwars.eight_two",
          leaderboards: [
            { translation: "statistics.wins", id: "BEDWARS_DOUBLES_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_DOUBLES_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_DOUBLES_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_DOUBLES_FKDR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_DOUBLES_WINSTREAK", format: "number" },
          ],
        },
        {
          translation: "games.modes.bedwars.four_three",
          leaderboards: [
            { translation: "statistics.wins", id: "BEDWARS_THREES_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_THREES_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_THREES_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_THREES_FKDR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_THREES_WINSTREAK", format: "number" },
          ],
        },
        {
          translation: "games.modes.bedwars.four_four",
          leaderboards: [
            { translation: "statistics.wins", id: "BEDWARS_FOURS_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_FOURS_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_FOURS_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_FOURS_FKDR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_FOURS_WINSTREAK", format: "number" },
          ],
        },
        {
          translation: "games.modes.bedwars.two_four",
          leaderboards: [
            { translation: "statistics.wins", id: "BEDWARS_FOURVFOUR_WINS", format: "number" },
            { translation: "statistics.wlr", id: "BEDWARS_FOURVFOUR_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "BEDWARS_FOURVFOUR_FINALS", format: "number" },
            { translation: "statistics.fkdr", id: "BEDWARS_FOURVFOUR_FKDR", format: "decimal_2" },
            { translation: "statistics.winstreak", id: "BEDWARS_FOURVFOUR_WINSTREAK", format: "number" },
          ],
        },
      ],
    },
    {
      translation: "games.blitz",
      icon: "icon/minecraft/diamond_sword",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "BLITZ_WINS", format: "number" },
            { translation: "statistics.kills", id: "BLITZ_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "BLITZ_KDR", format: "decimal_2" },
            { translation: "statistics.damage_dealt", id: "BLITZ_DAMAGE_DEALT", format: "large_number" },
            { translation: "statistics.chests_opened", id: "BLITZ_CHESTS_OPENED", format: "number" },
            { translation: "statistics.blitz_stars_found", id: "BLITZ_STARS_FOUND", format: "number" },
            { translation: "statistics.coins", id: "BLITZ_COINS", format: "number" },
            { translation: "statistics.prestige_twos", id: "BLITZ_PRESTIGE_TWOS", format: "number" },
          ],
        },
        {
          translation: "games.modes.classic.quakecraft.solo",
          leaderboards: [
            { translation: "statistics.wins", id: "BLITZ_SOLO_WINS", format: "number" },
            { translation: "statistics.kills", id: "BLITZ_SOLO_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.classic.quakecraft.teams",
          leaderboards: [
            { translation: "statistics.wins", id: "BLITZ_TEAM_WINS", format: "number" },
            { translation: "statistics.kills", id: "BLITZ_TEAM_KILLS", format: "number" },
          ],
        },
      ],
    },
    {
      translation: "games.buildbattle",
      icon: "icon/minecraft/crafting_table",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.score", id: "BUILD_BATTLE_SCORE", format: "buildbattle_experience" },
            { translation: "statistics.wins", id: "BUILD_BATTLE_WINS", format: "number" },
            { translation: "statistics.votes", id: "BUILD_BATTLE_VOTES", format: "number" },
            { translation: "statistics.tokens", id: "BUILD_BATTLE_TOKENS", format: "number" },
          ],
        },
        {
          translation: "games.modes.buildbattle.solo_normal",
          leaderboards: [{ translation: "statistics.wins", id: "BUILD_BATTLE_SOLO_WINS", format: "number" }],
        },
        {
          translation: "games.modes.buildbattle.teams_normal",
          leaderboards: [{ translation: "statistics.wins", id: "BUILD_BATTLE_TEAM_WINS", format: "number" }],
        },
        {
          translation: "games.modes.buildbattle.solo_pro",
          leaderboards: [{ translation: "statistics.wins", id: "BUILD_BATTLE_PRO_WINS", format: "number" }],
        },
        {
          translation: "games.modes.buildbattle.guess_the_build",
          leaderboards: [
            { translation: "statistics.wins", id: "BUILD_BATTLE_GTB_WINS", format: "number" },
            { translation: "statistics.correct_guesses", id: "BUILD_BATTLE_GTB_CORRECT_GUESSES", format: "number" },
          ],
        },
        {
          translation: "games.modes.buildbattle.speed_builders",
          leaderboards: [{ translation: "statistics.wins", id: "BUILD_BATTLE_SPEED_BUILDERS_WINS", format: "number" }],
        },
      ],
    },

    {
      translation: "games.copsandcrims",
      icon: "icon/minecraft/iron_bars",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.score", id: "COPS_AND_CRIMS_SCORE", format: "copsandcrims_score" },
            { translation: "statistics.wins", id: "COPS_AND_CRIMS_WINS", format: "number" },
            { translation: "statistics.kills", id: "COPS_AND_CRIMS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "COPS_AND_CRIMS_KDR", format: "decimal_2" },
            { translation: "statistics.grenade_kills", id: "COPS_AND_CRIMS_GRENADE_KILLS", format: "number" },
            { translation: "statistics.assists", id: "COPS_AND_CRIMS_ASSISTS", format: "number" },
            { translation: "statistics.coins", id: "COPS_AND_CRIMS_COINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.copsandcrims.defusal",
          leaderboards: [
            { translation: "statistics.wins", id: "COPS_AND_CRIMS_DEFUSAL_WINS", format: "number" },
            { translation: "statistics.kills", id: "COPS_AND_CRIMS_DEFUSAL_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "COPS_AND_CRIMS_DEFUSAL_KDR", format: "decimal_2" },
            { translation: "statistics.assists", id: "COPS_AND_CRIMS_DEFUSAL_ASSISTS", format: "number" },
            { translation: "statistics.bombs_planted", id: "COPS_AND_CRIMS_DEFUSAL_BOMBS_PLANTED", format: "number" },
            { translation: "statistics.bombs_defused", id: "COPS_AND_CRIMS_DEFUSAL_BOMBS_DEFUSED", format: "number" },
            { translation: "statistics.round_wins", id: "COPS_AND_CRIMS_DEFUSAL_ROUND_WINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.copsandcrims.deathmatch",
          leaderboards: [
            { translation: "statistics.wins", id: "COPS_AND_CRIMS_TEAM_DEATHMATCH_WINS", format: "number" },
            { translation: "statistics.kills", id: "COPS_AND_CRIMS_TEAM_DEATHMATCH_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "COPS_AND_CRIMS_TEAM_DEATHMATCH_KDR", format: "decimal_2" },
            { translation: "statistics.assists", id: "COPS_AND_CRIMS_TEAM_DEATHMATCH_ASSISTS", format: "number" },
          ],
        },
        {
          translation: "games.modes.copsandcrims.gungame",
          leaderboards: [
            { translation: "statistics.wins", id: "COPS_AND_CRIMS_GUN_GAME_WINS", format: "number" },
            { translation: "statistics.kills", id: "COPS_AND_CRIMS_GUN_GAME_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "COPS_AND_CRIMS_GUN_GAME_KDR", format: "decimal_2" },
            { translation: "statistics.assists", id: "COPS_AND_CRIMS_GUN_GAME_ASSISTS", format: "number" },
            { translation: "statistics.fastest_win", id: "COPS_AND_CRIMS_GUN_GAME_FASTEST_WIN", format: "duration_milliseconds" },
          ],
        },
      ],
    },

    {
      translation: "games.duels",
      icon: "icon/minecraft/fishing_rod",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "DUELS_WINS", format: "number" },
            { translation: "statistics.wlr", id: "DUELS_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "DUELS_KILLS", format: "number" },
            { translation: "statistics.damage_dealt", id: "DUELS_DAMAGE_DEALT", format: "large_number" },
            { translation: "statistics.health_regenerated", id: "DUELS_HEALTH_REGENERATED", format: "large_number" },
            { translation: "statistics.winstreak", id: "DUELS_WINSTREAK", format: "number" },
            { translation: "statistics.best_winstreak", id: "DUELS_BEST_WINSTREAK", format: "number" },
            { translation: "statistics.clicks", id: "DUELS_CLICKS", format: "number" },
            { translation: "statistics.tokens", id: "DUELS_TOKENS", format: "number" },
          ],
        },
        {
          translation: "games.modes.duels.blitz.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_BLITZ_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.bow.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_BOW_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.bowspleef.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_BOWSPLEEF_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.boxing.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_BOXING_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.bridge.category",
          leaderboards: [
            { translation: "statistics.wins", id: "DUELS_BRIDGE_WINS", format: "number" },
            { translation: "statistics.goals", id: "DUELS_BRIDGE_GOALS", format: "number" },
          ],
        },
        {
          translation: "games.modes.duels.classic.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_CLASSIC_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.combo.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_COMBO_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.mw.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_MW_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.potion.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_NODEBUFF_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.op.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_OP_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.parkour.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_PARKOUR_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.sw.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_SW_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.sumo.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_SUMO_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.uhc.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_UHC_WINS", format: "number" }],
        },
        {
          translation: "games.modes.duels.arena.category",
          leaderboards: [{ translation: "statistics.wins", id: "DUELS_ARENA_WINS", format: "number" }],
        },
      ],
    },
    {
      translation: "games.megawalls",
      icon: "icon/minecraft/soul_sand",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.class_points", id: "MEGA_WALLS_CLASS_POINTS", format: "number" },
            { translation: "statistics.wins", id: "MEGA_WALLS_WINS", format: "number" },
            { translation: "statistics.wlr", id: "MEGA_WALLS_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "MEGA_WALLS_FINAL_KILLS", format: "number" },
            { translation: "statistics.fkdr", id: "MEGA_WALLS_FKDR", format: "decimal_2" },
            { translation: "statistics.kills", id: "MEGA_WALLS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "MEGA_WALLS_KDR", format: "decimal_2" },
            { translation: "statistics.wither_kills", id: "MEGA_WALLS_WITHER_KILLS", format: "number" },
            { translation: "statistics.coins", id: "MEGA_WALLS_COINS", format: "number" },
            { translation: "statistics.mythic_favor", id: "MEGA_WALLS_MYTHIC_FAVOR", format: "number" },
            { translation: "statistics.prestige_fours", id: "MEGA_WALLS_PRESTIGE_FOURS", format: "number" },
            { translation: "statistics.prestige_fives", id: "MEGA_WALLS_PRESTIGE_FIVES", format: "number" },
          ],
        },
        {
          translation: "games.modes.megawalls.standard",
          leaderboards: [
            { translation: "statistics.wins", id: "MEGA_WALLS_STANDARD_WINS", format: "number" },
            { translation: "statistics.wlr", id: "MEGA_WALLS_STANDARD_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "MEGA_WALLS_STANDARD_FINAL_KILLS", format: "number" },
            { translation: "statistics.fkdr", id: "MEGA_WALLS_STANDARD_FKDR", format: "decimal_2" },
            { translation: "statistics.kills", id: "MEGA_WALLS_STANDARD_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "MEGA_WALLS_STANDARD_KDR", format: "decimal_2" },
            { translation: "statistics.wither_kills", id: "MEGA_WALLS_STANDARD_WITHER_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.megawalls.faceoff",
          leaderboards: [
            { translation: "statistics.wins", id: "MEGA_WALLS_FACEOFF_WINS", format: "number" },
            { translation: "statistics.wlr", id: "MEGA_WALLS_FACEOFF_WLR", format: "decimal_2" },
            { translation: "statistics.final_kills", id: "MEGA_WALLS_FACEOFF_FINAL_KILLS", format: "number" },
            { translation: "statistics.fkdr", id: "MEGA_WALLS_FACEOFF_FKDR", format: "decimal_2" },
            { translation: "statistics.kills", id: "MEGA_WALLS_FACEOFF_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "MEGA_WALLS_FACEOFF_KDR", format: "decimal_2" },
            { translation: "statistics.wither_kills", id: "MEGA_WALLS_FACEOFF_WITHER_KILLS", format: "number" },
          ],
        },
      ],
    },

    {
      translation: "games.murdermystery",
      icon: "icon/minecraft/bow",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "MURDER_MYSTERY_WINS", format: "number" },
            { translation: "statistics.kills", id: "MURDER_MYSTERY_KILLS", format: "number" },
            { translation: "statistics.wins_murderer", id: "MURDER_MYSTERY_MURDERER_WINS", format: "number" },
            { translation: "statistics.wins_detective", id: "MURDER_MYSTERY_DETECTIVE_WINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.murdermystery.MURDER_CLASSIC",
          leaderboards: [{ translation: "statistics.wins", id: "MURDER_MYSTERY_CLASSIC_WINS", format: "number" }],
        },
        {
          translation: "games.modes.murdermystery.MURDER_DOUBLE_UP",
          leaderboards: [{ translation: "statistics.wins", id: "MURDER_MYSTERY_DOUBLE_UP_WINS", format: "number" }],
        },
        {
          translation: "games.modes.murdermystery.MURDER_ASSASSINS",
          leaderboards: [{ translation: "statistics.wins", id: "MURDER_MYSTERY_ASSASSINS_WINS", format: "number" }],
        },
        {
          translation: "games.modes.murdermystery.MURDER_INFECTION",
          leaderboards: [{ translation: "statistics.wins", id: "MURDER_MYSTERY_INFECTION_WINS", format: "number" }],
        },
      ],
    },

    {
      translation: "games.paintball",
      icon: "icon/minecraft/snowball",
      leaderboards: [
        { translation: "statistics.wins", id: "PAINTBALL_WINS", format: "number" },
        { translation: "statistics.kills", id: "PAINTBALL_KILLS", format: "paintball_kills" },
        { translation: "statistics.kdr", id: "PAINTBALL_KDR", format: "decimal_2" },
        { translation: "statistics.killstreaks", id: "PAINTBALL_KILLSTREAKS", format: "number" },
        { translation: "statistics.shots", id: "PAINTBALL_SHOTS_FIRED", format: "number" },
        { translation: "statistics.coins", id: "PAINTBALL_COINS", format: "number" },
      ],
    },

    {
      translation: "games.pit",
      icon: "icon/minecraft/dirt",
      leaderboards: [
        { translation: "statistics.level", id: "PIT_EXP", format: "pit_experience" },
        { translation: "statistics.kills", id: "PIT_KILLS", format: "number" },
        { translation: "statistics.kdr", id: "PIT_KDR", format: "decimal_2" },
        { translation: "statistics.gold", id: "PIT_GOLD", format: "large_number" },
        { translation: "statistics.renown", id: "PIT_RENOWN", format: "number" },
        { translation: "statistics.damage_dealt", id: "PIT_DAMAGE_DEALT", format: "large_number" },
        { translation: "statistics.joins", id: "PIT_JOINS", format: "number" },
        { translation: "statistics.playtime", id: "PIT_PLAYTIME", format: "duration_minutes" },
        { translation: "statistics.chat_messages", id: "PIT_CHAT_MESSAGES", format: "number" },
        { translation: "statistics.clicks", id: "PIT_CLICKS", format: "number" },
        { translation: "statistics.mystics_enchanted", id: "PIT_ITEMS_ENCHANTED", format: "number" },
        { translation: "statistics.launcher_launches", id: "PIT_LAUNCHER_LAUNCHES", format: "number" },
        { translation: "statistics.contracts_completed", id: "PIT_CONTRACTS_COMPLETED", format: "number" },
        { translation: "statistics.items_fished", id: "PIT_ITEMS_FISHED", format: "number" },
        { translation: "statistics.ingots_picked_up", id: "PIT_INGOTS_PICKED_UP", format: "number" },
        { translation: "statistics.highest_killstreak", id: "PIT_HIGHEST_KILLSTREAK", format: "number" },
        { translation: "statistics.night_quests", id: "PIT_NIGHT_QUESTS_COMPLETED", format: "number" },
        { translation: "statistics.wheat_farmed", id: "PIT_WHEAT_FARMED", format: "large_number" },
      ],
    },

    {
      translation: "games.quakecraft",
      icon: "icon/minecraft/firework_rocket",

      leaderboards: [
        { translation: "statistics.wins", id: "QUAKECRAFT_WINS", format: "number" },
        { translation: "statistics.kills", id: "QUAKECRAFT_KILLS", format: "quakecraft_kills" },
        { translation: "statistics.kdr", id: "QUAKECRAFT_KDR", format: "decimal_2" },
        { translation: "statistics.distance_travelled", id: "QUAKECRAFT_DISTANCE_TRAVELLED", format: "large_number" },
        { translation: "statistics.coins", id: "QUAKECRAFT_COINS", format: "number" },
      ],
    },

    {
      translation: "games.skywars",
      icon: "icon/minecraft/ender_eye",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.level", id: "SKYWARS_EXP", format: "skywars_experience" },
            { translation: "statistics.wins", id: "SKYWARS_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_KDR", format: "decimal_2" },
            { translation: "statistics.coins", id: "SKYWARS_COINS", format: "number" },
            { translation: "statistics.tokens", id: "SKYWARS_TOKENS", format: "number" },
            { translation: "quests.rewards.souls", id: "SKYWARS_SOULS", format: "number" },
            { translation: "statistics.opals", id: "SKYWARS_OPALS", format: "number" },
            { translation: "statistics.prestige_sevens", id: "SKYWARS_KIT_PRESTIGE_SEVENS", format: "number" },
          ],
        },
        {
          translation: "multi",
          translations: ["games.modes.skywars.solo", "games.modes.skywars.normal"],
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_SOLO_NORMAL_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_SOLO_NORMAL_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_SOLO_NORMAL_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_SOLO_NORMAL_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "multi",
          translations: ["games.modes.skywars.solo", "games.modes.skywars.insane"],
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_SOLO_INSANE_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_SOLO_INSANE_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_SOLO_INSANE_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_SOLO_INSANE_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "multi",
          translations: ["games.modes.skywars.team", "games.modes.skywars.normal"],
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_TEAM_NORMAL_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_TEAM_NORMAL_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_TEAM_NORMAL_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_TEAM_NORMAL_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "multi",
          translations: ["games.modes.skywars.team", "games.modes.skywars.insane"],
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_TEAM_INSANE_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_TEAM_INSANE_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_TEAM_INSANE_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_TEAM_INSANE_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.skywars.mega",
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_MEGA_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_MEGA_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_MEGA_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_MEGA_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.skywars.mega_doubles",
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_MEGA_DOUBLES_WINS", format: "number" },
            { translation: "statistics.wlr", id: "SKYWARS_MEGA_DOUBLES_WLR", format: "decimal_2" },
            { translation: "statistics.kills", id: "SKYWARS_MEGA_DOUBLES_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "SKYWARS_MEGA_DOUBLES_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.skywars.mini",
          leaderboards: [
            { translation: "statistics.wins", id: "SKYWARS_MINI_WINS", format: "number" },
            { translation: "statistics.kills", id: "SKYWARS_MINI_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.skywars.lab",
          leaderboards: [
            {
              translation: "games.overall",
              include_name_in_full_translation: false,
              leaderboards: [
                { translation: "statistics.wins", id: "SKYWARS_LAB_WINS", format: "number" },
                { translation: "statistics.wlr", id: "SKYWARS_LAB_WLR", format: "decimal_2" },
                { translation: "statistics.kills", id: "SKYWARS_LAB_KILLS", format: "number" },
                { translation: "statistics.kdr", id: "SKYWARS_LAB_KDR", format: "decimal_2" },
                { translation: "multi", translations: ["statistics.wins", "games.modes.skywars.lucky_blocks"], id: "SKYWARS_LUCKY_BLOCK_WINS", format: "number" },
              ],
            },
            {
              translation: "games.modes.skywars.solo",
              leaderboards: [
                { translation: "statistics.wins", id: "SKYWARS_LAB_SOLO_WINS", format: "number" },
                { translation: "statistics.wlr", id: "SKYWARS_LAB_SOLO_WLR", format: "decimal_2" },
                { translation: "statistics.kills", id: "SKYWARS_LAB_SOLO_KILLS", format: "number" },
                { translation: "statistics.kdr", id: "SKYWARS_LAB_SOLO_KDR", format: "decimal_2" },
                { translation: "multi", translations: ["statistics.wins", "games.modes.skywars.lucky_blocks"], id: "SKYWARS_LUCKY_BLOCK_SOLO_WINS", format: "number" },
              ],
            },
            {
              translation: "games.modes.skywars.team",
              leaderboards: [
                { translation: "statistics.wins", id: "SKYWARS_LAB_TEAM_WINS", format: "number" },
                { translation: "statistics.wlr", id: "SKYWARS_LAB_TEAM_WLR", format: "decimal_2" },
                { translation: "statistics.kills", id: "SKYWARS_LAB_TEAM_KILLS", format: "number" },
                { translation: "statistics.kdr", id: "SKYWARS_LAB_TEAM_KDR", format: "decimal_2" },
                { translation: "multi", translations: ["statistics.wins", "games.modes.skywars.lucky_blocks"], id: "SKYWARS_LUCKY_BLOCK_TEAM_WINS", format: "number" },
              ],
            },
          ],
        },
      ],
    },

    {
      translation: "games.smashheroes",
      icon: "icon/minecraft/head_smashheroes",

      leaderboards: [
        { translation: "statistics.smash_level", id: "SMASH_HEROES_SMASH_LEVEL", format: "number" },
        { translation: "statistics.wins", id: "SMASH_HEROES_WINS", format: "number" },
        { translation: "statistics.wlr", id: "SMASH_HEROES_WLR", format: "decimal_2" },
        { translation: "statistics.kills", id: "SMASH_HEROES_KILLS", format: "number" },
        { translation: "statistics.kdr", id: "SMASH_HEROES_KDR", format: "decimal_2" },
        { translation: "statistics.coins", id: "SMASH_HEROES_COINS", format: "number" },
      ],
    },

    {
      translation: "games.speeduhc",
      icon: "icon/minecraft/golden_carrot",

      leaderboards: [
        { translation: "statistics.score", id: "SPEED_UHC_SCORE", format: "speed_uhc_score" },
        { translation: "statistics.wins", id: "SPEED_UHC_WINS", format: "number" },
        { translation: "statistics.wlr", id: "SPEED_UHC_WLR", format: "decimal_2" },
        { translation: "statistics.kills", id: "SPEED_UHC_KILLS", format: "number" },
        { translation: "statistics.kdr", id: "SPEED_UHC_KDR", format: "decimal_2" },
      ],
    },

    {
      translation: "games.tntgames",
      icon: "icon/minecraft/tnt",
      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "TNT_GAMES_WINS", format: "number" },
            { translation: "statistics.tokens", id: "TNT_GAMES_TOKENS", format: "number" },
          ],
        },
        {
          translation: "games.modes.tntgames.tntrun.category",
          leaderboards: [
            { translation: "statistics.wins", id: "TNT_GAMES_TNTRUN_WINS", format: "tnt_high" },
            { translation: "statistics.best_time", id: "TNT_GAMES_TNTRUN_LONGEST", format: "duration_seconds" },
          ],
        },
        {
          translation: "games.modes.tntgames.pvprun.category",
          leaderboards: [
            { translation: "statistics.wins", id: "TNT_GAMES_PVPRUN_WINS", format: "tnt_high" },
            { translation: "statistics.kills", id: "TNT_GAMES_PVPRUN_KILLS", format: "number" },
            { translation: "statistics.best_time", id: "TNT_GAMES_PVPRUN_LONGEST", format: "duration_seconds" },
          ],
        },
        {
          translation: "games.modes.tntgames.bowspleef.category",
          leaderboards: [{ translation: "statistics.wins", id: "TNT_GAMES_BOWSPLEEF_WINS", format: "tnt_high" }],
        },
        {
          translation: "games.modes.tntgames.tntag.category",
          leaderboards: [
            { translation: "statistics.wins", id: "TNT_GAMES_TNTTAG_WINS", format: "tnt_low" },
            { translation: "statistics.kills", id: "TNT_GAMES_TNTTAG_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.tntgames.wizards.category",
          leaderboards: [
            { translation: "statistics.wins", id: "TNT_GAMES_WIZARDS_WINS", format: "tnt_low" },
            { translation: "statistics.kills", id: "TNT_GAMES_WIZARDS_KILLS", format: "number" },
            { translation: "statistics.overall_captures", id: "TNT_GAMES_WIZARDS_POINTS_CAPTURED", format: "number" },
          ],
        },
      ],
    },

    {
      translation: "games.tkr",
      icon: "icon/minecraft/minecart",

      leaderboards: [
        { translation: "statistics.golds", id: "TURBO_KART_RACERS_GOLD_TROPHIES", format: "tkr_trophies" },
        { translation: "statistics.trophies", id: "TURBO_KART_RACERS_TROPHIES", format: "number" },
        { translation: "statistics.laps", id: "TURBO_KART_RACERS_LAPS", format: "number" },
        { translation: "statistics.coins", id: "TURBO_KART_RACERS_COINS", format: "number" },
        { translation: "statistics.box_pickups", id: "TURBO_KART_RACERS_ITEM_BOX_PICKUPS", format: "number" },
      ],
    },

    {
      translation: "games.uhc",
      icon: "icon/minecraft/golden_apple",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.score", id: "UHC_SCORE", format: "uhc_score" },
            { translation: "statistics.wins", id: "UHC_WINS", format: "number" },
            { translation: "statistics.kills", id: "UHC_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "UHC_KDR", format: "decimal_2" },
            { translation: "statistics.coins", id: "UHC_COINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.uhc.uhcchampions.solo",
          leaderboards: [
            { translation: "statistics.wins", id: "UHC_SOLO_WINS", format: "number" },
            { translation: "statistics.kills", id: "UHC_SOLO_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "UHC_SOLO_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.uhc.uhcchampions.teams",
          leaderboards: [
            { translation: "statistics.wins", id: "UHC_TEAMS_WINS", format: "number" },
            { translation: "statistics.kills", id: "UHC_TEAMS_KILLS", format: "number" },
            { translation: "statistics.kdr", id: "UHC_TEAMS_KDR", format: "decimal_2" },
          ],
        },
      ],
    },

    {
      translation: "games.vampirez",
      icon: "icon/minecraft/wither_skeleton_skull",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,
          leaderboards: [
            { translation: "statistics.coins", id: "VAMPIREZ_COINS", format: "number" }
          ],
        },
        {
          translation: "games.modes.classic.vampirez.human",
          leaderboards: [
            { translation: "statistics.wins", id: "VAMPIREZ_HUMAN_WINS", format: "vampirez_human" },
            { translation: "statistics.vampire_kills", id: "VAMPIREZ_VAMPIRE_KILLS", format: "number" },
            { translation: "statistics.kills", id: "VAMPIREZ_ZOMBIE_KILLS", format: "number" },
          ],
        },
        {
          translation: "games.modes.classic.vampirez.vampire",
          leaderboards: [
            { translation: "statistics.human_kills", id: "VAMPIREZ_HUMAN_KILLS", format: "vampirez_vampire" },
            { translation: "statistics.wins", id: "VAMPIREZ_VAMPIRE_WINS", format: "number" },
          ],
        },
      ],
    },

    {
      translation: "games.walls",
      icon: "icon/minecraft/sand",
      leaderboards: [
        { translation: "statistics.wins", id: "WALLS_WINS", format: "number" },
        { translation: "statistics.kills", id: "WALLS_KILLS", format: "number" },
        { translation: "statistics.kdr", id: "WALLS_KDR", format: "decimal_2" },
        { translation: "statistics.assists", id: "WALLS_ASSISTS", format: "number" },
        { translation: "statistics.coins", id: "WALLS_COINS", format: "number" },
      ],
    },

    {
      translation: "games.warlords",
      icon: "icon/minecraft/stone_axe",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.wins", id: "WARLORDS_WINS", format: "warlords_wins" },
            { translation: "statistics.kills", id: "WARLORDS_KILLS", format: "number" },
            { translation: "statistics.wlr", id: "WARLORDS_WLR", format: "decimal_2" },
            { translation: "statistics.kdr", id: "WARLORDS_KDR", format: "decimal_2" },
            { translation: "statistics.coins", id: "WARLORDS_COINS", format: "number" },
          ],
        },
        {
          translation: "games.modes.warlords.capturetheflag",
          leaderboards: [
            { translation: "statistics.wins", id: "WARLORDS_CAPTURE_THE_FLAG_WINS", format: "number" },
            { translation: "statistics.kills", id: "WARLORDS_CAPTURE_THE_FLAG_KILLS", format: "number" },
            { translation: "statistics.flags_captured", id: "WARLORDS_CAPTURE_THE_FLAG_CAPTURES", format: "number" },
            { translation: "statistics.flags_returned", id: "WARLORDS_CAPTURE_THE_FLAG_RETURNS", format: "number" },
          ],
        },
        {
          translation: "games.modes.warlords.domination",
          leaderboards: [
            { translation: "statistics.wins", id: "WARLORDS_DOMINATION_WINS", format: "number" },
            { translation: "statistics.kills", id: "WARLORDS_DOMINATION_KILLS", format: "number" },
            { translation: "statistics.captures", id: "WARLORDS_DOMINATION_CAPTURES", format: "number" },
          ],
        },
        {
          translation: "games.modes.warlords.teamdeathmatch",
          leaderboards: [
            { translation: "statistics.wins", id: "WARLORDS_TEAM_DEATHMATCH_WINS", format: "number" },
            { translation: "statistics.kills", id: "WARLORDS_TEAM_DEATHMATCH_KILLS", format: "number" },
          ],
        },
      ],
    },

    {
      translation: "games.woolgames",
      icon: "icon/minecraft/white_wool",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.level", id: "WOOL_GAMES_LEVEL", format: "woolgames_experience" },
            { translation: "statistics.wins", id: "WOOL_GAMES_WINS", format: "number" },
            { translation: "statistics.kills", id: "WOOL_GAMES_KILLS", format: "number" },
            { translation: "statistics.wlr", id: "WOOL_GAMES_WLR", format: "decimal_2" },
            { translation: "statistics.kdr", id: "WOOL_GAMES_KDR", format: "decimal_2" },
            { translation: "statistics.wool", id: "WOOL_GAMES_WOOL", format: "number" },
          ],
        },
        {
          translation: "games.modes.woolgames.sheepwars.category",


          leaderboards: [
            { translation: "statistics.wins", id: "WOOL_GAMES_SHEEP_WARS_WINS", format: "number" },
            { translation: "statistics.kills", id: "WOOL_GAMES_SHEEP_WARS_KILLS", format: "number" },
            { translation: "statistics.wlr", id: "WOOL_GAMES_SHEEP_WARS_WLR", format: "decimal_2" },
            { translation: "statistics.kdr", id: "WOOL_GAMES_SHEEP_WARS_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.woolgames.woolwars.category",


          leaderboards: [
            { translation: "statistics.wins", id: "WOOL_GAMES_WOOL_WARS_WINS", format: "number" },
            { translation: "statistics.kills", id: "WOOL_GAMES_WOOL_WARS_KILLS", format: "number" },
            { translation: "statistics.wlr", id: "WOOL_GAMES_WOOL_WARS_WLR", format: "decimal_2" },
            { translation: "statistics.kdr", id: "WOOL_GAMES_WOOL_WARS_KDR", format: "decimal_2" },
          ],
        },
        {
          translation: "games.modes.arcade.capturethewool",


          leaderboards: [
            { translation: "statistics.wins", id: "WOOL_GAMES_CAPTURE_THE_WOOL_WINS", format: "number" },
            { translation: "statistics.kills", id: "WOOL_GAMES_CAPTURE_THE_WOOL_KILLS", format: "number" },
            { translation: "statistics.wlr", id: "WOOL_GAMES_CAPTURE_THE_WOOL_WLR", format: "decimal_2" },
            { translation: "statistics.kdr", id: "WOOL_GAMES_CAPTURE_THE_WOOL_KDR", format: "decimal_2" },
          ],
        },
      ],
    },

    {
      translation: "games.fishing",
      icon: "icon/minecraft/cod",

      leaderboards: [
        {
          translation: "games.overall",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "statistics.items_caught", id: "FISHING_TOTAL_CAUGHT", format: "number" },
            { translation: "statistics.fish_caught", id: "FISHING_FISH_CAUGHT", format: "number" },
            { translation: "statistics.junk_caught", id: "FISHING_JUNK_CAUGHT", format: "number" },
            { translation: "statistics.treasure_caught", id: "FISHING_TREASURE_CAUGHT", format: "number" },
            { translation: "statistics.mythical_fish_caught", id: "FISHING_MYTHICAL_FISH_CAUGHT", format: "number" },
          ],
        },
        {
          translation: "games.modes.fishing.zones.water",
          leaderboards: [
            { translation: "statistics.items_caught", id: "FISHING_WATER_TOTAL_CAUGHT", format: "number" },
            { translation: "statistics.fish_caught", id: "FISHING_WATER_FISH_CAUGHT", format: "number" },
            { translation: "statistics.junk_caught", id: "FISHING_WATER_JUNK_CAUGHT", format: "number" },
            { translation: "statistics.treasure_caught", id: "FISHING_WATER_TREASURE_CAUGHT", format: "number" },
          ],
        },
        {
          translation: "games.modes.fishing.zones.lava",
          leaderboards: [
            { translation: "statistics.items_caught", id: "FISHING_LAVA_TOTAL_CAUGHT", format: "number" },
            { translation: "statistics.fish_caught", id: "FISHING_LAVA_FISH_CAUGHT", format: "number" },
            { translation: "statistics.junk_caught", id: "FISHING_LAVA_JUNK_CAUGHT", format: "number" },
            { translation: "statistics.treasure_caught", id: "FISHING_LAVA_TREASURE_CAUGHT", format: "number" },
          ],
        },
        {
          translation: "games.modes.fishing.zones.ice",
          leaderboards: [
            { translation: "statistics.items_caught", id: "FISHING_ICE_TOTAL_CAUGHT", format: "number" },
            { translation: "statistics.fish_caught", id: "FISHING_ICE_FISH_CAUGHT", format: "number" },
            { translation: "statistics.junk_caught", id: "FISHING_ICE_JUNK_CAUGHT", format: "number" },
            { translation: "statistics.treasure_caught", id: "FISHING_ICE_TREASURE_CAUGHT", format: "number" },
          ],
        },
        {
          translation: "games.modes.fishing.catches.big_fish",
          include_name_in_full_translation: false,

          leaderboards: [
            { translation: "multi", translations: ["games.modes.fishing.mythicalfish.hades", "games.modes.fishing.catches.biggest_fish"], id: "FISHING_BIGGEST_HADES", format: "kilograms" },
            { translation: "multi", translations: ["games.modes.fishing.mythicalfish.archimedes", "games.modes.fishing.catches.biggest_fish"], id: "FISHING_BIGGEST_DAEDALUS", format: "kilograms" },
          ],
        },
      ],
    },
  ];


  function generateLeaderboardsViaLoop() {

    let megaWallsClasses = ["angel","arcanist","assassin","automaton","blaze","cow","creeper","dreadlord","dragon","enderman","golem","herobrine","hunter","moleman","phoenix","pigman","pirate","renegade","shaman","shark","skeleton","snowman","spider","squid","werewolf","zombie"];

    let megaWallsLeaderboardStats = [
      { id: "CLASS_POINTS", translation: "statistics.class_points", format: "number" },
      { id: "WINS", translation: "statistics.wins", format: "number" },
      { id: "FINAL_KILLS", translation: "statistics.final_kills", format: "number" },
      { id: "FINAL_ASSISTS", translation: "statistics.final_assists", format: "number" },
      { id: "DEFENDER_KILLS", translation: "statistics.defender_kills", format: "number" },
      { id: "PLAYTIME", translation: "statistics.playtime", format: "duration_minutes" },
      { id: "WITHER_DAMAGE", translation: "statistics.wither_damage", format: "large_number" },
    ];

    let megaWallsClassesLeaderboards = {
      translation: "games.modes.megawalls.classes.category",
      include_name_in_full_translation: false,
      leaderboards: [
      ],
    };

    for (let a in megaWallsClasses) {
      let megaWallsClass = megaWallsClasses[a];

      let megaWallsClassLeaderboards = {
        translation: `games.modes.megawalls.classes.${megaWallsClass}`,
        leaderboards: []
      };

      for (let b in megaWallsLeaderboardStats) {
        let megaWallsStat = megaWallsLeaderboardStats[b];

        let megaWallsStatLeaderboard = {
          translation: megaWallsStat["translation"],
          id: `MEGA_WALLS_${megaWallsClass.toUpperCase()}_${megaWallsStat["id"]}`,
          format: megaWallsStat["format"]
        };

        megaWallsClassLeaderboards["leaderboards"].push(megaWallsStatLeaderboard);
      }

      megaWallsClassesLeaderboards["leaderboards"].push(megaWallsClassLeaderboards);
    }

    megaWallsClassesLeaderboards["leaderboards"].sort((a, b) => getTranslation(a["translation"]).localeCompare(getTranslation(b["translation"]))); // probably a more efficient way to do this

    for (let c in leaderboards) {
      let game = leaderboards[c];

      if (game["translation"] == "games.megawalls") {
        game["leaderboards"].push(megaWallsClassesLeaderboards);
        break;
      }
    }

    let blitzKits = ["arachnologist","archer","armorer","astronaut","baker","blaze","creepertamer","diver","donkeytamer","farmer","fisherman","florist","golem","guardian","horsetamer","hunter","hype train","jockey","knight","meatmaster","milkman","necromancer","paladin","phoenix","pigman","ranger","reaper","reddragon","rogue","scout","shadow knight","shark","slimeyslime","snowman","speleologist","tim","toxicologist","troll","viking","warlock","warrior","wolftamer","rambo"];
    let blitzLeaderboardStats = [
      { id: "EXP", translation: "statistics.exp", format: "number" },
      { id: "WINS", translation: "statistics.wins", format: "number" },
      { id: "KILLS", translation: "statistics.kills", format: "number" },
      { id: "PLAYTIME", translation: "statistics.playtime", format: "duration_seconds" },
      { id: "DAMAGE_DEALT", translation: "statistics.damage_dealt", format: "large_number" },
      { id: "DAMAGE_TAKEN", translation: "statistics.damage_taken", format: "large_number" },
    ];

    let blitzKitsLeaderboards = {
      translation: "games.modes.blitz.kits.category",
      include_name_in_full_translation: false,
      leaderboards: [],
    };

    for (let a in blitzKits) {
      let blitzKit = blitzKits[a];

      let blitzKitLeaderboards = {
        translation: `games.modes.blitz.kits.${blitzKit}`,
        leaderboards: [],
      };

      for (let b in blitzLeaderboardStats) {
        let blitzStat = blitzLeaderboardStats[b];

        let blitzStatLeaderboard = {
          translation: blitzStat["translation"],
          id: `BLITZ_${blitzKit.toUpperCase().replace(" ", "_")}_${blitzStat["id"]}`,
          format: blitzStat["format"],
        };

        blitzKitLeaderboards["leaderboards"].push(blitzStatLeaderboard);
      }

      blitzKitsLeaderboards["leaderboards"].push(blitzKitLeaderboards);
    }

    blitzKitsLeaderboards["leaderboards"].push({ // random kit has fewer stats and thus must be treated separately!
      translation: "games.modes.blitz.kits.random",
      leaderboards: [
        { translation: "statistics.wins", id: "BLITZ_RANDOM_WINS", format: "number" },
        { translation: "statistics.kills", id: "BLITZ_RANDOM_KILLS", format: "number" },
      ],
    });

    blitzKitsLeaderboards["leaderboards"].sort((a, b) => getTranslation(a["translation"]).localeCompare(getTranslation(b["translation"])));

    for (let c in leaderboards) {
      let game = leaderboards[c];

      if (game["translation"] == "games.blitz") {
        game["leaderboards"].push(blitzKitsLeaderboards);
        break;
      }
    }

    let copsAndCrimsGuns = ["autoShotgun","bullpup","carbine","handgun","magnum","pistol","rifle","scopedRifle","shotgun","smg","sniper"];
    let copsAndCrimsLeaderboardStats = [
      { id: "KILLS", translation: "statistics.kills", format: "number" },
    ];

    let copsAndCrimsGunsLeaderboards = {
      translation: "games.modes.copsandcrims.guns.category",
      include_name_in_full_translation: false,
      leaderboards: [],
    };

    for (let a in copsAndCrimsGuns) {
      let copsAndCrimsGun = copsAndCrimsGuns[a];

      let copsAndCrimsGunLeaderboards = {
        translation: `games.modes.copsandcrims.guns.${copsAndCrimsGun}`,
        leaderboards: [],
      };

      for (let b in copsAndCrimsLeaderboardStats) {
        let copsAndCrimsStat = copsAndCrimsLeaderboardStats[b];

        let copsAndCrimsStatLeaderboard = {
          translation: copsAndCrimsStat["translation"],
          id: `COPS_AND_CRIMS_GUN_${copsAndCrimsGun.toUpperCase()}_${copsAndCrimsStat["id"]}`,
          format: copsAndCrimsStat["format"],
        };

        copsAndCrimsGunLeaderboards["leaderboards"].push(copsAndCrimsStatLeaderboard);
      }

      copsAndCrimsGunsLeaderboards["leaderboards"].push(copsAndCrimsGunLeaderboards);
    }

    copsAndCrimsGunsLeaderboards["leaderboards"].sort((a, b) => getTranslation(a["translation"]).localeCompare(getTranslation(b["translation"])));

    for (let c in leaderboards) {
      let game = leaderboards[c];

      if (game["translation"] == "games.copsandcrims") {
        game["leaderboards"].push(copsAndCrimsGunsLeaderboards);
        break;
      }
    }

    const skyWarsKitLeaderboards = {
      "normal": [
        "armorer",
        "armorsmith",
        "baseball_player",
        "cannoneer",
        "default",
        "ecologist",
        "enchanter",
        "enderchest",
        "enderman",
        "farmer",
        "fallen_angel",
        "fisherman",
        "hunter",
        "knight",
        "pharaoh",
        "pyro",
        "rookie",
        "snowman",
        "speleologist",
        "troll",
        "batguy",
        "disco",
        "energix",
        "frog",
        "grenade",
        "guardian",
        "healer",
        "scout",
        "princess",
        "engineer",
        "salmon",
        "pig_rider",
        "slime",
        "jester",
        "zookeeper",
        "sloth",
        "magician",
        "cactus",
        "archeologist",
        "warlock"
      ],
      "insane": [
        "armorer",
        "armorsmith",
        "baseball_player",
        "cannoneer",
        "default",
        "ecologist",
        "enchanter",
        "enderman",
        "fallen_angel",
        "guardian",
        "healer",
        "hunter",
        "knight",
        "pharaoh",
        "pro",
        "scout",
        "snowman",
        "speleologist",
        "batguy",
        "disco",
        "energix",
        "cactus",
        "archeologist",
        "warlock",
        "frog",
        "grenade",
        "engineer",
        "pig_rider",
        "salmon",
        "slime",
        "jester",
        "zookeeper",
        "sloth",
        "magician",
        "enderchest",
        "farmer",
        "fisherman",
        "princess",
        "pyro",
        "troll",
        "golem"
      ],
      "mythical": [
        "end_lord",
        "monster_trainer",
        "nether_lord",
        "fishmonger",
        "thundermeister",
        "chronobreaker",
        "cryomancer"
      ],
      "mega": [
        "armorer",
        "armorsmith",
        "baseball_player",
        "cannoneer",
        "default",
        "healer",
        "hunter",
        "knight",
        "paladin",
        "scout",
        "skeletor",
        "witch",
        "hellhound",
        "fisherman",
        "pyro",
        "enderman"
      ],
      "mini": [
        "scout",
        "magician",
        "armorer",
        "champion",
        "bowman",
        "athlete",
        "blacksmith",
        "healer",
        "pyromancer",
        "hound",
        "paladin"
      ]
    }
    
    const skyWarsKitsLeaderboards = {
      translation: "games.modes.blitz.kits.category",
      include_name_in_full_translation: false,
      leaderboards: [],
    };

    let skyWarsKitLeaderboardStats = [
      { id: "XP", translation: "statistics.xp", format: "skywars_kit_xp" },
      { id: "WINS", translation: "statistics.wins", format: "number" },
      { id: "KILLS", translation: "statistics.kills", format: "number" },
    ];

    for (let mode in skyWarsKitLeaderboards) {
      let skyWarsKitMode = skyWarsKitLeaderboards[mode];

      let skyWarsKitModeLeaderboards = {
        translation: `games.modes.skywars.${mode}`,
        leaderboards: [],
      };

      for (let kitName of skyWarsKitMode) {
        let skyWarsIndividualKitLeaderboards = {
          translation: `games.modes.skywars.kits.${kitName}`,
          leaderboards: [],
        };

        for (let stat of skyWarsKitLeaderboardStats) {
          skyWarsIndividualKitLeaderboards["leaderboards"].push({
            translation: stat["translation"],
            id: `SKYWARS_${mode.toUpperCase()}_KIT_${kitName.toUpperCase()}_${stat["id"]}`,
            format: stat["format"],
          });
        }

        skyWarsKitModeLeaderboards["leaderboards"].push(skyWarsIndividualKitLeaderboards);
      }

      skyWarsKitModeLeaderboards["leaderboards"].sort((a, b) => 
        getTranslation(a["translation"]).localeCompare(getTranslation(b["translation"]))
      );

      skyWarsKitsLeaderboards["leaderboards"].push(skyWarsKitModeLeaderboards);
    }

    for (let c in leaderboards) {
      let game = leaderboards[c];
      if (game["translation"] == "games.skywars") {
        game["leaderboards"].push(skyWarsKitsLeaderboards);
        break;
      }
    }
  }

  module.exports = {
    leaderboards,
    generateLeaderboardsViaLoop,
    getTranslation
  };
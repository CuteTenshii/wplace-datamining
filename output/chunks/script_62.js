import {
  m as e
} from "./XL5Wf48w.js";

function d(a, r) {
  return r.includes(a)
}

function m(a) {
  return d(a, ["sac", "game_master", "game_master_leader", "dev", "admin"])
}
const _ = {
    user: e.user(),
    discord_mod: "Disc. Mod",
    discord_leader: "Disc. Lead",
    sac: "SAC",
    game_master: "GM",
    game_master_leader: "GM Lead",
    dev: "Dev",
    admin: "Admin"
  },
  i = {
    user: e.user(),
    discord_mod: e.discord_moderator(),
    discord_leader: e.discord_leader(),
    sac: e.sac(),
    game_master: e.game_master(),
    game_master_leader: e.game_master_leader(),
    dev: e.dev(),
    admin: e.administrator()
  };
export {
  i as R, _ as a, m as i
};
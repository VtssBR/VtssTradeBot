import SteamUser from "steam-user";

const client = new SteamUser();

const loggin = () => {
  const username = process.env.STEAM_USER;

  if (!username) return;

  client.logOn({
    accountName: username,
  });
};

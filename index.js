#!/usr/bin/env node

const { setTimeout } = require('node:timers/promises');
const { parseArgs } = require('node:util');
const SteamUser = require('steam-user');

function getManifest(appId, depotId, manifestId, username, password) {
  return new Promise((resolve, reject) => {
    const steam = new SteamUser();
    if (username && password) {
      console.error('Logging in as', username);
      steam.logOn({accountName: username, password: password});
    } else {
      console.error('Logging in anonymously...');
      steam.logOn({anonymous: true});
    }


    steam.on('loggedOn', async () => {
      console.error('Logged in anonymously, downloading manifest...');
      steam.getManifest(appId, depotId, manifestId, 'public', (err, manifest) => {
        if (err) {
          reject(err);
          return;
        }
        console.error('Got manifest');
        resolve(manifest);
      });
    });

    steam.on('error', (err) => {
      reject(err);
    });
  }); 
}

const { positionals, values } = parseArgs({
  options: {
    username: {
      short: 'u',
      type: 'string',
      description: 'Steam username',
      default: '',
    },
    password: {
      short: 'p',
      type: 'string',
      description: 'Steam password',
      default: '',
    },
  },
  strict: false,
  allowPositionals: true,
});

if (positionals.length != 3) {
  console.error('Usage: manifest-grabber [-u <username> -p <password>] <appId> <depotId> <manifestId>');
  process.exit(1);
}

getManifest(positionals[0], positionals[1], positionals[2], values.username, values.password)
  .then(manifest => {
    process.stdout.write(JSON.stringify(manifest), err => process.exit(err ? 2 : 0));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// start.js
import concurrently from 'concurrently';

const commands = [
  { name: 'Server', command: 'node server.js' },
  { name: 'Phone', command: 'node phone.js' },
  { name: 'Login', command: 'node login.js' },
  { name: 'Scholar', command: 'node scholar.js' },
  
];

concurrently(commands, {
  prefix: 'name',
  killOthers: ['failure', 'success'],
});

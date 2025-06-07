import { exec } from 'child_process';

exec('bun find-deadcode', (_, stdout) => {
  console.log(stdout);
  const hasFailure = stdout.split('\n').find((line) => line.startsWith('./'));

  process.exit(hasFailure ? 1 : 0);
});

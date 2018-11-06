process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  //we have to figure out how to access bash's pwd
  if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write('Did you just type... ' + cmd);
  }
  
  process.stdout.write('\nprompt > ')
});

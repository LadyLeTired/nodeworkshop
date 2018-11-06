process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  
  //we have to figure out how to access bash's pwd
  if(cmd === 'pwd'){
    process.stdout.write(pwd);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  
  process.stdout.write('\nprompt > ')
});

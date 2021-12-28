const { exec } = require('child_process');
exec('echo "hola"', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
})
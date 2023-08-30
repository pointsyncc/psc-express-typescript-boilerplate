//create ./logs/info.log file if it doesn't exist

function init(){
    const fs = require('fs');
    const path = require('path');

    const logsDir = path.join(__dirname, '../logs');
    const infoLog = path.join(logsDir, 'info.log');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    if (!fs.existsSync(infoLog)) {
        fs.writeFileSync(infoLog, '');
    }
}

init();
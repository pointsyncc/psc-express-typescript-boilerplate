import fs from 'fs';

if (fs.existsSync('./dist')) {
    fs.rm('./dist', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }

        console.log('Directory is deleted!');
    }
    );
}


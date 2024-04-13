// import superheroes from "superheroes";

// const name = superheroes.random();

// console.log(`im ${name}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "message":"Type in the url - ",
        "name":'URL',
    }

  ])
  .then((answers) => {
    const url = answers.URL;

    // qr image generation
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    // writing the text to file
    fs.appendFile('mynewfile.txt', url, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })
  

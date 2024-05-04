import fs from 'fs-extra';
import path from 'path';

function createComponent(name, directory) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentContent = `
  import React from 'react';

  function ${componentName}() {
    return (
      <div>
        <h1>${componentName}</h1>
        {/* Tambahkan konten komponen di sini */}
      </div>
    );
  }

  export default ${componentName};
  `;

  const directoryPath = path.join(process.cwd(), directory.replace(/\//g, '\\'));
  const filePath = path.join(directoryPath, `${name}.jsx`);

  fs.ensureDir(directoryPath)
    .then(() => {
      fs.writeFile(filePath, componentContent, (err) => {
        if (err) throw err;
        console.log(`Berhasil membuat file ${name}.jsx di ${directory}`);
      });
    })
    .catch((err) => console.error(err));
}

const componentName = process.argv[2];
const directory = process.argv[3] || 'src/components/layouts';

if (!componentName) {
  console.error('Nama komponen harus disediakan.');
} else {
  createComponent(componentName, directory);
}

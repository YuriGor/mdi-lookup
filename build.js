const axios = require('axios');
const fs = require('fs');

const url =
  'https://raw.githubusercontent.com/Templarian/MaterialDesign/master/meta.json';

async function main() {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(
      'mdi-lookup.json',
      JSON.stringify(
        response.data.map((m) => `${m.name} ${m.aliases.join(' ')}`.trim())
      )
    );
  } catch (error) {
    console.log(error);
  }
}

main();

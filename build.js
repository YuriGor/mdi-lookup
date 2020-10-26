const mdiMeta = require('@mdi/svg/meta');
const fs = require('fs');

async function main() {
  fs.writeFileSync(
    'mdi-lookup.json',
    JSON.stringify(
      mdiMeta.map((m) => `${m.name} ${m.aliases.join(' ')}`.trim())
    )
  );
}

main();

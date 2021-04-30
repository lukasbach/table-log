import { CliTable } from '../CliTable';

(async () => {
  const table = CliTable.createNoBorderTable();
  await new Promise(r => setTimeout(r, 500));

  table.log('Something', 'Hello', 'asdasddadsasddsad');
  table.log('ss', '2dasdfasf3', 'f');
  table.log('sdfsafdfadfsadfasdf', 'sdfasfdsfs', 'ff');
  table.log('afds', 'ds', 'f');

  await new Promise(r => setTimeout(r, 3000));

  table.log('000000000000000000000000000000000000000000000000', 'y', 'y');

  await new Promise(r => setTimeout(r, 3000));

  table.unmount();

  console.log("I'm free!");
})();
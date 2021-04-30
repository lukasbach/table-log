import { CliTable } from '../CliTable';

(async () => {
  const wait = async () => await new Promise(r => setTimeout(r, 500));

  const table = CliTable.createDoubleBorderTable({
    colAligns: ['left', 'right', 'left', 'right'],
    colWidths: [undefined, undefined, 35, undefined]
  });
  await wait();

  table.log('Received', 'GET', '/users/obi-wan-kenobi', '(352ms)');
  await wait();

  table.log('Received', 'GET', '/users/vader', '(241ms)');
  await wait();

  table.log('Received', 'POST', '/lightsabers/red/vader', '(890ms)');
  await wait();

  table.log('Received', 'POST', '/lightsabers/blue/obi-wan-kenobi', '(937ms)');
  await wait();

  table.log('Received', 'OPTIONS', '/lightsabers/new', '(125ms)');
  await wait();

  table.log('Received', 'PUT', '/lightsabers/new', '(11,335ms)');
  await wait();

  table.log('Received', 'GET', '/users/yoda', '(452ms)');
  await wait();

  table.log('Received', 'POST', '/lightsabers/green/yoda', '(676ms)');
  await wait();

  table.log('Received', 'GET', '/lightsabers/green/yoda/handle/material', '(124ms)');
  await wait();

  table.unmount();

  console.log("Table unmounted!");
})();
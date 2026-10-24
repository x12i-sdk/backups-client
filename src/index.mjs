import assert from 'node:assert/strict';
import { zipStored, unzip, bytesOf, textOf } from '@x12i/backups-client';

const input = JSON.stringify({ collection: 'demo', records: [{ id: 'one', value: 7 }] });
const archive = zipStored([{ name: 'demo.json', data: bytesOf(input) }]);
const files = unzip(archive);
const restored = JSON.parse(textOf(files.get('demo.json')));
assert.equal(restored.records[0].value, 7);
assert.equal(files.size, 1);
console.log({ archiveBytes: archive.length, restored });
// This is a synthetic local archive, not a Mongo backup or restore operation.

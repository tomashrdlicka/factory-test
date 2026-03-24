#!/usr/bin/env node

import { run } from '../src/cli.js';

console.log(run(process.argv.slice(2)));

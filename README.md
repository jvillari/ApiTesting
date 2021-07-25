## Getting Started ##
In order to run these tests, all you need to do is pull down this repo and run these commands in a command line:
1. `npm install`
2. `npm run test`

Tests in Jest are inherently parallel by file. So, each file should run in parallel (depending on how many threads you allow it to run). These tests were setup using all open source tools, including: `JEST`, `TypeScript`, and `Axios`.

NOTES: 
1. This Typicode API doesn't seemingly create any data. So it's difficult to truly test it at an E2E level. Since the POST endpoint really only fakes creation of data, it's hard to start from a new point and go through with editing and verifying that the new data truly exists.

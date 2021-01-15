import { basicDataType } from '../1-1';

test('1-1: 7 kinds of basicDataType', () => {
  expect(basicDataType().sort())
    .toEqual(
      ['string', 'number', 'boolean', 
       'undefined', 'null', 'symbol', 
       'bigint'].sort())
})

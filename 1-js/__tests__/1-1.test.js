import { BasicDataType } from '../1-1';

test('1-1-basic-data-type', () => {
  expect(BasicDataType.sort())
    .toEqual(
      ['string', 'number', 'boolean', 
       'undefined', 'null', 'symbol', 
       'bigint'].sort())
})
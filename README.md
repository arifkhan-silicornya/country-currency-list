# country-currency-list
this is a small node package for find your specific country, currency, iso code or symbol. you can get a full data or filter data.

![npm](https://img.shields.io/npm/v/country-currency-list)
![npm](https://img.shields.io/npm/l/country-currency-list?color=002350)
![npm](https://img.shields.io/bundlephobia/minzip/country-currency-list/1.0.1)

## Install it via npm

```shell
npm i country-currency-list
```

## Require the Module

```shell
const allData = require('country-currency-list')
```
[
  {
    countryName: 'Andorra',
    currency: 'EUR',
    symbol: '€',
    iso_code: 'AD'
  },
  {
    countryName: 'United Arab Emirates',
    currency: 'AED',
    symbol: 'د.إ',
    dateFormat: 'dd/MM/yyyy',
    iso_code: 'AE'
  },
  {
    countryName: 'Afghanistan',
    currency: 'AFN',
    symbol: 'Af',
    iso_code: 'AF'
  },
  {
    countryName: 'Antigua and Barbuda',
    currency: 'XCD',
    symbol: 'XCD',
    iso_code: 'AG'
  },
  {
    countryName: 'Anguilla',
    currency: 'XCD',
    symbol: 'XCD',
    iso_code: 'AI'
  },
  {
    countryName: 'Albania',
    currency: 'ALL',
    symbol: 'ALL',
    dateFormat: 'yyyy-MM-dd',
    iso_code: 'AL'
  },
  {
    countryName: 'Armenia',
    currency: 'AMD',
    symbol: 'AMD',
    iso_code: 'AM'
  },
  {
    countryName: 'Angola',
    currency: 'AOA',
    symbol: 'AOA',
    iso_code: 'AO'
  },
  {
    countryName: 'Argentina',
    currency: 'ARS',
    symbol: 'AR$',
    dateFormat: 'dd/MM/yyyy',
    iso_code: 'AR'
  },
  {
    countryName: 'American Samoa',
    currency: 'USD',
    symbol: '$',
    iso_code: 'AS'
  },
  {
    countryName: 'Austria',
    currency: 'EUR',
    symbol: '€',
    dateFormat: 'dd.MM.yyyy',
    iso_code: 'AT'
  },
  {
    countryName: 'Australia',
    currency: 'AUD',
    symbol: 'AU$',
    dateFormat: 'd/MM/yyyy',
    iso_code: 'AU'
  },
  {
    countryName: 'Bangladesh',
    currency: 'BDT',
    symbol: 'Tk',
    iso_code: 'BD'
  },
  ..... more items
]
```
## To use

```shell
const data = allData(); // All Data
const data = allData('Bangladesh'); // Filter by Country Name
const data = allData('BD'); // Filter by Iso Code 
const data = allData('BDT'); // Filter by Currency

console.log(data);

```

## Output

```shell
[
  {
    countryName: 'Bangladesh',
    currency: 'BDT',
    symbol: 'Tk',
    iso_code: 'BD'
  }
]


## Parameters 

## License
The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
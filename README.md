# pluckey - plucks key
A tiny util library to pluck key from deep arrays and objects

```js
const pluckey = require('pluckey');

//sample object
let college={
	class:{
		student:[{
			'name':'Vigneshwaran P',
			'rollNo':'103',
			'results':[
				{
					'subject': 'Tamil',
					'mark':99
				},
				{
					'subject': 'Nodejs',
					'mark':80
				}
			]
		},
		{
			'name':'Bob',
			'rollNo':'102',
			'results':[
				{
					'subject': 'English',
					'mark':88
				},
				{
					'subject': 'Nodejs',
					'mark':89
				}
			]
		}
		]
	}
}

plucky(college,'class.student.results.subject');
//output=> [ 'Tamil', 'Nodejs', 'English', 'Nodejs' ]

plucky(college,'class.student.results'); 
/*output=> [
  { subject: 'Tamil', mark: 99 },
  { subject: 'Nodejs', mark: 80 },
  { subject: 'English', mark: 88 },
  { subject: 'Nodejs', mark: 89 }
]*/

plucky(college,'class.student.name');
//output=>[ 'Vigneshwaran P', 'Bob' ]
```

## Installation
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install pluckey
```

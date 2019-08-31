const plucky = require('./index');

console.log("Testing plucky...");

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
console.log(plucky(college,'class.student.results.subject'));
console.log(plucky(college,'class.student.results'));
console.log(plucky(college,'class.student.name'));

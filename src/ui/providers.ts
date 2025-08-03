import { Injectable } from '@angular/core';
import { addActionBarItem } from '@vendure/admin-ui/core';

@Injectable()
class MyService {
	greet() {
		return 'Hello!';
	}
}

export default [
	MyService,
	addActionBarItem({
		id: 'btn-hello',
		label: 'Say hello',
		locationId: 'order-detail',
		onClick: (event, context) => {
			const myService = context.injector.get(MyService);
			console.log(myService.greet());
			alert(myService.greet());

		},
	}),
];
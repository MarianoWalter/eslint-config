// Test file

/**
 * Test function
 * @returns { string }
 */
async function test() {
	// Comment
	return Promise.resolve(`Example ${1}`)
	.then(str => `'${str}'`)
	.catch(e => {
		e.hasOwnProperty('abc');
		console.error('Error:', e);
	});
}

let test_let = Promise.resolve(3);
const test_const = (x => x)(test_var);

var test_var = test_let ? 1 : {
	attr1: 'first',
	second: [
		'a',
		true,
		{ test, b: 2.2 },
		function() { /* anonymous */ },
		async function test_attr1(_x, ...rest) {
			let _unused_var; // no-unused-vars { varsIgnorePattern }
			switch (_x) {
				// indent { SwitchCase=1 }
				case 1: break;
				case 2: {
					console.info(...rest, {
						asObj: { ...rest },
					});
					return;
				}
				/* eslint-disable-next-line indent */
			default: break;
			}
			let c = 0;
			while (c++ < 10) {
				_x = await test_let;
				if (c === 3) {
					c += 2;
				} else {
					console['warn'].apply(console, [_x]);

					/* eslint-disable-next-line no-debugger */
					debugger;
				}
			}
		},
		function test_attr2(a, b, _c, _d) { // unused arguments
			/* eslint-disable-next-line no-constant-condition */
			while (true) {
				/* eslint-disable-next-line no-useless-catch */
				try {
					if (a) {
						const err = new Error();
						throw err;
					} else {
						return test_const + a + b;
					}
				} catch (e) {
					throw e; // no-useless-catch rule
				}
			}

		},
		async () => _test_return => test_var['second'] || false,
	],
};

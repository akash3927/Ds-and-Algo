/** @format */

let ascore = 0;
let bscore = 0;
for (let i = 0; i < 3; i++) {
	if (a[i] > b[i]) {
		ascore++;
	}
	if (b[i] > a[i]) {
		bscore++;
	}
}
return [ascore, bscore];

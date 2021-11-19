/** @format */

///Program to check if two given integer values are in the range 50…99. Return true if either of them are in said range.
function checkInRange(x, y) {
	if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
		return true;
	} else {
		return false;
	}
}
checkInRange(60, 80);

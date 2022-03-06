export default class Utils {
	static checkIsEmail(parametar: string) {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(parametar);
	}

	static checkIsDate(parametar: string) {
		return !isNaN(new Date(parametar).getDate());
	}
}

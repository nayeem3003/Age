function calculateAge(event) {
	event.preventDefault();

	const dob = new Date(document.getElementById("dob").value);
	const today = new Date();

	const ageInMilliseconds = today - dob;
	const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
	const ageInMinutes = Math.floor(ageInSeconds / 60);
	const ageInHours = Math.floor(ageInMinutes / 60);
	const ageInDays = Math.floor(ageInHours / 24);
	const ageInMonths = Math.floor(ageInDays / 30);
	const ageInYears = Math.floor(ageInMonths / 12);

	const result = document.getElementById("result");
	result.innerHTML = `You are ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days, ${ageInHours} hours, ${ageInMinutes} minutes, and ${ageInSeconds} seconds old.`;
}

<script>
	let dateOfBirth = $state('');
	let secondsSinceBirth = $state('calculating');

    let statment = $state("")
    let arrOfStatments = [
        "What will you do with each second?", 
        "Make every second count", 
        "Time is precious", 
        "Every second is a gift", 
        "Cherish every moment", 
        "Time waits for no one", 
        "Seize the day", 
        "Live in the moment", 
        "Time flies, make it worthwhile", 
        "Every second matters", 
        "Don't waste a single second", 
        "Time is the most valuable thing", 
        "Make the most of now", 
        "Time is a treasure", 
        "Every second is an opportunity",
        "Time is your most valuable asset", 
        "Every second is a chance to improve", 
        "Time is the essence of life", 
        "Make time for what matters", 
        "Time is the currency of life", 
        "Every second is a fresh start", 
        "Time is the key to success", 
        "Value every second", 
        "Time is the ultimate equalizer", 
        "Every second is a step forward", 
        "Time is the foundation of achievement", 
        "Make every second meaningful", 
        "Time is the greatest gift", 
        "Every second is a blessing", 
        "Time is the path to greatness"
    ];
	import { onMount } from 'svelte';

	function calculateSecondsSinceBirth(dateOfBirth) {
		const birthDate = new Date(dateOfBirth);
		const now = new Date();
		let seconds = 0;

		for (let year = birthDate.getFullYear(); year <= now.getFullYear(); year++) {
			const start = new Date(year, 0, 1);
			const end = new Date(year + 1, 0, 1);
			const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
			const daysInYear = isLeapYear ? 366 : 365;

			if (year === birthDate.getFullYear()) {
				seconds += (end - birthDate) / 1000;
			} else if (year === now.getFullYear()) {
				seconds += (now - start) / 1000;
			} else {
				seconds += daysInYear * 24 * 60 * 60;
			}
		}

		return Math.floor(seconds);
	}

	onMount(() => {
		const interval = setInterval(() => {
			if (dateOfBirth) {
				secondsSinceBirth = calculateSecondsSinceBirth(dateOfBirth);
                if (Math.random() < 0.05) {
                    statment = arrOfStatments[Math.floor(Math.random() * arrOfStatments.length)];
                } else {
                    statment = "";
                }
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-1 flex-col h-full min-h-screen bg-black text-white">
	<div class="m-auto flex flex-col">
		{#if !dateOfBirth}
			<h1 class="text-3xl font-bold mb-4 text-white">Seconds since your birth</h1>
			<input
				type="date"
				bind:value={dateOfBirth}
				class="border border-gray-300 p-2 rounded mb-4 text-black"
			/>
		{:else}
			<div class="flex flex-col w-full max-w-5xl">
				<p class="text-lg mt-2 text-white w-full text-center">
					<span class="font-mono">{secondsSinceBirth}</span> seconds
				</p>
                {#if statment}
                    <p class="text-lg mt-8 w-full text-center">{statment}</p>
                {/if}
			</div>
		{/if}
	</div>
</div>

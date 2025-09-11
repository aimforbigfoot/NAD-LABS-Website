<script>
	import '$lib/css/app.css';
	import { browser } from '$app/environment';
	import { PUBLIC_UMAMI_WEBSITE_ID } from '$env/static/public';
	import { onMount } from 'svelte';
	let isInDev = import.meta.env.MODE === 'development';
	let { nadlabslogo } = '$lib/images/nadlabstransback.png';
	import MainHeader from './../lib/comps/genComps/MainHeader.svelte';

	let { children, data } = $props();

	onMount(() => {
		// Only load Umami if website ID is configured and we're in browser
		if (!isInDev) {
			if (
				browser &&
				PUBLIC_UMAMI_WEBSITE_ID &&
				PUBLIC_UMAMI_WEBSITE_ID !== 'your_umami_website_id'
			) {
				const script = document.createElement('script');
				script.defer = true;
				script.src = 'https://cloud.umami.is/script.js';
				script.setAttribute('data-website-id', PUBLIC_UMAMI_WEBSITE_ID);
				document.head.appendChild(script);

				console.log('Umami analytics loaded with website ID:', PUBLIC_UMAMI_WEBSITE_ID);
			}
		} else {
			console.log('Development mode: Umami analytics not loaded.');
		}
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/png" href={nadlabslogo} />
</svelte:head>

<MainHeader />

<slot />

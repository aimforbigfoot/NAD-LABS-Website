<script>
	import { goto } from '$app/navigation';

	const goToMapCrafter = () => {
		goto('/GodotMapcrafterDocs');
	};

	const goToSecondsSinceBirth = () => {
		goto('/SecondsSinceBirth');
	};
</script>

<div class="navbar bg-accent">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">NAD LABS</a>
	</div>
	<div class="flex-none rounded-lg">
		<ul class="menu menu-horizontal px-1 rounded-lg">
			<li><a onclick={goToMapCrafter} href="/GodotMapcrafterDocs">Godot Mapcrafter Docs</a></li>
			<li><a onclick={goToSecondsSinceBirth} href="/SecondsSinceBirth">Seconds Since Birth</a></li>
			<!-- <li>
				<details class="shadow-lg rounded-lg">
					<summary>Extra</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a href="/?about">About</a></li>
						<li><a href="/?contact">Contact</a></li>
					</ul>
				</details>
			</li> -->
		</ul>
	</div>
</div>

<script lang="ts">
	import NavLink from "$lib/components/nav/NavLink.svelte";
</script>

<header class="bg-light/90 dark:bg-dark/90 backdrop-blur-lg flex justify-center sticky top-0 px-4">
	<div class="container flex justify-between py-2">
		<div>
			<!--! Temporary div for logo placement -->
			<div class="w-10 h-10 bg-dark dark:bg-light rounded-sm" />
			<!-- <img src="" alt="" class="h-10 object-contain"> -->
		</div>

		<nav class="flex items-center gap-4">
			<NavLink text="Roadmap" url="/roadmaps" />
			<NavLink text="All courses" url="/courses" />
			<NavLink text="About" url="/about" />
			<NavLink text="Contact" url="/contact" />

			<a 
				href="/login"
				class="py-1 px-2 bg-dark dark:bg-light text-light dark:text-dark rounded text-sm hover:bg-primary hover:text-light duration-300 ease-linear"
			>
				Start Now
			</a>
		</nav>
	</div>
</header>
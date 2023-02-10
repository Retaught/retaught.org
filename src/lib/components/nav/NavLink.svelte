<script lang="ts">
	// Url to redirect
	export let url:string;
	// if target blank - redirect to another website
	export let _blank:boolean = false;
	// Text to display
	export let text:string;
	// Define if its the actual page
	export let active:boolean = false;
</script>

<a 
	href={url}
	class="text-dark dark:text-light hover:underline opacity-70 hover:opacity-100 duration-300 ease-in-out"
>
	{text}
</a>
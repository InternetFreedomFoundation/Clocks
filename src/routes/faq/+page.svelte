<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<Accordion.Root type="single" class="mx-auto w-full sm:max-w-[70%]">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>What is the purpose/use of this project?</Accordion.Trigger>
		<Accordion.Content
			>We at IFF created this project as an attempt to solve LinkRot issues for links used across
			IFF.</Accordion.Content
		>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>How do I use it?</Accordion.Trigger>
		<Accordion.Content
			>If You find an URL that is no longer working on any Internet Freedom Foundation website, copy
			the URL and paste in the search bar. Please note that the results might be limited as
			historical links might not be archived yet.</Accordion.Content
		>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.Trigger>Can I access archives of any URLs?</Accordion.Trigger>
		<Accordion.Content
			>Only Archives of links that are used on IFF websites can be searched for. This is not an
			alternative to services like the Internet Archive.</Accordion.Content
		>
	</Accordion.Item>
	<Accordion.Item value="item-4">
		<Accordion.Trigger>How can I access private archives?</Accordion.Trigger>
		<Accordion.Content
			>Some Archives may be marked as private, if you'd like to get access, please drop an email at
			media(at)internetfreedom(dot)in.</Accordion.Content
		>
	</Accordion.Item>
</Accordion.Root>

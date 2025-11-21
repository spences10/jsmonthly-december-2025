<script lang="ts">
	import { Transition } from '@animotion/core'
	import { Bluesky } from 'sveltekit-embed'
</script>

<!-- Bluesky Post Embed Slide -->
<!-- Use for: Embedding Bluesky posts in presentations -->
<!-- How to get the post_id:
     1. Go to your Bluesky post
     2. Click the dropdown menu (•••)
     3. Select "Embed Post"
     4. Copy the did:plc identifier (format: did:plc:xxxxx/app.bsky.feed.post/xxxxx)
     5. Replace the post_id below
-->

<Transition visible entry="scale-in" duration={0.6} class="w-full">
	<h2 class="text-center text-6xl font-bold">From Bluesky</h2>
</Transition>

<div style="width: 100%; display: flex; justify-content: center; transform: scale(1.5);">
	<Bluesky
		post_id="did:plc:fger3nuzbr624qn6qkm63kuf/app.bsky.feed.post/3m5k4gnasnq2t"
		iframe_styles="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 600px;"
	/>
</div>

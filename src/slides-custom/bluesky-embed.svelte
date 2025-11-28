<script lang="ts">
	import { Transition } from '@animotion/core'
	import { Bluesky } from 'sveltekit-embed'

	interface Props {
		post_id: string
		scale?: number
	}

	let { post_id, scale = 1.5 }: Props = $props()
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

<div style="width: 100%; display: flex; justify-content: center; transform: scale({scale});">
	<Bluesky
		{post_id}
		iframe_styles="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 600px;"
	/>
</div>

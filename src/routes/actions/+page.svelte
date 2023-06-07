<script lang="ts">
  import type { PageLoad } from "../$types";
  import { format } from "timeago.js";

  export let data: PageLoad;
</script>

<dl class="list-dl divide-y">
  {#each data.actions as action}
    <div>
      <span class="badge text-xl">{action.icon}</span>
      <span class="flex-auto">
        <dt>{action.name}</dt>
        <dd><small>{format(action.created)}</small></dd>
      </span>
			<span class="rounded-full badge bg-surface-200-700-token text-lg w-8 h-8">
				▶
			</span>
    </div>
  {/each}
  <!-- ... -->
</dl>

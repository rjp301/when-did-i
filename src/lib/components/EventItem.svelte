<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { pb } from "$lib/pocketbase";
  import formatDate from "$lib/utils/formatDate";
  import type { Record } from "pocketbase";

  export let event: Record;
  export let showAction = false;

  import * as timeago from "timeago.js";

  $: time = timeago.format(event.time);
  const updateTime = () => {
    const newTime = timeago.format(event.time);
    if (time !== newTime) time = newTime;
  };

  const interval = setInterval(updateTime, 1000);

  const remove = async () => {
    await pb.collection("events").delete(event.id);
    invalidateAll();
  };
</script>

<li class="py-2 flex items-center">
  <div class="flex-auto">
    <div>
      {time}
    </div>
    <div class="text-sm">
      {#if showAction}
        {event.expand.action_id.icon} {event.expand.action_id.name}
      {/if}
    </div>
    <div class="text-sm opacity-60">{formatDate(new Date(event.time))}</div>
  </div>
  <button class="btn btn-sm" on:click={remove}>delete</button>
</li>

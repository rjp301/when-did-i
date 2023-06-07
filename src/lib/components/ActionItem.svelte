<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { pb } from "$lib/pocketbase";
  import type { Record } from "pocketbase";
  import { onMount } from "svelte";

  export let action: Record;

  import * as timeago from "timeago.js";

  $: time = timeago.format(action.last_time);
  const updateTime = () => {
    const newTime = timeago.format(action.last_time);
    if (time !== newTime) time = newTime;
  };

  const interval = setInterval(updateTime, 1000);

  const recordEvent = async () => {
    const time = new Date().toISOString();
    action.last_time = time;
    await pb.collection("events").create({ time, action_id: action.id });
    await pb.collection("actions").update(action.id, { last_time: time });
    invalidateAll();
  };
</script>

<li class="card flex p-2">
  <button
    class="flex-auto text-left flex items-center gap-2"
    on:click={recordEvent}
  >
    <span class="badge text-xl">{action.icon}</span>
    <span class="flex-auto">
      <div>{action.name}</div>
      <div class="text-sm">{time}</div>
    </span>
  </button>
  <a href={`/actions/${action.id}`} class="btn btn-icon">→</a>
</li>

import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load: PageLoad = ({ params }) => {
  return {
    event: pb.collection("event").getOne(params.event_id),
  };
};

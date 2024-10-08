import { createClient } from "@sanity/client";

const projectId = "jyzmd3u9";
const dataset = "production";
const apiVersion = "2024-10-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

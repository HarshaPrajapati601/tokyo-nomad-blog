import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "gb100rhx", // Find this in your Sanity manage dashboard
  dataset: "production",
  apiVersion: "2026-01-28", // Use today's date for the latest API
  useCdn: true, // Speeds up loading by using Sanity's global network
});
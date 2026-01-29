import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import post from './schemas/post' // Import your new schema

export default defineConfig({
  name: 'default',
  title: 'Tokyo Nomad Diaries Studio',
  projectId: 'gb100rhx',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [post], // Register it here
  },
})
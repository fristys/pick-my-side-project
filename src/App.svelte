<script lang="typescript">
  // CSS normalisation
	import '../node_modules/normalize.css/normalize.css';
	
	import { fade } from 'svelte/transition';

  // TODO don't fetch this from a static file?
  // Project ideas list
  import projectsFromJson from './projects.json';

  // Models
  import { Project as ProjectModel } from './models/project.model';

  // Components
  import Header from './components/Header.svelte';
  import Project from './components/Project.svelte';

  // Values
  const projects: ProjectModel[] = projectsFromJson;

  let project: ProjectModel | null = null;

  function showRandomProject(): void {
    project = projects[Math.floor(Math.random() * projects.length)];
  }
</script>

<style type="scss">
  html,
  html a {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    height: 100%;
    overflow: auto;
    font-size: 16px;
    background: #fafafa;
  }

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<main>
  <Header {project} on:pick={showRandomProject} />

  {#if project}
		<div transition:fade>
			<Project {project} />
		</div>
  {/if}
</main>

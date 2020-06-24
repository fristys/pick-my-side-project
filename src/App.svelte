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
    document.body.style.setProperty('opacity', '0');

    setTimeout(() => {
      document.body.style.setProperty('opacity', '1');
      document.documentElement.style.setProperty('--backgroundStart', randomHex());
      document.documentElement.style.setProperty('--backgroundEnd', randomHex());

      project = projects[Math.floor(Math.random() * projects.length)];
    }, 750);
  }

  function randomHex(): string {
    return `#${((1 << 24) * Math.random()|0).toString(16)}`;
  }
</script>

<style type="scss">
  :global(:root) {
      --textColor: #FFF;
			--backgroundStart: #BB3049;
      --backgroundEnd: #4A2C53;
      
      @media (min-width:768px) {
        --textColor: #000;
      }
  }

  :global(html),
  :global(html a) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  :global(html) {
    overflow: hidden;
    height: 100%;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    height: 100%;
    overflow: auto;
    font-size: 16px;
    color: #FFF;
    color: var(--textColor);
    background: #BB3049;
    background: var(--backgroundStart);
    background: linear-gradient(to bottom left, var(--backgroundStart), var(--backgroundEnd));
    transition: opacity .75s ease-in-out;
  }

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .contain {
      padding: 4rem 1rem;
      max-width: 100%;

      @media (min-width:768px) {
        background-color: #FFF;
        max-width: 80%;
        border-radius: .25rem;
        padding: 5rem;
        box-shadow: .05rem .1rem .25rem rgba(0,0,0,.25);
      }

      @media (min-width:1025px) {
        max-width: 50%;
      }
    }
  }
</style>

<main>
  <div class="contain">
    <Header {project} on:pick={showRandomProject} />

    {#if project}
      <div transition:fade>
        <Project {project} />
      </div>
    {/if}
  </div>
</main>

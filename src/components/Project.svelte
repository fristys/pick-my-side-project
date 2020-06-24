<script lang="typescript">
  import { Project } from '../models/project.model';

  export let project: Project;
</script>

<style lang="scss">
  section {
    margin-top: 3rem;
    color: #000;
    background: #FFFF88;
    padding: 2rem;
    box-shadow: .05rem .1rem .25rem rgba(0,0,0,.25);
  }
</style>

<section class="project">
  <h3>{project.name}</h3>

  {#if project.description}
    <p>{project.description}</p>
  {/if}

  {#if project.author}
    <p>
      <em>- {project.author}</em>
    </p>
  {/if}
</section>

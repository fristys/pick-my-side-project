<script lang="typescript">
  import { Project } from '../models/project.model';

  export let project: Project;
</script>

<style lang="scss">

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

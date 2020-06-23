<script>
  import RandomIcon from './iconmonstr-random-thin.svg';

  import { createEventDispatcher } from 'svelte';

  export let project;

  const dispatch = createEventDispatcher();

  function pickProject() {
    dispatch('pick');
  }
</script>

<style lang="scss">
  header {
    text-align: center;

    h1 {
      font-size: 4rem;
      font-weight: bold;
    }

    button {
      // SR Only
      .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
      }
    }
  }
</style>

<header role="heading">
  <h1>Pick my side project</h1>

  {#if !project}
    <h2>
      Let RNJesus take the wheel and suggest a project idea at random for you
    </h2>
  {/if}

  <button type="button" on:click={pickProject}>
    <span class="sr-only">Pick random project</span>
    <span aria-hidden="true">
      <RandomIcon />
    </span>
  </button>
</header>

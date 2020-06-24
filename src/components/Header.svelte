<script>
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
      font-size: 3rem;
      font-weight: bold;
      padding: 0;
      margin: 0;
      margin-bottom: 1.5rem;

      @media (min-width:768px) {
        font-size: 5rem;
        margin-bottom: 3rem;
      }
    }

    h2 {
      font-weight: normal;
      padding: 0;
      margin: 0;
      margin-bottom: 1.5rem;

      @media (min-width:768px) {
        margin-bottom: 3rem;
      }
    }

    button {
      cursor: pointer;
      background: transparent;
      border: 0;
      transition: opacity .25s;
      outline: none;

      &:hover {
        opacity: .75;
      }

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

      .icon {
        font-size: 3.5rem;

        @media (min-width:768px) {
          font-size: 5rem;
        }
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
    <span class="icon" aria-hidden="true">
      &#127922;
    </span>
  </button>
</header>

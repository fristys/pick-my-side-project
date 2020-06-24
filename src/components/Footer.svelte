<style lang="scss">
  footer {
    margin-top: 4rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);

    span {
      color: rgba(168, 63, 57, 0.75);
    }

    a,
    a:visited {
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.25s;

      &:hover {
        color: #000;
      }
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      a {
        margin-right: 1rem;
        opacity: 0.5;
        transition: opacity 0.25s;

        &:hover {
          opacity: 1;
        }

        img {
          width: 1rem;
          height: 1rem;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>

<footer role="contentinfo">
  <div>
    Made with
    <span>&#9829;</span>
    in Denmark by
    <a href="http://fristys.me">Momchil Georgiev</a>
  </div>

  <div class="flex">
    <a href="https://twitter.com/fristys">
      <span class="sr-only">Momchil's twitter account</span>
      <img
        src="/twitter.svg"
        alt="Momchil's twitter account"
        aria-hidden="true" />
    </a>

    <a href="https://github.com/fristys/pick-my-side-project">
      <span class="sr-only">Github repository</span>
      <img src="/github.svg" alt="Github repository" aria-hidden="true" />
    </a>

    <a href="https://instagram.com/fristys">
      <span class="sr-only">Momchil's instagram account</span>
      <img
        src="/instagram.svg"
        alt="Momchil's instagram account"
        aria-hidden="true" />
    </a>
  </div>
</footer>

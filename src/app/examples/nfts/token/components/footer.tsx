export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-screen-xl py-5">
        <div className="flex justify-between">
          <div className="max-w-lg">
            <div className="text-2xl font-semibold dark:text-neutral-50">
              Columpio Labs
            </div>
            <div className="text-md dark:text-neutral-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto libero quo vel error eum ducimus placeat cupiditate ad
              dolore harum atque consectetur quas dolor esse, inventore
              perferendis quis ullam sit.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-neutral-50">
                Resources
              </h2>
              <ul className="text-md space-y-4 text-neutral-500 dark:text-neutral-400">
                <li>
                  <div>Blog</div>
                </li>
                <li>
                  <div>Learn</div>
                </li>
                <li>
                  <div>Help Center</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-neutral-50">
                Company
              </h2>
              <ul className="text-md space-y-4 text-neutral-500 dark:text-neutral-400">
                <li>
                  <div>Abaout</div>
                </li>
                <li>
                  <div>Careers</div>
                </li>
                <li>
                  <div>Ventures</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-neutral-200 dark:border-neutral-700 sm:mx-auto lg:my-8" />
        <div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            tempora et quasi deleniti nemo atque repellendus culpa? Atque omnis
            amet sequi cumque blanditiis? Vel expedita esse accusamus nesciunt
            iusto in!
          </div>
        </div>
      </div>
    </footer>
  );
}

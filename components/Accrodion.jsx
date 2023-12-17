import React from 'react'

const Accordion = () => {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 font-medium text-gray-500 rtl:text-right dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon
            className="h-3 w-3 shrink-0 rotate-180 transition-all duration-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="border-b border-gray-200 py-5 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>{' '}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      {/* ... Repeat for other accordion items ... */}
    </div>
  )
}

export default Accordion

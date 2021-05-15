This is a [Next.js](https://nextjs.org/) project.

It can be viewed online at [https://ns-fe.vercel.app/](https://ns-fe.vercel.app/)

## Running Locally

You can run this code locally by cloning the repo and running either:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

I've added some basic linting for both JS and CSS. Pushing on from this I would usually add husky to add some hooks that deal with linting / fixing / running the tests.

The project is built on NextJS and uses the `useSWR` hook to grab data, it gives us a nice UI pattern and allows us to control the error, loading and loaded states easily. If I had more time I would provide a better error and loading UI.

[More info on useSWR](https://swr.vercel.app/)

I've kept the CSS as simple as possible. I did consider going in with something like Styled Components but it's small and simple enough that we can achieve what we want without bloating the bundle.

I've used `git flow` throughout this as I always do to manage branching and releases. I've created 3 releases to illustrate how I would work with features and so on.

I managed to get through all the tasks on the list in the time we mentioned besides the dockerfile stuff. I believe vercel no longer support docker. But a quick little google shows that you can still run the project pretty much everywhere else using one.

I was cutting it fine with the additional task so it's a very dirty but it does what is asked. It was the quickest way I could think of getting it in. When viewing the preview I've added another little button in the top right to close the overlay.

I've just added 2 tests, one for checking the app loads and another checking the data starts to load. Ideally, I'd have one for each state as the data is loading in. I've added the `data-ids` to the elements on the page, but I've gone no further. I would usually mock up a response and call that.

I noticed that one of the tasks said the campaign shouldn't display if the end date has passed. I think the data may be a little out of date now so instead of just having one display. I decided to show them all and add a little expired tag to those that are no longer available.

## Deployed on Vercel

For continuous CI/CD the project is deployed on Vercel. Any push to the main(master) branch will automatically trigger a build.

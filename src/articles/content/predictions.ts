import Content from "../Content";

export const pages = [
  // One
  `# We can't predict the future

But boy do we try do. Knack's predictions feature is designed to help you overcome Fortune Telling 

`,

  // Two
  `# Predictions replaces your TODO app.

Predictions can replace your existing TODO app. Most TODO tools aren't designed with your mental health in mind and can actually make you feel worse.

`,

  // Three
  `# Knack is _really_ private. 🔐

**We have no way to read your thoughts.** All the text you write in the app never leaves your phone. 

Since we don't have an account system right now, we don't collect your email or phone number or any other obvious personally identifiable information.

If you don't believe us, you can always go look for yourself. As far as we know, **Knack's the only open source mental health app.**

As a disclaimer, we do record some anonymous analytics about certain features to make sure we haven't released a bug. If you're curious, there's more details on our website.
`,
];

export const title = "Predictions";
export const description = "Let's learn a bit about Knack's weirdest feature.";

const content: Content = {
  pages,
  title,
  description,
  slug: "predictions",
};

export default content;

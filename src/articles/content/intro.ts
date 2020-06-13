import Content from "../Content";

export const pages = [
  // One
  `# Knack is a Cognitive Behavioral Therapy app.

Or at least it's based on CBT. No app is going to replace your therapist and 
this one isn't trying to.

Instead, Knack takes the exercises you might get from a therapist and gives them superpowers. You can think of Knack as an app for CBT enthusiasts.

That said, **you don't need to be seeing a therapist to use Knack.** You don't need to already know what CBT is. You don't even need to be diagnosed with anything; Knack's helped thousands of people who never thought they had any form of depression or anxiety. 

But if you _are_ seeing a therapist, all the better. 
`,

  // Two
  `# Knack works pretty well.

We can't _guarantee_ that Knack will help you feel better, but the majority of people feel better after Knack's exercises. And the more you use Knack, the more likely you are to report feeling better. Well over 1,000 people have said they felt better since we started asking. 

We're not all that surprised since CBT itself is quite effective. One study called it the "gold standard" of psychotherapy and it's used most modern therapists. 

So **we encourage you to give Knack your _best_ try.** Take it seriously and there's a reasonable chance you'll feel a lot better.
`,

  // Three
  `# Knack is _really_ private. 🔐

**We have no way to read your thoughts.** Unlike other apps, the text that you write in the app doesn't leave your phone. 

Since we don't have an account system right now, we don't collect your email or phone number or any other obvious personally identifiable information.

If you don't believe us, you can always go look for yourself. As far as we know, **Knack's the only open source mental health app.**

As a disclaimer, we do record some anonymous telemetry about certain features to make sure we haven't released a bug or caused any harm. If you're curious, there's more details on our website.
`,

  `# There's no magic here.
Knack isn't a bot you talk to, or a daily mood journal, or morning stoic ritual. It doesn't have any machine learning. There's no weird AR component. 

There's no grand technological advancement in this product.

It's just some CBT exercises. That are super private. And that work pretty well. 

Knack's claim-to-fame is that after using it for a couple weeks, most people report feeling better. 
`,

  // Four
  `# You can try Knack for free.

And after that, it's a small monthly subscription about the price of a ham sandwich. 🥪

This helps us create a long-term, sustainable product without ads or one-off in-app purchases. It keeps Knack independent, free prying eyes, and most importantly: alive. 

If Knack helps you feel better, then it's likely worth the price. If not, there's cancellation instructions in the settings of the app. 

We hope you'll love Knack as much as we do. ❤️
`,
];

export const title = "Hey there 👋";
export const description = "Welcome to Knack, let's slow down for a moment.";

const content: Content = {
  pages,
  title,
  description,
  slug: "intro",
};

export default content;

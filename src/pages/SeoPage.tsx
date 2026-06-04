/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";

import AppleLogo from "@/components/AppleLogo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_STORE_URL, HAS_APP_STORE_URL, SITE_URL } from "@/lib/appConfig";
import { trackAppStoreClick } from "@/lib/attribution";
import { useDocumentMetadata } from "@/lib/i18n";

type Faq = {
  question: string;
  answer: string;
};

type SeoPageContent = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  problemTitle: string;
  problem: string[];
  oldWorkflowTitle: string;
  oldWorkflow: string[];
  collectaTitle: string;
  collecta: string[];
  forTitle: string;
  forItems: string[];
  linksTitle: string;
  links: Array<{ to: string; label: string }>;
  faqs: Faq[];
  ctaTitle: string;
  ctaCopy: string;
};

export const seoPages: SeoPageContent[] = [
  {
    slug: "content-planning-app",
    title: "Content Planning App for Creators Who Save Too Many Ideas | Collecta",
    description:
      "Collecta is a content planning app for creators who save posts, links and ideas but need a practical way to turn them into content they publish.",
    eyebrow: "Content planning app",
    h1: "A content planning app for creators who save more ideas than they publish",
    intro: [
      "A good content planning app should not ask you to invent everything from scratch every Monday morning. Most creators already have a pile of useful material. It is sitting in saved posts, bookmarks, notes, screenshots, links, voice memos and half-written thoughts. The hard part is not finding inspiration. The hard part is turning that inspiration into something specific enough to make.",
      "Collecta is built for that exact moment. It helps independent creators collect the ideas they already care about, organize them around real content themes, and turn selected inspiration into hooks, structures, scripts, checklists and next steps. The goal is simple: make it easier to move from saved idea to published post.",
    ],
    problemTitle: "The problem is not a lack of ideas",
    problem: [
      "Creators often blame inconsistency on not having enough ideas. In reality, many have too many. A post gets saved because the angle is smart. A Reel gets saved because the pacing works. A founder thread gets bookmarked because the story is useful. Then all of it disappears into platform folders that were designed for storing, not creating.",
      "That creates a quiet backlog. You know there is good material somewhere, but finding it takes energy. When it is time to make content, you open five apps, scroll old saves, lose the original thought, and end up back on a blank page. The archive keeps growing, but the publishing habit does not.",
    ],
    oldWorkflowTitle: "Why the old workflow fails",
    oldWorkflow: [
      "Most content workflows are split across tools that do not talk to each other. Instagram saves hold visual references. Notes hold rough thoughts. A calendar holds deadlines. A writing app holds drafts. None of those places explains why you saved something or what you planned to do with it.",
      "That means every new post starts with reconstruction. You have to remember the context, choose an angle, decide the format, write the hook, outline the body, and figure out the execution steps. A calendar can tell you when to post, but it cannot turn a messy pile of inspiration into a clear plan. A notes app can store the thought, but it rarely helps you ship it.",
    ],
    collectaTitle: "How Collecta helps",
    collecta: [
      "Collecta starts with the inspiration you already saved. You can bring together references, links and rough ideas in one place, then group them by topic, niche or content bucket. When you are ready to create, you choose the saves you want to work from and turn them into a practical content plan.",
      "That plan can include angles, hooks, post structures, scripts, checklists and clear next steps. Instead of asking a generic tool for content ideas with no context, Collecta helps you use your own taste and references as the starting point. It gives your saved inspiration somewhere to go.",
      "This matters because execution is usually where creators lose momentum. A useful plan lowers the number of decisions between idea and output. You still bring the judgment, story and voice. Collecta helps with the structure so the idea does not stay trapped in your saved folder.",
    ],
    forTitle: "Who this is for",
    forItems: [
      "Independent creators who save useful posts every day but rarely return to them.",
      "Founders building a personal brand around lessons, product updates or market observations.",
      "Solo creators who want repeatable content systems without turning their workflow into a full-time operations job.",
      "Creators who want to publish more consistently without forcing themselves to start from a blank prompt.",
    ],
    linksTitle: "Related creator workflows",
    links: [
      { to: "/saved-posts-to-content-plans", label: "Turn saved posts into content plans" },
      { to: "/content-workflow-for-creators", label: "Build a content workflow for creators" },
      { to: "/content-ideas-app", label: "Keep content ideas from getting lost" },
    ],
    faqs: [
      {
        question: "What makes Collecta different from a normal content calendar?",
        answer:
          "A calendar helps you schedule. Collecta helps before that, when your ideas are still scattered and need to become a post, script or checklist.",
      },
      {
        question: "Is Collecta only for one platform?",
        answer:
          "No. Collecta is built around the creator workflow, so you can plan ideas for platforms like Instagram, TikTok, LinkedIn and X.",
      },
      {
        question: "Do I need a big content strategy before using it?",
        answer:
          "No. Collecta is useful when your strategy is still forming because it helps you see patterns in what you save and turn those patterns into posts.",
      },
      {
        question: "Is Collecta available now?",
        answer: "Yes. Collecta is available on the App Store.",
      },
    ],
    ctaTitle: "Start planning from the ideas you already saved",
    ctaCopy:
      "Download Collecta on the App Store and turn saved inspiration into content plans you can actually execute.",
  },
  {
    slug: "saved-posts-to-content-plans",
    title: "Turn Saved Posts Into Content Plans | Collecta",
    description:
      "Learn how Collecta helps creators turn saved posts into content plans with angles, hooks, scripts and clear next steps.",
    eyebrow: "Saved posts to content plans",
    h1: "Turn saved posts into content plans you can actually create",
    intro: [
      "Saving a post is easy. Turning it into your own content is the part that usually gets skipped. You see a strong angle, a useful format or a smart way someone explained an idea, so you save it with good intentions. A week later it is buried under more saves, and the reason you cared about it is gone.",
      "Collecta helps creators turn saved posts into content plans. It is for the moment when you already have inspiration, but you need a practical way to decide what to make from it. The output is not just another saved item. It is an angle, a structure, a hook, a script direction and a checklist that moves the idea closer to publishing.",
    ],
    problemTitle: "Saved posts create a false sense of progress",
    problem: [
      "There is nothing wrong with saving inspiration. It is often how creators develop taste. The issue is that saving feels like an action even when it does not create an outcome. Your saved folder becomes a place where good intentions go to sit.",
      "The longer that folder grows, the harder it becomes to use. You have to scroll through old references, remember why each one mattered, and separate inspiration from distraction. By the time you find something useful, the energy to create may already be gone.",
    ],
    oldWorkflowTitle: "Why copying the old workflow does not work",
    oldWorkflow: [
      "A common approach is to save posts on each platform, then later open them while trying to write. That sounds simple, but it depends on memory. You have to remember the original idea, the audience you had in mind, and the format you wanted to try. Most platforms are optimized to keep you scrolling, so revisiting saves can easily turn back into consumption.",
      "Another approach is to paste links into a notes app. That gives you one place to store references, but it still leaves the hard work untouched. A list of links is not a plan. It does not tell you which angle is strongest, how the post should open, what points to cover, or what steps you need before publishing.",
    ],
    collectaTitle: "How Collecta helps you move from save to execution",
    collecta: [
      "Collecta gives your saved posts a working space. You can collect references and ideas, organize them by theme, and choose the specific saves you want to create from. That last step is important. Good content usually starts with selection, not with a giant archive.",
      "From there, Collecta helps turn the selected inspiration into a content plan. You can use it to shape the angle, generate hook options, outline the post or script, and create a checklist for what needs to happen next. The plan is grounded in what you saved, but it is designed to help you make something in your own voice.",
      "The point is not to automate your taste. The point is to stop losing your taste inside folders. When your references are easier to find and easier to act on, you can spend less time recovering old ideas and more time publishing new ones.",
    ],
    forTitle: "Who this is for",
    forItems: [
      "Creators with hundreds of saved posts and no clear system for using them.",
      "Instagram and TikTok creators who save formats, hooks and editing ideas.",
      "Founders who bookmark smart examples but need to turn them into original posts.",
      "Anyone who wants saved inspiration to become a content pipeline instead of a storage habit.",
    ],
    linksTitle: "Keep building the workflow",
    links: [
      { to: "/content-planning-app", label: "Use a content planning app built for saves" },
      { to: "/instagram-saved-posts-content", label: "Use Instagram saved posts for content ideas" },
      { to: "/content-ideas-app", label: "Organize content ideas before they disappear" },
    ],
    faqs: [
      {
        question: "Can saved posts really become original content?",
        answer:
          "Yes, if you use them as references instead of templates to copy. Collecta helps you turn the reason you saved something into your own angle and structure.",
      },
      {
        question: "Does Collecta publish for me?",
        answer:
          "No. Collecta helps you plan and prepare the content. You stay in control of the final draft, recording and publishing.",
      },
      {
        question: "What should I save in Collecta?",
        answer:
          "Save posts, links, formats, rough ideas and references that you may want to turn into future content.",
      },
      {
        question: "Is Collecta available on iPhone?",
        answer: "Yes. Collecta is available on the App Store.",
      },
    ],
    ctaTitle: "Make your saved posts useful again",
    ctaCopy:
      "Download Collecta and start turning saved posts into content plans with clear next steps.",
  },
  {
    slug: "content-ideas-app",
    title: "Content Ideas App for Saved Inspiration and Rough Thoughts | Collecta",
    description:
      "Collecta is a content ideas app that helps creators keep saved inspiration, links and rough thoughts from getting lost.",
    eyebrow: "Content ideas app",
    h1: "A content ideas app for creators whose best thoughts keep getting lost",
    intro: [
      "The best content ideas rarely arrive while you are sitting down to write. They show up while scrolling, walking, reading, replying to a customer, watching another creator or thinking through a problem in your own work. You save something, write a quick note, or tell yourself you will come back to it later.",
      "Then later comes, and the idea is gone. Collecta is a content ideas app for independent creators who need a simple place to keep saved inspiration, links and rough thoughts connected to the content they want to make. It is built for capture, organization and execution, not just storage.",
    ],
    problemTitle: "Ideas get lost because they live in too many places",
    problem: [
      "A creator's idea system often grows by accident. Some ideas are in Apple Notes. Some are in Instagram saved posts. Some are in TikTok favorites. Some are in browser bookmarks, Slack messages, camera rolls or text threads to yourself. Each place made sense in the moment, but the total system becomes hard to trust.",
      "When you cannot trust the system, you stop using it. You may still save things, but you do not expect them to turn into output. That is when idea capture becomes idea hoarding. The collection grows, but the creator does not get more consistent.",
    ],
    oldWorkflowTitle: "Why a notes app is not always enough",
    oldWorkflow: [
      "A notes app is useful for writing down thoughts, but it is usually too open-ended for content execution. A rough line, a pasted link and a half-written hook can sit beside grocery lists, meeting notes and random reminders. There is no natural path from the note to a finished post.",
      "Spreadsheets and content calendars can help with planning, but they often assume the idea is already clear. They are less helpful when the idea is still a saved reference, a reaction, a loose observation or a format you want to adapt later. Creators need a middle layer between capturing inspiration and scheduling finished content.",
    ],
    collectaTitle: "How Collecta helps ideas become usable",
    collecta: [
      "Collecta gives saved inspiration and rough thoughts a home that is connected to creation. You can keep ideas together, categorize them by topic, and return to them when you are ready to make something. Instead of sorting through unrelated notes, you are looking at a workspace built around future content.",
      "When an idea is ready to move forward, Collecta helps turn it into a plan. You can create hooks, outlines, scripts, post structures and execution checklists from the references and context you provide. The idea does not have to be perfect before you start. It just needs enough signal to build from.",
      "This makes the creator workflow lighter. You can capture ideas without pressure, then come back later and turn the strongest ones into something concrete. The habit becomes less about collecting everything and more about creating from what already caught your attention.",
    ],
    forTitle: "Who this is for",
    forItems: [
      "Creators who have ideas scattered across notes, saves, bookmarks and messages.",
      "Founders who think in public but lose good observations before they become posts.",
      "Solo creators who want a practical idea bank tied to execution.",
      "Anyone who wants to stop starting from zero every time they sit down to create.",
    ],
    linksTitle: "Related pages",
    links: [
      { to: "/content-planning-app", label: "Plan content from saved ideas" },
      { to: "/saved-posts-to-content-plans", label: "Turn saved posts into content plans" },
      { to: "/content-workflow-for-creators", label: "Build a better creator workflow" },
    ],
    faqs: [
      {
        question: "Is Collecta just an idea bank?",
        answer:
          "No. Collecta helps you store and organize ideas, but it is also built to turn selected inspiration into executable content plans.",
      },
      {
        question: "Can I use Collecta for rough thoughts?",
        answer:
          "Yes. Collecta is useful for saved links and posts, but also for rough thoughts that need structure before they become content.",
      },
      {
        question: "What if my ideas are messy?",
        answer:
          "That is normal. Collecta is designed for the messy middle between noticing an idea and knowing exactly how to publish it.",
      },
      {
        question: "Where can I get Collecta?",
        answer: "Collecta is available now on the App Store.",
      },
    ],
    ctaTitle: "Keep ideas close to the work",
    ctaCopy:
      "Download Collecta and give your saved inspiration and rough thoughts a place to become real content.",
  },
  {
    slug: "instagram-saved-posts-content",
    title: "Use Instagram Saved Posts for Content Ideas | Collecta",
    description:
      "Stop letting Instagram saved posts sit forever. Collecta helps creators use saved Instagram inspiration to plan original content.",
    eyebrow: "Instagram saved posts content ideas",
    h1: "Stop letting Instagram saved posts sit there forever",
    intro: [
      "Instagram saved posts can be a goldmine for creators. You save hooks, formats, carousels, captions, visuals, angles, editing ideas and examples of how other people explain things. The problem is that Instagram saves are easy to collect and hard to use.",
      "Collecta helps you turn Instagram saved posts and other inspiration into content ideas you can actually create. It gives those saves a path out of the folder: organize the reference, choose what you want to build from, and turn it into a plan with hooks, structure and next steps.",
    ],
    problemTitle: "Instagram saves are built for bookmarking, not execution",
    problem: [
      "When you save a post on Instagram, you usually know why it matters in that moment. Maybe the opening line is sharp. Maybe the creator used a format you want to try. Maybe the topic fits your niche. But the saved post itself does not capture your reason.",
      "Weeks later, you may remember that you saved something useful, but not where it is or what you wanted to do with it. The folder becomes another feed. You scroll your own archive, get pulled into more content, and leave without creating anything.",
    ],
    oldWorkflowTitle: "Why the usual Instagram save workflow breaks down",
    oldWorkflow: [
      "The default workflow is passive. You save first and think later. That works when you only have a few references, but it breaks when saving becomes a daily habit. A creator can easily collect hundreds of posts across formats and topics without a clear way to choose the next idea.",
      "Collections can help, but they still live inside Instagram. They do not connect naturally to your notes, scripts, content calendar or publishing checklist. They also do not help you translate a reference into your own point of view. A saved carousel is not the same thing as your carousel. A saved Reel is not the same thing as your script.",
    ],
    collectaTitle: "How Collecta helps with Instagram saved inspiration",
    collecta: [
      "Collecta is designed to help creators use saved inspiration without staying trapped in consumption mode. You can bring references and ideas into one workspace, organize them by topic, and use them as starting points for new content.",
      "When you are ready to create, you select the inspiration you want to work from. Collecta can help turn that context into a content plan: possible angles, hook options, post structure, script direction and a simple execution checklist. It helps you move from 'I liked this' to 'Here is what I am making from it.'",
      "The result should still sound like you. Collecta is not there to copy another creator's post. It is there to help you understand why the reference worked, connect it to your own idea, and make the next step easier.",
    ],
    forTitle: "Who this is for",
    forItems: [
      "Instagram creators with saved folders full of formats and hooks.",
      "Founders who save examples of storytelling, product education or personal brand posts.",
      "Creators who use Instagram for research but need to leave the app to actually create.",
      "Anyone who wants saved Instagram posts to become original content ideas instead of permanent bookmarks.",
    ],
    linksTitle: "Turn more inspiration into output",
    links: [
      { to: "/saved-posts-to-content-plans", label: "Turn saved posts into content plans" },
      { to: "/content-ideas-app", label: "Use a content ideas app for rough thoughts" },
      { to: "/content-planning-app", label: "Plan content from saved inspiration" },
    ],
    faqs: [
      {
        question: "Can Collecta help me copy Instagram posts?",
        answer:
          "No. Collecta is for turning inspiration into original content plans, not copying another creator's work.",
      },
      {
        question: "Why not just use Instagram Collections?",
        answer:
          "Collections are useful for storing posts, but they do not give you a full workflow for turning references into hooks, scripts and checklists.",
      },
      {
        question: "Can I use Collecta for platforms beyond Instagram?",
        answer:
          "Yes. Collecta is useful for inspiration from Instagram, TikTok, LinkedIn, X, links and rough notes.",
      },
      {
        question: "Is Collecta available on the App Store?",
        answer: "Yes. Collecta is available on the App Store.",
      },
    ],
    ctaTitle: "Give your Instagram saves a next step",
    ctaCopy:
      "Download Collecta and start turning saved Instagram inspiration into content you can make.",
  },
  {
    slug: "content-workflow-for-creators",
    title: "Content Workflow for Creators With Ideas Everywhere | Collecta",
    description:
      "Build a better content workflow for creators whose ideas, saved posts and inspiration are scattered across too many places.",
    eyebrow: "Content workflow for creators",
    h1: "A better content workflow for creators whose ideas are everywhere",
    intro: [
      "A strong content workflow should make creating feel more direct. For many independent creators, the workflow does the opposite. Ideas live in too many places, references are hard to find, and every post starts with a search through old saves, notes and links.",
      "Collecta helps creators build a cleaner path from inspiration to execution. It brings saved posts, links and rough thoughts into one place, then helps turn the best material into content plans with hooks, scripts, structures and checklists. The workflow is simple: collect what matters, organize it, choose what to create from, and execute.",
    ],
    problemTitle: "The creator workflow often breaks before writing starts",
    problem: [
      "Most creators do not struggle because they have nothing to say. They struggle because their inputs are scattered. A good thought might be in a note. A reference might be saved on Instagram. A useful post might be bookmarked on X. A script idea might be buried in a voice memo.",
      "When inputs are scattered, creation becomes heavy. You spend the first part of each session finding the idea instead of developing it. You make the same decisions repeatedly: what should I post, what angle should I take, how should it open, what format fits, and what needs to happen before I can publish?",
    ],
    oldWorkflowTitle: "Why more tools do not always fix it",
    oldWorkflow: [
      "It is tempting to solve the problem by adding more tools. A calendar for scheduling. A spreadsheet for topics. A notes app for ideas. A writing app for drafts. A folder for references. Each tool can be useful, but together they can create more surface area than a solo creator can maintain.",
      "The real missing piece is the handoff between inspiration and execution. Capturing inspiration is one workflow. Publishing content is another. Many creators do not have a clear bridge between the two. That is why a saved post can feel valuable when you find it and useless when you need to create.",
    ],
    collectaTitle: "How Collecta creates a clearer execution workflow",
    collecta: [
      "Collecta focuses on the bridge. It helps you collect the posts, links and ideas that might become content, then organize them around the topics you actually talk about. When it is time to create, you can select the references that match the post you want to make.",
      "From there, Collecta helps create a practical plan. It can shape the angle, suggest hooks, outline the structure, draft a script direction and create a checklist. That gives each idea a next step instead of leaving it in a folder.",
      "The workflow is intentionally creator-focused. It does not require a large team, a complex content operation or a perfect strategy document. It is for the everyday process of noticing ideas, keeping them in reach, and turning them into posts more consistently.",
    ],
    forTitle: "Who this is for",
    forItems: [
      "Independent creators who want a repeatable way to go from idea to post.",
      "Founders and solo operators who create around their work but do not have a content team.",
      "Creators who save more inspiration than they publish.",
      "Anyone who wants fewer blank-page sessions and more clear execution steps.",
    ],
    linksTitle: "Related workflows",
    links: [
      { to: "/content-planning-app", label: "Choose a content planning app for creators" },
      { to: "/content-ideas-app", label: "Keep content ideas organized" },
      { to: "/saved-posts-to-content-plans", label: "Turn saved posts into plans" },
    ],
    faqs: [
      {
        question: "What is a content workflow for creators?",
        answer:
          "It is the repeatable path from noticing an idea to publishing content. For solo creators, that usually includes capturing inspiration, organizing it, planning the post and executing.",
      },
      {
        question: "Does Collecta replace my content calendar?",
        answer:
          "Not necessarily. Collecta helps with the earlier stage: turning scattered ideas and saves into clear plans that can later be scheduled or published.",
      },
      {
        question: "Can this work for solo creators?",
        answer:
          "Yes. Collecta is built for independent creators, founders and solo creators who need a lightweight workflow.",
      },
      {
        question: "Can I try Collecta now?",
        answer: "Yes. Collecta is available on the App Store.",
      },
    ],
    ctaTitle: "Build a workflow that ends in published content",
    ctaCopy:
      "Download Collecta and turn scattered ideas into content plans with clear execution steps.",
  },
];

export const getSeoPage = (slug: string) => seoPages.find((page) => page.slug === slug);

const getCanonicalUrl = (slug: string) => `${SITE_URL.replace(/\/$/, "")}/${slug}`;

const SeoPage = ({ page }: { page: SeoPageContent }) => {
  useDocumentMetadata({
    title: page.title,
    description: page.description,
    imageAlt: `${page.h1} - Collecta`,
    canonical: getCanonicalUrl(page.slug),
  });

  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "/#download";

  return (
    <div className="min-h-screen bg-[#fbfcf7] text-[#111312]">
      <Navbar />
      <main>
        <article className="px-5 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#56ABA0]">
              {page.eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <div className="mx-auto mt-7 max-w-3xl space-y-5 text-lg leading-8 text-[#646865]">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={ctaHref}
              target={HAS_APP_STORE_URL ? "_blank" : undefined}
              rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
              onClick={() => {
                if (HAS_APP_STORE_URL) trackAppStoreClick(ctaHref);
              }}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111312] px-6 py-3 text-base font-bold text-white shadow-[0_18px_34px_-20px_rgba(17,19,18,0.56)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <AppleLogo className="h-5 w-5" />
              Download Collecta
            </a>
          </header>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="space-y-12">
              <section className="rounded-[8px] bg-white p-6 shadow-[0_20px_60px_-50px_rgba(17,19,18,0.55)] ring-1 ring-[#e8ebe4] sm:p-8">
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{page.problemTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {page.problem.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{page.oldWorkflowTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {page.oldWorkflow.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{page.collectaTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {page.collecta.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{page.forTitle}</h2>
                <ul className="mt-5 grid gap-3 text-base leading-7 text-[#646865]">
                  {page.forItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#56ABA0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">FAQs</h2>
                <Accordion type="single" collapsible className="mt-5 overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_-48px_rgba(17,19,18,0.55)] ring-1 ring-[#e8ebe4]">
                  {page.faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question} className="border-[#e3e6df] px-5 sm:px-7">
                      <AccordionTrigger className="py-5 text-left text-lg font-extrabold leading-tight tracking-normal text-[#111312] hover:no-underline sm:text-xl">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="max-w-3xl pb-6 text-base leading-7 text-[#646865]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              <section className="rounded-[8px] bg-[#111312] p-6 text-white sm:p-8">
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{page.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{page.ctaCopy}</p>
                <a
                  href={ctaHref}
                  target={HAS_APP_STORE_URL ? "_blank" : undefined}
                  rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
                  onClick={() => {
                    if (HAS_APP_STORE_URL) trackAppStoreClick(ctaHref);
                  }}
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#56ABA0] px-6 py-3 text-base font-bold text-[#fbfcf7] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <AppleLogo className="h-5 w-5" />
                  Download on the App Store
                </a>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <nav aria-label="Related SEO pages" className="rounded-[8px] bg-white p-5 ring-1 ring-[#e8ebe4]">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#56ABA0]">
                  {page.linksTitle}
                </p>
                <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                  <li>
                    <Link to="/" className="text-[#111312] underline decoration-[#c8ddd8] underline-offset-4 hover:text-[#56ABA0]">
                      Back to Collecta home
                    </Link>
                  </li>
                  {page.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[#111312] underline decoration-[#c8ddd8] underline-offset-4 hover:text-[#56ABA0]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SeoPage;

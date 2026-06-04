/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";

import AppleLogo from "@/components/AppleLogo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_STORE_URL, HAS_APP_STORE_URL, SITE_URL } from "@/lib/appConfig";
import { trackAppStoreClick } from "@/lib/attribution";
import { useDocumentMetadata, useI18n, type Language } from "@/lib/i18n";

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

const spanishSeoPages: SeoPageContent[] = [
  {
    slug: "content-planning-app",
    title: "App de planificación de contenido para creadores | Collecta",
    description:
      "Collecta es una app de planificación de contenido para creadores que guardan posts, enlaces e ideas y quieren convertirlos en contenido publicable.",
    eyebrow: "App de planificación",
    h1: "Una app de planificación de contenido para creadores que guardan más ideas de las que publican",
    intro: [
      "Una buena app de planificación de contenido no debería pedirte que inventes todo desde cero cada lunes. La mayoría de creadores ya tienen material de sobra. Está en posts guardados, marcadores, notas, enlaces, ideas sueltas y pensamientos a medio escribir. El problema no suele ser encontrar inspiración. El problema es convertir esa inspiración en algo concreto que puedas crear.",
      "Collecta está pensada para ese momento. Ayuda a creadores independientes a reunir las ideas que ya les interesan, organizarlas alrededor de temas reales y convertir inspiración seleccionada en hooks, estructuras, guiones, checklists y próximos pasos. El objetivo es simple: que sea más fácil pasar de idea guardada a post publicado.",
    ],
    problemTitle: "El problema no es la falta de ideas",
    problem: [
      "Muchos creadores culpan su falta de constancia a no tener suficientes ideas. En realidad, muchos tienen demasiadas. Guardan un post porque el ángulo es bueno, un Reel porque el ritmo funciona o un hilo porque la historia puede servirles. Luego todo eso desaparece dentro de carpetas pensadas para almacenar, no para crear.",
      "Eso genera una acumulación silenciosa. Sabes que hay buen material en algún sitio, pero encontrarlo exige energía. Cuando llega el momento de crear, abres varias apps, revisas guardados antiguos, pierdes el pensamiento original y acabas otra vez frente a una página en blanco. El archivo crece, pero el hábito de publicar no.",
    ],
    oldWorkflowTitle: "Por qué falla el flujo antiguo",
    oldWorkflow: [
      "La mayoría de flujos de contenido están repartidos entre herramientas que no se conectan. Instagram guarda referencias visuales. Notas guarda pensamientos sueltos. Un calendario guarda fechas. Una app de escritura guarda borradores. Ninguno de esos lugares explica por qué guardaste algo o qué querías hacer con ello.",
      "Eso obliga a reconstruir cada post desde cero. Tienes que recordar el contexto, elegir un ángulo, decidir el formato, escribir la apertura, ordenar las ideas y definir los pasos de ejecución. Un calendario puede decirte cuándo publicar, pero no convierte una pila de inspiración en un plan claro. Una app de notas puede guardar la idea, pero rara vez te ayuda a sacarla.",
    ],
    collectaTitle: "Cómo ayuda Collecta",
    collecta: [
      "Collecta empieza con la inspiración que ya guardaste. Puedes reunir referencias, enlaces e ideas en un solo lugar, agruparlas por tema, nicho o bucket de contenido y elegir desde qué guardados quieres trabajar. Esa selección convierte el archivo en punto de partida.",
      "A partir de ahí, Collecta ayuda a crear un plan práctico: ángulos, hooks, estructuras, guiones, checklists y próximos pasos. En vez de pedirle ideas genéricas a una herramienta sin contexto, usas tu propio criterio y tus referencias como base.",
      "Esto importa porque la ejecución suele ser donde los creadores pierden impulso. Un buen plan reduce la cantidad de decisiones entre idea y publicación. Tú sigues aportando criterio, historia y voz. Collecta pone estructura para que la idea no se quede atrapada en la carpeta de guardados.",
    ],
    forTitle: "Para quién es",
    forItems: [
      "Creadores independientes que guardan posts útiles cada día pero casi nunca vuelven a ellos.",
      "Founders que construyen marca personal alrededor de aprendizajes, producto u observaciones del mercado.",
      "Creadores en solitario que quieren sistemas repetibles sin convertir su flujo en una operación pesada.",
      "Creadores que quieren publicar con más constancia sin empezar siempre desde un prompt vacío.",
    ],
    linksTitle: "Flujos relacionados",
    links: [
      { to: "/saved-posts-to-content-plans", label: "Convertir posts guardados en planes de contenido" },
      { to: "/content-workflow-for-creators", label: "Crear un flujo de contenido para creadores" },
      { to: "/content-ideas-app", label: "Evitar que tus ideas de contenido se pierdan" },
    ],
    faqs: [
      {
        question: "¿Qué diferencia a Collecta de un calendario de contenido?",
        answer:
          "Un calendario ayuda a programar. Collecta ayuda antes, cuando tus ideas aún están dispersas y necesitan convertirse en un post, guion o checklist.",
      },
      {
        question: "¿Collecta sirve solo para una plataforma?",
        answer:
          "No. Collecta está pensada para el flujo del creador, así que puedes planificar ideas para Instagram, TikTok, LinkedIn, X y otros formatos.",
      },
      {
        question: "¿Necesito una gran estrategia de contenido?",
        answer:
          "No. Collecta también sirve cuando tu estrategia aún está tomando forma, porque te ayuda a ver patrones en lo que guardas y convertirlos en publicaciones.",
      },
      {
        question: "¿Collecta está disponible ahora?",
        answer: "Sí. Collecta está disponible en la App Store.",
      },
    ],
    ctaTitle: "Empieza a planificar desde las ideas que ya guardaste",
    ctaCopy:
      "Descarga Collecta en la App Store y convierte inspiración guardada en planes de contenido que puedas ejecutar.",
  },
  {
    slug: "saved-posts-to-content-plans",
    title: "Convierte posts guardados en planes de contenido | Collecta",
    description:
      "Descubre cómo Collecta ayuda a creadores a convertir posts guardados en planes de contenido con ángulos, hooks, guiones y próximos pasos.",
    eyebrow: "Posts guardados",
    h1: "Convierte posts guardados en planes de contenido que sí puedes crear",
    intro: [
      "Guardar un post es fácil. Convertirlo en contenido propio es la parte que normalmente se queda pendiente. Ves un ángulo fuerte, un formato útil o una manera clara de explicar una idea y lo guardas con buena intención. Una semana después está enterrado bajo más guardados y ya no recuerdas por qué te importaba.",
      "Collecta ayuda a creadores a convertir posts guardados en planes de contenido. Es para cuando ya tienes inspiración, pero necesitas una forma práctica de decidir qué hacer con ella. El resultado no es otro elemento guardado. Es un ángulo, una estructura, una dirección de guion y una checklist que acerca la idea a la publicación.",
    ],
    problemTitle: "Guardar posts puede dar una falsa sensación de avance",
    problem: [
      "No hay nada malo en guardar inspiración. Muchas veces es así como los creadores desarrollan criterio. El problema es que guardar se siente como una acción aunque no produzca ningún resultado. La carpeta de guardados se convierte en un lugar donde se acumulan buenas intenciones.",
      "Cuanto más crece esa carpeta, más difícil es usarla. Tienes que revisar referencias antiguas, recordar por qué importaba cada una y separar inspiración de distracción. Para cuando encuentras algo útil, puede que la energía para crear ya se haya ido.",
    ],
    oldWorkflowTitle: "Por qué el flujo habitual no funciona",
    oldWorkflow: [
      "El enfoque típico es guardar posts en cada plataforma y abrirlos más tarde mientras intentas escribir. Suena simple, pero depende demasiado de la memoria. Tienes que recordar la idea original, la audiencia que tenías en mente y el formato que querías probar. Además, las plataformas están diseñadas para mantenerte consumiendo, no creando.",
      "Otra opción es pegar enlaces en una app de notas. Eso centraliza referencias, pero no resuelve el trabajo difícil. Una lista de links no es un plan. No te dice qué ángulo es más fuerte, cómo abrir el post, qué puntos cubrir ni qué pasos necesitas antes de publicar.",
    ],
    collectaTitle: "Cómo Collecta te ayuda a pasar de guardar a ejecutar",
    collecta: [
      "Collecta da a tus posts guardados un espacio de trabajo. Puedes reunir referencias e ideas, organizarlas por tema y elegir los guardados concretos desde los que quieres crear. Esa selección es importante: el buen contenido suele empezar eligiendo, no mirando un archivo infinito.",
      "Después, Collecta ayuda a convertir esa inspiración seleccionada en un plan de contenido. Puedes usarlo para definir el ángulo, generar opciones de hook, estructurar el post o guion y crear una checklist de ejecución. El plan parte de lo que guardaste, pero está pensado para que hagas algo con tu propia voz.",
      "La idea no es automatizar tu criterio. La idea es dejar de perderlo dentro de carpetas. Cuando tus referencias son fáciles de encontrar y de accionar, puedes pasar menos tiempo recuperando ideas antiguas y más tiempo publicando contenido nuevo.",
    ],
    forTitle: "Para quién es",
    forItems: [
      "Creadores con cientos de posts guardados y sin sistema claro para usarlos.",
      "Creadores de Instagram y TikTok que guardan formatos, hooks e ideas de edición.",
      "Founders que guardan buenos ejemplos pero necesitan convertirlos en posts originales.",
      "Cualquiera que quiera que su inspiración guardada sea un pipeline de contenido y no solo almacenamiento.",
    ],
    linksTitle: "Sigue construyendo el flujo",
    links: [
      { to: "/content-planning-app", label: "Usar una app de planificación pensada para guardados" },
      { to: "/instagram-saved-posts-content", label: "Usar guardados de Instagram como ideas de contenido" },
      { to: "/content-ideas-app", label: "Organizar ideas antes de que desaparezcan" },
    ],
    faqs: [
      {
        question: "¿Un post guardado puede convertirse en contenido original?",
        answer:
          "Sí, si lo usas como referencia y no como plantilla para copiar. Collecta te ayuda a transformar la razón por la que guardaste algo en un ángulo y estructura propios.",
      },
      {
        question: "¿Collecta publica por mí?",
        answer:
          "No. Collecta te ayuda a planificar y preparar el contenido. Tú sigues controlando el borrador final, la grabación y la publicación.",
      },
      {
        question: "¿Qué debería guardar en Collecta?",
        answer:
          "Posts, enlaces, formatos, ideas sueltas y referencias que quieras convertir en contenido futuro.",
      },
      {
        question: "¿Collecta está disponible para iPhone?",
        answer: "Sí. Collecta está disponible en la App Store.",
      },
    ],
    ctaTitle: "Haz que tus posts guardados vuelvan a ser útiles",
    ctaCopy:
      "Descarga Collecta y empieza a convertir posts guardados en planes de contenido con próximos pasos claros.",
  },
  {
    slug: "content-ideas-app",
    title: "App de ideas de contenido para inspiración y pensamientos | Collecta",
    description:
      "Collecta es una app de ideas de contenido que ayuda a creadores a guardar inspiración, enlaces y pensamientos sin que se pierdan.",
    eyebrow: "Ideas de contenido",
    h1: "Una app de ideas de contenido para creadores que pierden sus mejores pensamientos",
    intro: [
      "Las mejores ideas de contenido casi nunca aparecen cuando te sientas a escribir. Aparecen mientras haces scroll, caminas, lees, respondes a un cliente, ves a otro creador o piensas en un problema de tu propio trabajo. Guardas algo, escribes una nota rápida o te dices que volverás luego.",
      "Luego llega ese luego, y la idea ya no está. Collecta es una app de ideas de contenido para creadores independientes que necesitan un lugar simple donde guardar inspiración, enlaces y pensamientos conectados al contenido que quieren crear. Está pensada para capturar, organizar y ejecutar, no solo para almacenar.",
    ],
    problemTitle: "Las ideas se pierden porque viven en demasiados sitios",
    problem: [
      "El sistema de ideas de un creador suele crecer por accidente. Algunas ideas están en Notas. Otras en guardados de Instagram. Otras en favoritos de TikTok, marcadores del navegador, mensajes a ti mismo o conversaciones. Cada lugar tenía sentido en el momento, pero el sistema completo deja de ser fiable.",
      "Cuando no confías en el sistema, dejas de usarlo. Puede que sigas guardando cosas, pero ya no esperas que se conviertan en contenido. Ahí es cuando capturar ideas se convierte en acumular ideas. La colección crece, pero tu consistencia no.",
    ],
    oldWorkflowTitle: "Por qué una app de notas no siempre basta",
    oldWorkflow: [
      "Una app de notas sirve para apuntar pensamientos, pero suele ser demasiado abierta para ejecutar contenido. Una frase suelta, un enlace pegado y un hook a medias conviven con listas, reuniones y recordatorios. No hay un camino natural desde la nota hasta el post terminado.",
      "Las hojas de cálculo y calendarios pueden ayudar a planificar, pero normalmente asumen que la idea ya está clara. Son menos útiles cuando la idea todavía es una referencia guardada, una reacción, una observación o un formato que quieres adaptar más adelante. Los creadores necesitan una capa intermedia entre capturar inspiración y programar contenido.",
    ],
    collectaTitle: "Cómo Collecta hace que las ideas sean utilizables",
    collecta: [
      "Collecta da a tus ideas y referencias un lugar conectado con la creación. Puedes mantenerlas juntas, categorizarlas por tema y volver a ellas cuando estés listo para crear. En vez de revisar notas mezcladas con todo lo demás, trabajas en un espacio pensado para contenido futuro.",
      "Cuando una idea está lista para avanzar, Collecta ayuda a convertirla en un plan. Puedes crear hooks, esquemas, guiones, estructuras de post y checklists de ejecución desde las referencias y el contexto que aportas. La idea no tiene que estar perfecta antes de empezar; solo necesita suficiente señal para construir.",
      "Esto hace que el flujo del creador sea más ligero. Puedes capturar ideas sin presión y volver después para convertir las más fuertes en algo concreto. El hábito deja de ser guardar todo y pasa a ser crear desde lo que ya llamó tu atención.",
    ],
    forTitle: "Para quién es",
    forItems: [
      "Creadores con ideas repartidas entre notas, guardados, marcadores y mensajes.",
      "Founders que piensan en público pero pierden buenas observaciones antes de publicarlas.",
      "Creadores en solitario que quieren un banco de ideas conectado a ejecución.",
      "Cualquiera que quiera dejar de empezar desde cero cada vez que se sienta a crear.",
    ],
    linksTitle: "Páginas relacionadas",
    links: [
      { to: "/content-planning-app", label: "Planificar contenido desde ideas guardadas" },
      { to: "/saved-posts-to-content-plans", label: "Convertir posts guardados en planes" },
      { to: "/content-workflow-for-creators", label: "Construir un mejor flujo de creador" },
    ],
    faqs: [
      {
        question: "¿Collecta es solo un banco de ideas?",
        answer:
          "No. Collecta te ayuda a guardar y organizar ideas, pero también está pensada para convertir inspiración seleccionada en planes de contenido ejecutables.",
      },
      {
        question: "¿Puedo usar Collecta para pensamientos sueltos?",
        answer:
          "Sí. Collecta sirve para posts y enlaces guardados, pero también para pensamientos que necesitan estructura antes de convertirse en contenido.",
      },
      {
        question: "¿Y si mis ideas están desordenadas?",
        answer:
          "Es normal. Collecta está diseñada para ese punto intermedio entre detectar una idea y saber exactamente cómo publicarla.",
      },
      {
        question: "¿Dónde puedo descargar Collecta?",
        answer: "Collecta está disponible ahora en la App Store.",
      },
    ],
    ctaTitle: "Mantén tus ideas cerca del trabajo",
    ctaCopy:
      "Descarga Collecta y da a tu inspiración guardada y pensamientos sueltos un lugar donde convertirse en contenido real.",
  },
  {
    slug: "instagram-saved-posts-content",
    title: "Usa guardados de Instagram como ideas de contenido | Collecta",
    description:
      "Deja de acumular guardados de Instagram para siempre. Collecta ayuda a creadores a convertir inspiración guardada en planes de contenido originales.",
    eyebrow: "Guardados de Instagram",
    h1: "Deja de dejar tus guardados de Instagram ahí para siempre",
    intro: [
      "Los guardados de Instagram pueden ser una mina para creadores. Guardas hooks, formatos, carruseles, captions, ideas visuales, ángulos y ejemplos de cómo otras personas explican cosas. El problema es que los guardados de Instagram son fáciles de acumular y difíciles de usar.",
      "Collecta ayuda a convertir guardados de Instagram y otra inspiración en ideas de contenido que sí puedes crear. Da a esos guardados una salida: organizar la referencia, elegir desde qué quieres construir y convertirlo en un plan con hooks, estructura y próximos pasos.",
    ],
    problemTitle: "Los guardados de Instagram sirven para archivar, no para ejecutar",
    problem: [
      "Cuando guardas un post en Instagram, normalmente sabes por qué importa en ese momento. Quizá la primera frase es potente, el formato te interesa o el tema encaja con tu nicho. Pero el post guardado no captura tu razón.",
      "Semanas después, recuerdas que guardaste algo útil, pero no dónde está ni qué querías hacer con ello. La carpeta se convierte en otro feed. Haces scroll por tu propio archivo, vuelves a consumir contenido y sales sin crear nada.",
    ],
    oldWorkflowTitle: "Por qué se rompe el flujo habitual de guardados",
    oldWorkflow: [
      "El flujo por defecto es pasivo: guardar primero y pensar después. Funciona si tienes pocas referencias, pero se rompe cuando guardar se vuelve un hábito diario. Un creador puede acumular cientos de posts entre formatos y temas sin una forma clara de elegir la siguiente idea.",
      "Las colecciones ayudan, pero siguen viviendo dentro de Instagram. No se conectan de forma natural con tus notas, guiones, calendario o checklist de publicación. Tampoco te ayudan a traducir una referencia a tu propio punto de vista. Un carrusel guardado no es tu carrusel. Un Reel guardado no es tu guion.",
    ],
    collectaTitle: "Cómo ayuda Collecta con inspiración guardada de Instagram",
    collecta: [
      "Collecta está diseñada para usar inspiración guardada sin quedarte atrapado en modo consumo. Puedes llevar referencias e ideas a un espacio de trabajo, organizarlas por tema y usarlas como puntos de partida para nuevo contenido.",
      "Cuando estás listo para crear, seleccionas la inspiración desde la que quieres trabajar. Collecta puede ayudar a convertir ese contexto en un plan: ángulos posibles, opciones de hook, estructura del post, dirección de guion y una checklist simple. Te ayuda a pasar de 'me gustó esto' a 'esto es lo que voy a crear a partir de ello'.",
      "El resultado debe seguir sonando a ti. Collecta no está para copiar el post de otro creador. Está para ayudarte a entender por qué funcionó una referencia, conectarla con tu propia idea y hacer más fácil el siguiente paso.",
    ],
    forTitle: "Para quién es",
    forItems: [
      "Creadores de Instagram con carpetas llenas de formatos y hooks.",
      "Founders que guardan ejemplos de storytelling, educación de producto o marca personal.",
      "Creadores que usan Instagram para investigar pero necesitan salir de la app para crear.",
      "Cualquiera que quiera que sus guardados se conviertan en ideas originales y no en marcadores permanentes.",
    ],
    linksTitle: "Convierte más inspiración en output",
    links: [
      { to: "/saved-posts-to-content-plans", label: "Convertir posts guardados en planes" },
      { to: "/content-ideas-app", label: "Usar una app de ideas para pensamientos sueltos" },
      { to: "/content-planning-app", label: "Planificar contenido desde inspiración guardada" },
    ],
    faqs: [
      {
        question: "¿Collecta me ayuda a copiar posts de Instagram?",
        answer:
          "No. Collecta sirve para transformar inspiración en planes de contenido originales, no para copiar el trabajo de otro creador.",
      },
      {
        question: "¿Por qué no usar solo Colecciones de Instagram?",
        answer:
          "Las colecciones sirven para guardar posts, pero no te dan un flujo completo para convertir referencias en hooks, guiones y checklists.",
      },
      {
        question: "¿Puedo usar Collecta con más plataformas?",
        answer:
          "Sí. Collecta sirve para inspiración de Instagram, TikTok, LinkedIn, X, enlaces y notas sueltas.",
      },
      {
        question: "¿Collecta está disponible en la App Store?",
        answer: "Sí. Collecta está disponible en la App Store.",
      },
    ],
    ctaTitle: "Dale un siguiente paso a tus guardados de Instagram",
    ctaCopy:
      "Descarga Collecta y empieza a convertir inspiración guardada de Instagram en contenido que puedas crear.",
  },
  {
    slug: "content-workflow-for-creators",
    title: "Flujo de contenido para creadores con ideas dispersas | Collecta",
    description:
      "Construye un mejor flujo de contenido para creadores cuyas ideas, posts guardados e inspiración están repartidos en demasiados sitios.",
    eyebrow: "Flujo de creador",
    h1: "Un mejor flujo de contenido para creadores cuyas ideas están por todas partes",
    intro: [
      "Un buen flujo de contenido debería hacer que crear fuera más directo. Para muchos creadores independientes ocurre lo contrario. Las ideas viven en demasiados sitios, las referencias son difíciles de encontrar y cada post empieza buscando entre guardados, notas y enlaces antiguos.",
      "Collecta ayuda a construir un camino más limpio desde inspiración hasta ejecución. Reúne posts guardados, enlaces y pensamientos en un solo lugar, y ayuda a convertir el mejor material en planes de contenido con hooks, guiones, estructuras y checklists. El flujo es simple: guarda lo importante, organízalo, elige desde qué crear y ejecuta.",
    ],
    problemTitle: "El flujo del creador suele romperse antes de escribir",
    problem: [
      "La mayoría de creadores no tienen problemas porque no tengan nada que decir. Tienen problemas porque sus inputs están dispersos. Una buena idea puede estar en una nota. Una referencia puede estar guardada en Instagram. Un post útil puede estar marcado en X. Una idea de guion puede estar enterrada en una nota de voz.",
      "Cuando los inputs están dispersos, crear se vuelve pesado. Pasas la primera parte de cada sesión encontrando la idea en vez de desarrollarla. Repites las mismas decisiones: qué publico, qué ángulo uso, cómo empieza, qué formato encaja y qué tiene que pasar antes de publicar.",
    ],
    oldWorkflowTitle: "Por qué más herramientas no siempre arreglan el problema",
    oldWorkflow: [
      "Es tentador resolverlo añadiendo herramientas. Un calendario para programar. Una hoja para temas. Una app de notas para ideas. Una app de escritura para borradores. Una carpeta para referencias. Cada herramienta puede servir, pero juntas pueden crear más superficie de la que un creador en solitario puede mantener.",
      "La pieza que falta suele ser el traspaso entre inspiración y ejecución. Capturar inspiración es un flujo. Publicar contenido es otro. Muchos creadores no tienen un puente claro entre ambos. Por eso un post guardado puede parecer valioso cuando lo encuentras y casi inútil cuando necesitas crear.",
    ],
    collectaTitle: "Cómo Collecta crea un flujo de ejecución más claro",
    collecta: [
      "Collecta se centra en ese puente. Te ayuda a reunir posts, enlaces e ideas que podrían convertirse en contenido, y a organizarlos alrededor de los temas sobre los que realmente hablas. Cuando llega el momento de crear, puedes seleccionar las referencias que encajan con el post que quieres hacer.",
      "Desde ahí, Collecta ayuda a crear un plan práctico. Puede dar forma al ángulo, sugerir hooks, ordenar la estructura, orientar un guion y crear una checklist. Así cada idea tiene un siguiente paso en vez de quedarse en una carpeta.",
      "El flujo está pensado para creadores. No exige un gran equipo, una operación compleja ni un documento perfecto de estrategia. Es para el proceso diario de detectar ideas, mantenerlas cerca y convertirlas en publicaciones con más constancia.",
    ],
    forTitle: "Para quién es",
    forItems: [
      "Creadores independientes que quieren una forma repetible de pasar de idea a post.",
      "Founders y operadores en solitario que crean sobre su trabajo sin tener equipo de contenido.",
      "Creadores que guardan más inspiración de la que publican.",
      "Cualquiera que quiera menos sesiones frente a la página en blanco y más pasos claros de ejecución.",
    ],
    linksTitle: "Flujos relacionados",
    links: [
      { to: "/content-planning-app", label: "Elegir una app de planificación para creadores" },
      { to: "/content-ideas-app", label: "Mantener ideas de contenido organizadas" },
      { to: "/saved-posts-to-content-plans", label: "Convertir guardados en planes" },
    ],
    faqs: [
      {
        question: "¿Qué es un flujo de contenido para creadores?",
        answer:
          "Es el camino repetible desde detectar una idea hasta publicar contenido. Para creadores en solitario suele incluir capturar inspiración, organizarla, planificar el post y ejecutarlo.",
      },
      {
        question: "¿Collecta reemplaza mi calendario de contenido?",
        answer:
          "No necesariamente. Collecta ayuda en la etapa anterior: convertir ideas dispersas y guardados en planes claros que luego puedes programar o publicar.",
      },
      {
        question: "¿Funciona para creadores en solitario?",
        answer:
          "Sí. Collecta está pensada para creadores independientes, founders y creadores en solitario que necesitan un flujo ligero.",
      },
      {
        question: "¿Puedo probar Collecta ahora?",
        answer: "Sí. Collecta está disponible en la App Store.",
      },
    ],
    ctaTitle: "Construye un flujo que termine en contenido publicado",
    ctaCopy:
      "Descarga Collecta y convierte ideas dispersas en planes de contenido con pasos claros de ejecución.",
  },
];

export const getLocalizedSeoPages = (language: Language) => (language === "es" ? spanishSeoPages : seoPages);

export const getSeoPage = (slug: string, language: Language = "en") => getLocalizedSeoPages(language).find((page) => page.slug === slug);

const getCanonicalUrl = (slug: string) => `${SITE_URL.replace(/\/$/, "")}/${slug}`;

const SeoPage = ({ page }: { page: SeoPageContent }) => {
  const { language } = useI18n();
  const localizedPage = getSeoPage(page.slug, language) ?? page;
  const labels = {
    backHome: language === "es" ? "Volver al inicio de Collecta" : "Back to Collecta home",
    downloadCollecta: language === "es" ? "Descargar Collecta" : "Download Collecta",
    downloadAppStore: language === "es" ? "Descargar en App Store" : "Download on the App Store",
    faqs: language === "es" ? "Preguntas frecuentes" : "FAQs",
  };

  useDocumentMetadata({
    title: localizedPage.title,
    description: localizedPage.description,
    imageAlt: `${localizedPage.h1} - Collecta`,
    canonical: getCanonicalUrl(localizedPage.slug),
  });

  const ctaHref = HAS_APP_STORE_URL ? APP_STORE_URL : "/#download";

  return (
    <div className="min-h-screen bg-[#fbfcf7] text-[#111312]">
      <Navbar />
      <main>
        <article className="px-5 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#56ABA0]">
              {localizedPage.eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
              {localizedPage.h1}
            </h1>
            <div className="mx-auto mt-7 max-w-3xl space-y-5 text-lg leading-8 text-[#646865]">
              {localizedPage.intro.map((paragraph) => (
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
              {labels.downloadCollecta}
            </a>
          </header>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="space-y-12">
              <section className="rounded-[8px] bg-white p-6 shadow-[0_20px_60px_-50px_rgba(17,19,18,0.55)] ring-1 ring-[#e8ebe4] sm:p-8">
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{localizedPage.problemTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {localizedPage.problem.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{localizedPage.oldWorkflowTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {localizedPage.oldWorkflow.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{localizedPage.collectaTitle}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[#646865]">
                  {localizedPage.collecta.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{localizedPage.forTitle}</h2>
                <ul className="mt-5 grid gap-3 text-base leading-7 text-[#646865]">
                  {localizedPage.forItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#56ABA0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{labels.faqs}</h2>
                <Accordion type="single" collapsible className="mt-5 overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_-48px_rgba(17,19,18,0.55)] ring-1 ring-[#e8ebe4]">
                  {localizedPage.faqs.map((faq) => (
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

              <section className="rounded-[28px] bg-[#56ABA0] p-6 text-[#fbfcf7] shadow-[0_24px_70px_-52px_rgba(17,19,18,0.62)] sm:p-8">
                <h2 className="text-2xl font-extrabold tracking-normal sm:text-3xl">{localizedPage.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#fbfcf7]/85">{localizedPage.ctaCopy}</p>
                <a
                  href={ctaHref}
                  target={HAS_APP_STORE_URL ? "_blank" : undefined}
                  rel={HAS_APP_STORE_URL ? "noreferrer" : undefined}
                  onClick={() => {
                    if (HAS_APP_STORE_URL) trackAppStoreClick(ctaHref);
                  }}
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111312] px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-20px_rgba(17,19,18,0.56)]"
                >
                  <AppleLogo className="h-5 w-5" />
                  {labels.downloadAppStore}
                </a>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <nav aria-label="Related SEO pages" className="rounded-[8px] bg-white p-5 ring-1 ring-[#e8ebe4]">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#56ABA0]">
                  {localizedPage.linksTitle}
                </p>
                <ul className="mt-4 space-y-3 text-sm font-bold leading-6">
                  <li>
                    <Link to="/" className="text-[#111312] underline decoration-[#c8ddd8] underline-offset-4 hover:text-[#56ABA0]">
                      {labels.backHome}
                    </Link>
                  </li>
                  {localizedPage.links.map((link) => (
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

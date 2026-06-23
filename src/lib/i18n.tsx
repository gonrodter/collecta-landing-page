/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "es";

const spanishCopy: Record<string, string> = {
  "Collecta - Turn saved inspiration into content plans": "Collecta - Convierte inspiración guardada en planes de contenido",
  "Collecta helps content creators turn saved posts, links and rough ideas into hooks, scripts, checklists and content plans so they can publish faster.": "Collecta ayuda a creadores de contenido a convertir publicaciones guardadas, enlaces e ideas sueltas en ganchos, guiones, checklists y planes de contenido para publicar más rápido.",
  "Collecta mobile app showing a content plan generated from saved inspiration.": "App móvil Collecta mostrando un plan de contenido generado a partir de inspiración guardada.",
  "Features": "Funciones",
  "Why Collecta": "Por qué Collecta",
  "FAQ": "Preguntas",
  "Get app": "Descargar",
  "Download on the App Store": "Descargar en App Store",
  "Download Collecta on the App Store": "Descargar Collecta en App Store",
  "Download the app": "Descargar la app",
  "Collecta on Instagram": "Collecta en Instagram",
  "Collecta on TikTok": "Collecta en TikTok",
  "Privacy Policy": "Política de privacidad",
  "Terms of Use": "Términos de uso",
  "© 2026 Collecta. All rights reserved.": "© 2026 Collecta. Todos los derechos reservados.",
  "View Collecta on Product Hunt": "Ver Collecta en Product Hunt",
  "Collecta - Turn saved content into posts you actually publish | Product Hunt": "Collecta - Convierte tus guardados en contenido listo para publicar | Product Hunt",

  "Built for creators who save more ideas than they publish": "Creado para creadores que guardan más ideas de las que publican",
  "Turn saved inspiration into content you can actually publish": "Convierte inspiración guardada en contenido que realmente puedes publicar",
  "Collecta helps creators turn saved posts, links and rough ideas into clear content plans, hooks, scripts and publishing checklists, so you stop starting from a blank page.": "Collecta ayuda a creadores a convertir publicaciones guardadas, enlaces e ideas sueltas en planes de contenido claros, ganchos, guiones y checklists de publicación para dejar de empezar desde una página en blanco.",
  "See how it works": "Ver cómo funciona",
  "Collecta app mockup showing a content plan generated from saved inspiration.": "Mockup de la app Collecta mostrando un plan de contenido generado desde inspiración guardada.",

  "How it works": "Cómo funciona",
  "How Collecta works": "Cómo funciona Collecta",
  "Save your inspiration": "Guarda tu inspiración",
  "Bring together the posts, links and ideas you want to use for future content.": "Reúne las publicaciones, enlaces e ideas que quieres usar para contenido futuro.",
  "Choose what you want to create": "Elige qué quieres crear",
  "Pick the platform, format and saved references you are working from.": "Elige la plataforma, el formato y las referencias guardadas desde las que vas a trabajar.",
  "Get a content plan": "Obtén un plan de contenido",
  "Generate hooks, structure, script ideas, checklists and clear next steps.": "Genera ganchos, estructura, ideas de guion, checklists y próximos pasos claros.",
  "Publish without starting from scratch": "Publica sin empezar desde cero",
  "Use the plan to record, write and publish faster.": "Usa el plan para grabar, escribir y publicar más rápido.",
  "Who it is for": "Para quién es",
  "For creators who save more ideas than they publish": "Para creadores que guardan más ideas de las que publican",
  "Collecta is built for independent creators, founders and solo creators who need a practical way to move from idea collection to execution.": "Collecta está creada para creadores de contenido, founders y creadores en agencias de marketing que necesitan una forma práctica de pasar de recopilar ideas a ejecutarlas.",
  "Content creators": "Creadores de contenido",
  "Save useful content every day but need a system for turning references into posts.": "Guardan contenido útil cada día pero necesitan un sistema para convertir referencias en publicaciones.",
  "Founders": "Fundadores",
  "Have ideas scattered across platforms and need repeatable content workflows.": "Tienen ideas dispersas entre plataformas y necesitan flujos de contenido repetibles.",
  "Marketing agency creators": "Creadores en agencias de marketing",
  "Manage references for multiple clients and need to turn saved ideas into usable content faster.": "Gestionan referencias para varios clientes y necesitan convertir ideas guardadas en contenido utilizable más rápido.",
  "Want hooks, scripts, checklists and clear next steps without starting from a blank prompt.": "Quieren ganchos, guiones, checklists y próximos pasos sin empezar desde un prompt vacío.",
  "Most AI writing tools start with a blank prompt. Collecta starts with the ideas you already saved, so the output is grounded in your taste, references and content direction.": "La mayoría de herramientas de escritura con IA empiezan con un prompt vacío. Collecta empieza con las ideas que ya guardaste, por eso el resultado se basa en tu criterio, tus referencias y tu dirección de contenido.",
  "Collecta FAQ": "Preguntas frecuentes",
  "Straight answers for creators deciding if Collecta fits their content workflow.": "Respuestas directas para creadores que deciden si Collecta encaja en su flujo de contenido.",
  "What is Collecta?": "¿Qué es Collecta?",
  "Collecta is a mobile app that helps creators turn saved inspiration, links and rough ideas into executable content plans.": "Collecta es una app móvil que ayuda a creadores a convertir inspiración guardada, enlaces e ideas sueltas en planes de contenido ejecutables.",
  "Who is Collecta for?": "¿Para quién es Collecta?",
  "Collecta is for content creators, founders and marketing agency creators who save more ideas than they publish and need a practical way to move from collection to execution.": "Collecta es para creadores de contenido, founders y creadores en agencias de marketing que guardan más ideas de las que publican y necesitan una forma práctica de pasar de recopilar ideas a ejecutarlas.",
  "How does Collecta help me create content?": "¿Cómo me ayuda Collecta a crear contenido?",
  "Collecta can generate hooks, post structures, scripts, checklists and clear next steps based on the inspiration and context you provide.": "Collecta puede generar ganchos, estructuras de posts, guiones, checklists y próximos pasos claros basados en la inspiración y el contexto que aportas.",
  "Is Collecta just another AI writing tool?": "¿Collecta es solo otra herramienta de escritura con IA?",
  "No. Collecta is focused on turning saved inspiration into executable content plans, instead of asking you to start from a blank prompt.": "No. Collecta se centra en convertir inspiración guardada en planes de contenido ejecutables, en vez de pedirte que empieces desde un prompt vacío.",
  "Can I use Collecta for Instagram, TikTok, LinkedIn and X?": "¿Puedo usar Collecta para Instagram, TikTok, LinkedIn y X?",
  "Yes, Collecta is designed to help creators plan content for platforms like Instagram, TikTok, LinkedIn and X.": "Sí, Collecta está diseñada para ayudar a creadores a planificar contenido para plataformas como Instagram, TikTok, LinkedIn y X.",
  "Is Collecta available on the App Store?": "¿Collecta está disponible en App Store?",
  "Yes, Collecta is available on the App Store.": "Sí, Collecta está disponible en App Store.",

  "nice.": "bien.",
  "idea hoarding is a form of procrastination.": "acumular ideas es una forma de procrastinar.",
  "collecting feels like progress, but nothing changes until one idea gets pushed through reality.": "guardar cosas parece progreso, pero nada cambia hasta que una idea se lleva a la realidad.",
  "I NEED A PLAYSTORE VERSION": "NECESITO UNA VERSIÓN PARA PLAY STORE",
  "wait i need this. my notes app isnt cutting it anymore": "espera, necesito esto. mi app de notas ya no me alcanza",
  "this is exactly the bridge most people miss. execution is the only thing that separates a hobby from a business.": "este es exactamente el puente que la mayoría pasa por alto. la ejecución es lo único que separa un hobby de un negocio.",
  "3:35 PM · Apr 30, 2026": "30 abr 2026 · 15:35",
  "9:24 PM · Apr 17, 2026": "17 abr 2026 · 21:24",
  "7:35 PM · Apr 16, 2026": "16 abr 2026 · 19:35",
  "May 12, 2026": "12 may 2026",
  "Open tweet by": "Abrir tweet de",
  "Like on X": "Dar me gusta en X",
  "Reply on X": "Responder en X",
  "Retweet on X": "Repostear en X",
  "Reply": "Responder",
  "Copy link": "Copiar enlace",
  "Open Product Hunt comment": "Abrir comentario en Product Hunt",
  "I’m sure I have 100s of screenshots from my socials that I grabbed with the best intentions of returning to later, but forgot about the next day. Very nice to be able to keep all those fleeting thoughts in one place.": "Seguro que tengo cientos de capturas de mis redes que guardé con la mejor intención de volver a ellas más tarde, pero al día siguiente ya las había olvidado. Es muy útil poder mantener todos esos pensamientos pasajeros en un solo lugar.",
  "Upvoted (1)": "Votado (1)",
  "Award": "Premio",
  "Report": "Reportar",
  "Share": "Compartir",
  "9d ago": "Hace 9 d",
  "Comment": "Comentario",
  "by": "por",
  "from discussion": "de la conversación",
  "I think saving posts gives us the illusion of progress": "Creo que guardar publicaciones nos da la ilusión de progreso",
  "in": "en",

  "Creators are already talking about the problem": "Los creadores ya hablan de este problema",
  "What does Collecta include": "Qué incluye Collecta",
  "A centralized database of saves": "Una base de datos centralizada de guardados",
  "Bring saved posts, links and rough ideas into one place built for creating, not just storing.": "Reúne publicaciones guardadas, enlaces e ideas sueltas en un lugar pensado para crear, no solo para almacenar.",
  "Collecta centralized database of saved inspiration": "Base de datos centralizada de inspiración guardada en Collecta",
  "Your ideas categorized by topic": "Tus ideas categorizadas por tema",
  "Group inspiration by themes, niches and content buckets so the right reference is easy to find.": "Agrupa la inspiración por temas, nichos y categorías de contenido para encontrar la referencia correcta fácilmente.",
  "Collecta ideas categorized by topic": "Ideas categorizadas por tema en Collecta",
  "A tool to turn your ideas into content": "Una herramienta para convertir tus ideas en contenido",
  "Generate a step-by-step plan, angle, hooks and script from the inspiration you already collected.": "Genera un plan paso a paso, enfoque, ganchos y guión a partir de la inspiración que ya recopilaste.",
  "Collecta tool for turning ideas into content": "Herramienta de Collecta para convertir ideas en contenido",
  "Beat blank page syndrome": "Supera el bloqueo de la página en blanco",
  "Start from inspiration you already saved instead of staring at an empty document.": "Empieza desde la inspiración que ya guardaste en vez de mirar un documento vacío.",
  "Turn saves into output": "Convierte guardados en resultados",
  "Transform references, links and ideas into hooks, scripts, structures and checklists.": "Transforma referencias, enlaces e ideas en ganchos, guiones, estructuras y checklists de tareas.",
  "Build a repeatable creation workflow": "Construye un flujo de creación repetible",
  "Move from saved inspiration to ready drafts with a clear next step every time.": "Pasa de inspiración guardada a borradores listos con un siguiente paso claro cada vez.",
  "Saved inspiration": "Inspiración guardada",
  "Ready ideas": "Ideas listas",
  "Drafts generated": "Borradores generados",
  "Ready to publish": "Listo para publicar",
  "Saves": "Guardados",
  "Centralize saved posts, links and rough ideas in one place": "Centraliza publicaciones guardadas, enlaces e ideas sueltas en un solo lugar",
  "Collecta saved inspiration screen": "Pantalla de inspiración guardada de Collecta",
  "Select saves": "Selecciona guardados",
  "Choose the references you want to create from": "Elige las referencias desde las que quieres crear",
  "Collecta select saves screen": "Pantalla de selección de guardados de Collecta",
  "Full execution plan": "Plan de ejecución completo",
  "Generate angle, hooks, script and checklist": "Genera enfoque, ganchos, guión y checklist de tareas",
  "Collecta post generation screen": "Pantalla de generación de publicaciones de Collecta",
  "Content ready": "Contenido listo",
  "Use the plan to record, write and publish": "Usa el plan para grabar, escribir y publicar",
  "Collecta execution checklist screen": "Pantalla de lista de ejecución de Collecta",
  "Why choose Collecta?": "¿Por qué elegir Collecta?",
  "Collecta turns scattered inspiration into publish-ready content.": "Collecta convierte inspiración dispersa en contenido listo para publicar.",
  "Turn saved inspiration into a content pipeline": "Convierte tu inspiración guardada en un flujo de contenido",
  "Collecta helps your inspiration move forward, from saved references to generated ideas, drafts and posts ready to publish.": "Collecta ayuda a que tu inspiración avance desde referencias guardadas a ideas generadas, borradores y publicaciones listas para publicar.",
  "Collecta helps your inspiration move forward, from saved references to hooks, scripts, checklists and posts ready to publish.": "Collecta ayuda a que tu inspiración avance desde referencias guardadas a ganchos, guiones, checklists y publicaciones listas para publicar.",

  "Start": "Empieza",
  "Turning saves into content": "A convertir guardados en contenido",
  "Collect what inspires you, organize it, and turn it into content even before you feel ready.": "Guarda lo que te inspira, organízalo y conviértelo en contenido listo para publicar.",

  "Oops! Page not found": "Vaya, página no encontrada",
  "Return to Home": "Volver al inicio",
  "Page not found | Collecta": "Página no encontrada | Collecta",
  "Reset password | Collecta": "Restablecer contraseña | Collecta",
  "Choose a new password for your Collecta account.": "Elige una nueva contraseña para tu cuenta de Collecta.",
  "Reset password": "Restablecer contraseña",
  "Checking your recovery link...": "Comprobando tu enlace de recuperación...",
  "Recovery link unavailable": "Enlace de recuperación no disponible",
  "This password recovery link is invalid or has expired. Please request a new reset link.": "Este enlace para restablecer la contraseña no es válido o ha caducado. Solicita un nuevo enlace.",
  "This password recovery link is missing required session information. Please request a new reset link.": "A este enlace para restablecer la contraseña le falta información de sesión. Solicita un nuevo enlace.",
  "Back to login": "Volver al inicio de sesión",
  "New password": "Nueva contraseña",
  "Confirm password": "Confirmar contraseña",
  "Password must be at least 6 characters.": "La contraseña debe tener al menos 6 caracteres.",
  "Passwords do not match.": "Las contraseñas no coinciden.",
  "We could not update your password. Please try again.": "No pudimos actualizar tu contraseña. Inténtalo de nuevo.",
  "Password updated": "Contraseña actualizada",
  "Redirecting you back to Collecta...": "Redirigiéndote de vuelta a Collecta...",
  "Updating...": "Actualizando...",
  "Update password": "Actualizar contraseña",

  "Last updated: March 13, 2026": "Última actualización: 13 de marzo de 2026",
  "Privacy Policy | Collecta": "Política de privacidad | Collecta",
  "Collecta, operated by Terron Studio (\"we\", \"our\", or \"us\"), respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Collecta mobile application and related services.": "Collecta, operada por Terron Studio (\"nosotros\", \"nuestro\" o \"nos\"), respeta tu privacidad y se compromete a proteger la información personal que compartes con nosotros. Esta Política de privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas la aplicación móvil Collecta y sus servicios relacionados.",
  "By using Collecta, you agree to the collection and use of information in accordance with this policy.": "Al usar Collecta, aceptas la recopilación y el uso de información de acuerdo con esta política.",
  "1. Information We Collect": "1. Información que recopilamos",
  "We may collect the following types of information when you use Collecta:": "Podemos recopilar los siguientes tipos de información cuando usas Collecta:",
  "Account Information": "Información de la cuenta",
  "When you create an account, we may collect:": "Cuando creas una cuenta, podemos recopilar:",
  "Name": "Nombre",
  "Email address": "Dirección de email",
  "Authentication provider (Google, Apple, etc.)": "Proveedor de autenticación (Google, Apple, etc.)",
  "Account creation date": "Fecha de creación de la cuenta",
  "Content You Save": "Contenido que guardas",
  "Collecta allows you to save content from external platforms. We may store:": "Collecta te permite guardar contenido de plataformas externas. Podemos almacenar:",
  "URLs of saved content": "URLs del contenido guardado",
  "Images or thumbnails associated with the content": "Imágenes o miniaturas asociadas al contenido",
  "Metadata such as title, description, author, or platform": "Metadatos como título, descripción, autor o plataforma",
  "Tags or notes you add": "Etiquetas o notas que añadas",
  "Generated Content": "Contenido generado",
  "When you use Collecta’s AI features (such as generating content or post ideas), we may process:": "Cuando usas las funciones de IA de Collecta (como generar contenido o ideas para publicaciones), podemos procesar:",
  "Your saved posts": "Tus publicaciones guardadas",
  "Prompts or instructions you provide": "Prompts o instrucciones que proporciones",
  "Generated outputs": "Resultados generados",
  "This information is used to provide the requested functionality.": "Esta información se utiliza para ofrecer la funcionalidad solicitada.",
  "Usage Information": "Información de uso",
  "We may automatically collect certain information about how you use the app:": "Podemos recopilar automáticamente cierta información sobre cómo usas la app:",
  "Feature usage": "Uso de funciones",
  "Interaction events": "Eventos de interacción",
  "Device type": "Tipo de dispositivo",
  "App version": "Versión de la app",
  "Crash reports": "Informes de errores",
  "Device Information": "Información del dispositivo",
  "We may collect limited device data such as:": "Podemos recopilar datos limitados del dispositivo, como:",
  "Operating system": "Sistema operativo",
  "Anonymous identifiers": "Identificadores anónimos",
  "2. How We Use Your Information": "2. Cómo usamos tu información",
  "We use the collected information to:": "Usamos la información recopilada para:",
  "Provide and maintain the Collecta service": "Proporcionar y mantener el servicio de Collecta",
  "Allow you to save and organize inspiration content": "Permitirte guardar y organizar contenido de inspiración",
  "Generate structured content using AI": "Generar contenido estructurado mediante IA",
  "Improve app performance and features": "Mejorar el rendimiento y las funciones de la app",
  "Monitor usage and detect technical issues": "Supervisar el uso y detectar problemas técnicos",
  "Communicate important updates related to the service": "Comunicar actualizaciones importantes relacionadas con el servicio",
  "3. Third-Party Services": "3. Servicios de terceros",
  "Collecta may use third-party services to operate the app, such as:": "Collecta puede usar servicios de terceros para operar la app, como:",
  "Authentication providers (Google, Apple)": "Proveedores de autenticación (Google, Apple)",
  "Cloud infrastructure": "Infraestructura en la nube",
  "Analytics services": "Servicios de analítica",
  "AI processing services": "Servicios de procesamiento de IA",
  "Subscription and billing providers": "Proveedores de suscripción y facturación",
  "These third parties may process limited data only to perform their services and are required to protect your information.": "Estos terceros pueden procesar datos limitados únicamente para prestar sus servicios y deben proteger tu información.",
  "4. Data Storage and Security": "4. Almacenamiento y seguridad de los datos",
  "Your information is stored using secure cloud infrastructure. We implement reasonable security measures to protect your data from unauthorized access, alteration, or disclosure.": "Tu información se almacena mediante infraestructura segura en la nube. Implementamos medidas de seguridad razonables para proteger tus datos frente al acceso, alteración o divulgación no autorizados.",
  "However, no system can be guaranteed to be 100% secure.": "Sin embargo, ningún sistema puede garantizarse como 100 % seguro.",
  "5. Data Retention": "5. Conservación de datos",
  "We retain your information for as long as your account is active or as necessary to provide the service.": "Conservamos tu información mientras tu cuenta esté activa o mientras sea necesario para prestar el servicio.",
  "If you delete your account, we will delete or anonymize your personal data within a reasonable period of time, unless retention is required for legal obligations.": "Si eliminas tu cuenta, eliminaremos o anonimizaremos tus datos personales en un plazo razonable, salvo que debamos conservarlos por obligaciones legales.",
  "You can request deletion of your account and associated data from within the app or by contacting us at the email below.": "Puedes solicitar la eliminación de tu cuenta y de los datos asociados desde la app o contactándonos en el email indicado abajo.",
  "6. Your Rights": "6. Tus derechos",
  "Depending on your location, you may have the right to:": "Dependiendo de tu ubicación, puedes tener derecho a:",
  "Access the personal data we hold about you": "Acceder a los datos personales que conservamos sobre ti",
  "Request correction of inaccurate information": "Solicitar la corrección de información inexacta",
  "Request deletion of your data": "Solicitar la eliminación de tus datos",
  "Withdraw consent for data processing": "Retirar el consentimiento para el procesamiento de datos",
  "You can request this by contacting us at the email below.": "Puedes solicitarlo contactándonos en el email indicado abajo.",
  "7. Children's Privacy": "7. Privacidad de menores",
  "Collecta is not intended for children under the age of 13. We do not knowingly collect personal data from children.": "Collecta no está dirigida a menores de 13 años. No recopilamos conscientemente datos personales de menores.",
  "If we become aware that a child has provided personal information, we will delete it.": "Si tenemos conocimiento de que un menor ha proporcionado información personal, la eliminaremos.",
  "8. Changes to This Privacy Policy": "8. Cambios en esta Política de privacidad",
  "We may update this Privacy Policy from time to time. When we do, we will update the \"Last updated\" date.": "Podemos actualizar esta Política de privacidad ocasionalmente. Cuando lo hagamos, actualizaremos la fecha de \"Última actualización\".",
  "Continued use of the service after changes indicates acceptance of the updated policy.": "El uso continuado del servicio después de los cambios implica la aceptación de la política actualizada.",
  "9. Contact": "9. Contacto",
  "For subscriptions purchased through Apple, payment processing is handled by Apple. We do not store your full payment information.": "Para las suscripciones compradas a través de Apple, el procesamiento del pago lo gestiona Apple. No almacenamos tu información de pago completa.",
  "If you have questions about this Privacy Policy, you can contact us at:": "Si tienes preguntas sobre esta Política de privacidad, puedes contactarnos en:",

  "Terms of Use | Collecta": "Términos de uso | Collecta",
  "These Terms of Use (\"Terms\") govern your use of the Collecta mobile application and related services (\"Service\") operated by Terron Studio through Collecta (\"we\", \"our\", or \"us\").": "Estos Términos de uso (\"Términos\") regulan tu uso de la aplicación móvil Collecta y sus servicios relacionados (\"Servicio\") operados por Terron Studio a través de Collecta (\"nosotros\", \"nuestro\" o \"nos\").",
  "By accessing or using Collecta, you agree to be bound by these Terms.": "Al acceder a Collecta o usarla, aceptas quedar vinculado por estos Términos.",
  "1. Description of the Service": "1. Descripción del servicio",
  "Collecta is a mobile application designed to help users save content from different platforms and transform inspiration into structured content ideas using AI-powered tools.": "Collecta es una aplicación móvil diseñada para ayudar a los usuarios a guardar contenido de distintas plataformas y transformar la inspiración en ideas de contenido estructuradas mediante herramientas impulsadas por IA.",
  "Features may include:": "Las funciones pueden incluir:",
  "Saving posts and links from external platforms": "Guardar publicaciones y enlaces de plataformas externas",
  "Organizing inspiration content": "Organizar contenido de inspiración",
  "AI-generated summaries or content structures": "Resúmenes o estructuras de contenido generados por IA",
  "Content planning and execution tools": "Herramientas de planificación y ejecución de contenido",
  "We may modify or update features at any time.": "Podemos modificar o actualizar las funciones en cualquier momento.",
  "2. Account Registration": "2. Registro de cuenta",
  "To use Collecta, you may be required to create an account.": "Para usar Collecta, puede que se te solicite crear una cuenta.",
  "You agree to:": "Aceptas:",
  "Provide accurate information": "Proporcionar información precisa",
  "Keep your login credentials secure": "Mantener seguras tus credenciales de acceso",
  "Be responsible for all activity under your account": "Ser responsable de toda la actividad realizada desde tu cuenta",
  "We reserve the right to suspend or terminate accounts that violate these Terms.": "Nos reservamos el derecho de suspender o cancelar cuentas que infrinjan estos Términos.",
  "3. User Content": "3. Contenido del usuario",
  "You retain ownership of the content you save or create in Collecta.": "Conservas la propiedad del contenido que guardas o creas en Collecta.",
  "By using the Service, you grant Collecta a limited license to store, process, and display your content solely for the purpose of providing the service.": "Al usar el Servicio, concedes a Collecta una licencia limitada para almacenar, procesar y mostrar tu contenido únicamente con el fin de prestar el servicio.",
  "You are responsible for ensuring that the content you save or upload does not violate any laws or third-party rights.": "Eres responsable de asegurarte de que el contenido que guardas o subes no infrinja leyes ni derechos de terceros.",
  "4. External Content": "4. Contenido externo",
  "Collecta may store references or previews of content from third-party platforms (such as social media posts).": "Collecta puede almacenar referencias o vistas previas de contenido de plataformas de terceros (como publicaciones en redes sociales).",
  "All rights to such content belong to their respective owners. Collecta does not claim ownership over third-party content.": "Todos los derechos sobre dicho contenido pertenecen a sus respectivos propietarios. Collecta no reclama propiedad sobre contenido de terceros.",
  "5. AI-Generated Content": "5. Contenido generado por IA",
  "Collecta may generate text or structured outputs using artificial intelligence.": "Collecta puede generar texto o resultados estructurados mediante inteligencia artificial.",
  "These outputs are generated automatically and may not always be accurate or appropriate. You are responsible for reviewing and using generated content at your own discretion.": "Estos resultados se generan automáticamente y puede que no siempre sean precisos o adecuados. Eres responsable de revisar y usar el contenido generado bajo tu propio criterio.",
  "Collecta does not guarantee the accuracy or reliability of AI-generated results.": "Collecta no garantiza la precisión ni la fiabilidad de los resultados generados por IA.",
  "6. Acceptable Use": "6. Uso aceptable",
  "You agree not to use Collecta to:": "Aceptas no usar Collecta para:",
  "Violate any laws or regulations": "Infringir leyes o normativas",
  "Infringe intellectual property rights": "Infringir derechos de propiedad intelectual",
  "Distribute harmful or illegal content": "Distribuir contenido dañino o ilegal",
  "Attempt to reverse engineer or exploit the platform": "Intentar aplicar ingeniería inversa o explotar la plataforma",
  "Interfere with the operation of the service": "Interferir con el funcionamiento del servicio",
  "7. Subscription and Payments": "7. Suscripción y pagos",
  "Some features of Collecta may require a paid auto-renewable subscription.": "Algunas funciones de Collecta pueden requerir una suscripción de pago con renovación automática.",
  "If you purchase a subscription through the Apple App Store:": "Si compras una suscripción a través de Apple App Store:",
  "Payment will be charged to your Apple Account at confirmation of purchase.": "El pago se cargará a tu cuenta de Apple al confirmar la compra.",
  "Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period.": "Las suscripciones se renuevan automáticamente salvo que se cancelen al menos 24 horas antes del final del periodo de facturación vigente.",
  "You can manage or cancel your subscription at any time in your Apple Account settings.": "Puedes gestionar o cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta de Apple.",
  "Any free trial, if offered, will convert to a paid subscription unless canceled before the trial ends.": "Cualquier prueba gratuita, si se ofrece, se convertirá en una suscripción de pago salvo que se cancele antes de que termine la prueba.",
  "Pricing and subscription terms displayed in the app are part of these Terms.": "Los precios y términos de suscripción mostrados en la app forman parte de estos Términos.",
  "Billing and refunds are subject to Apple’s App Store policies.": "La facturación y los reembolsos están sujetos a las políticas de App Store de Apple.",
  "8. Termination": "8. Terminación",
  "We may suspend or terminate your account if:": "Podemos suspender o cancelar tu cuenta si:",
  "You violate these Terms": "Infringes estos Términos",
  "You misuse the service": "Haces un uso indebido del servicio",
  "Required by law": "Lo exige la ley",
  "You may also stop using the service at any time.": "También puedes dejar de usar el servicio en cualquier momento.",
  "9. Disclaimer": "9. Descargo de responsabilidad",
  "Collecta is provided \"as is\" without warranties of any kind.": "Collecta se proporciona \"tal cual\", sin garantías de ningún tipo.",
  "We do not guarantee that the service will be uninterrupted, secure, or error-free.": "No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores.",
  "10. Limitation of Liability": "10. Limitación de responsabilidad",
  "To the maximum extent permitted by law, Collecta shall not be liable for any indirect, incidental, or consequential damages resulting from the use of the service.": "En la máxima medida permitida por la ley, Collecta no será responsable de daños indirectos, incidentales o consecuentes derivados del uso del servicio.",
  "11. Changes to the Terms": "11. Cambios en los Términos",
  "We may update these Terms from time to time.": "Podemos actualizar estos Términos ocasionalmente.",
  "Continued use of Collecta after changes indicates acceptance of the updated Terms.": "El uso continuado de Collecta después de los cambios implica la aceptación de los Términos actualizados.",
  "12. Contact": "12. Contacto",
  "If you have questions about these Terms, contact us at:": "Si tienes preguntas sobre estos Términos, contáctanos en:",
};

type Translate = (copy: string) => string;

interface I18nContextValue {
  language: Language;
  t: Translate;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const getBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const preferredLanguage = languages.find((language) => /^en\b|^es\b/i.test(language));

  return preferredLanguage?.toLowerCase().startsWith("es") ? "es" : "en";
};

const setMetaContent = (attribute: "name" | "property", key: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  element?.setAttribute("content", content);
};

const setLinkHref = (rel: string, href: string) => {
  const element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  element?.setAttribute("href", href);
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getBrowserLanguage);

  useEffect(() => {
    const handleLanguageChange = () => setLanguage(getBrowserLanguage());

    window.addEventListener("languagechange", handleLanguageChange);

    return () => window.removeEventListener("languagechange", handleLanguageChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      t: (copy) => (language === "es" ? spanishCopy[copy] ?? copy : copy),
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
};

export const useDocumentMetadata = ({
  title,
  description,
  imageAlt,
  canonical,
}: {
  title: string;
  description?: string;
  imageAlt?: string;
  canonical?: string;
}) => {
  const { language } = useI18n();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = title;

    if (description) {
      setMetaContent("name", "description", description);
      setMetaContent("property", "og:description", description);
      setMetaContent("name", "twitter:description", description);
    }

    setMetaContent("property", "og:title", title);
    setMetaContent("name", "twitter:title", title);

    if (canonical) {
      setLinkHref("canonical", canonical);
      setMetaContent("property", "og:url", canonical);
    }

    if (imageAlt) {
      setMetaContent("property", "og:image:alt", imageAlt);
      setMetaContent("name", "twitter:image:alt", imageAlt);
    }
  }, [canonical, description, imageAlt, language, title]);
};

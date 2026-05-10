# Mariola Valderraín Navarro · Newsletter Funnel

Next.js App Router + TypeScript para un sistema de captación:

LinkedIn → Web → Newsletter Beehiiv → Email → Agenda.

## Rutas principales

- `/` Home de conversión
- `/newsletter` Formulario propio + embed Beehiiv
- `/api/subscribe` CRM + Beehiiv + emails
- `/insights` Listado de posts desde Beehiiv API
- `/agenda` Embed de Cal.com
- `/gracias` Descarga del lead magnet

## Variables de entorno

Copia `.env.example` en Vercel y rellena:

- `BEEHIIV_API_KEY`
- `BEEHIIV_PUBLICATION_ID`
- `CRM_URL`
- `CRM_API_KEY`
- `EMAIL_API`
- `EMAIL_API_KEY`
- `NEXT_PUBLIC_CAL_URL`
- `NEXT_PUBLIC_BEEHIIV_EMBED_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_CLARITY_ID`

## Despliegue

Este proyecto necesita un hosting con runtime para API routes. Recomendado: Vercel.

GitHub Pages no ejecuta `/app/api/subscribe`, por lo que no sirve para el funnel completo con Beehiiv, CRM y emails.

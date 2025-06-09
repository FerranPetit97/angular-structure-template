# Angular 20 Project Structure Template

> 🧱 Template base para estructurar proyectos Angular 20 de forma escalable, mantenible y alineada con buenas prácticas corporativas.

## 📁 Estructura de carpetas

```bash
/src
│
├── /app                     # Core de la aplicación
│   ├── /core               # Servicios singleton, guards, interceptors
│   ├── /shared             # Módulos, componentes y pipes reutilizables
│   ├── /features           # Módulos de funcionalidades (lazy-loaded)
│   ├── /layouts            # Layouts generales de la app (main, auth, etc.)
│   ├── /store              # Estado global (NgRx u otro)
│   └── /app-routing.module.ts
│
├── /assets                 # Recursos estáticos (img, icons, etc.)
├── /environments           # Configs de entorno
│
└── main.ts                 # Entry point

🎯 Objetivo

Estandarizar la arquitectura de proyectos Angular para:

Escalabilidad sin deuda técnica.

Separación clara de responsabilidades.

Soporte inmediato para modularización y lazy-loading.

Facilidad de testing y mantenibilidad.

📦 Stack sugerido

Angular 20

RxJS

NgRx (opcional pero recomendado)

Angular Material o Tailwind (según caso)

ESLint + Prettier + Husky para control de calidad

🚀 Getting Started

1. Clona el template:

git clone https://github.com/FerranPetit97/angular-template.git
cd angular-template

🛠️ Buenas prácticas

· Cada feature tiene su propio módulo, rutas y servicios.

· El core contiene lo que vive toda la vida de la app.

· shared contiene solo elementos reutilizables, sin lógica de negocio.

· Usa rutas lazy por defecto, incluso si el módulo solo tiene una pantalla.

· Servicios globales van en core. Nada de lógica en componentes.
```

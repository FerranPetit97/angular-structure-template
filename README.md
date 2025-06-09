# 🏗️ Angular 20 Project Structure Template

> **🧱 Base para estructurar proyectos Angular 20 escalables, mantenibles y alineados con buenas prácticas corporativas.**

---

## 📁 Estructura de Carpetas

```bash
/src
│
├── /app                     # Core de la aplicación
│   ├── /core                # Servicios singleton, guards, interceptors
│   ├── /shared              # Módulos, componentes y pipes reutilizables
│   ├── /features            # Módulos de funcionalidades (lazy-loaded)
│   ├── /layouts             # Layouts generales de la app (main, auth, etc.)
│   ├── /store               # Estado global (NgRx u otro)
│   └── /app-routing.module.ts
│
├── /assets                  # Recursos estáticos (img, icons, etc.)
├── /environments            # Configs de entorno
│
└── main.ts                  # Entry point
```

---

## 🎯 Objetivo

- **Estandarizar** la arquitectura de proyectos Angular para:
  - 📈 Escalabilidad sin deuda técnica
  - 🧩 Separación clara de responsabilidades
  - 🟦 Modularización y soporte para lazy-loading
  - 🧪 Facilidad de testing y mantenibilidad

---

## 📦 Stack Sugerido

- **Angular 20**
- **RxJS**
- **NgRx** (opcional pero recomendado)
- **Angular Material** o **Tailwind** (según necesidades)
- **ESLint + Prettier + Husky** para control de calidad

---

## 🚀 Primeros Pasos

1. **Clona el template:**

   ```bash
   git clone https://github.com/FerranPetit97/angular-template.git
   cd angular-template
   ```

2. **Instala dependencias y comienza el desarrollo:**

   ```bash
   npm install
   npm start
   ```

---

## 🛠️ Buenas Prácticas

- Cada **feature** debe tener su propio módulo, rutas y servicios.
- El **core** solo contiene lo que vive toda la vida de la app.
- **shared** incluye únicamente elementos reutilizables, sin lógica de negocio.
- Usa **rutas lazy** por defecto, incluso si el módulo solo tiene una pantalla.
- Servicios globales van en **core**. Evita lógica en componentes.
- Mantén el código limpio y aplica siempre las herramientas de linting/formateo.

---

**¡Construye aplicaciones Angular robustas y escalables desde el inicio! 🚀**

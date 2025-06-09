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
- **ESLint + Prettier** para control de calidad

---

## 🚀 Primeros Pasos

1. **Clona el template:**

   ```bash
   git clone https://github.com/FerranPetit97/angular-structure-template.git
   cd angular-structure-template
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

### 📦 Modularización y Lazy Loading de Rutas

**Estructura recomendada para rutas con lazy loading:**

1. **Cada feature tiene su propio archivo de rutas**  
   Ejemplo: `src/app/features/usuarios/usuarios.routes.ts`

   ```typescript
   import { Routes } from "@angular/router";
   import { UsuariosListComponent } from "./pages/usuarios-list/usuarios-list.component";

   export const USUARIOS_ROUTES: Routes = [
     { path: "", component: UsuariosListComponent },
     // Otras rutas internas de la feature
   ];
   ```

2. **En el archivo de rutas principal (`app.routes.ts` o `app-routing.module.ts`), configura el lazy loading:**

   ```typescript
   import { Routes } from "@angular/router";

   export const routes: Routes = [
     {
       path: "usuarios",
       loadChildren: () => import("./features/usuarios/usuarios.routes").then((m) => m.USUARIOS_ROUTES),
     },
     // ...otras rutas principales
   ];
   ```

**Ventajas de este enfoque:**

- Cada feature gestiona internamente sus rutas, facilitando la mantenibilidad y modularidad.
- El lazy loading se gestiona solo desde el router principal, optimizando la carga inicial de la aplicación.
- Permite desarrollo independiente de features y fácil escalabilidad.

> **Nota:** Asegúrate de exportar la constante de rutas (por ejemplo, `USUARIOS_ROUTES`) en cada archivo de rutas de la feature.

---

#### Resumen del patrón

- Las rutas internas de cada feature se definen en su propio archivo.
- El router principal importa cada archivo de rutas y lo integra con `loadChildren` para aplicar lazy loading.
- Este patrón es compatible con Angular Standalone y la estructura modular moderna.

- Servicios globales van en **core**. Evita lógica en componentes.
- Mantén el código limpio y aplica siempre las herramientas de linting/formateo.

---

**¡Construye aplicaciones Angular robustas y escalables desde el inicio! 🚀**

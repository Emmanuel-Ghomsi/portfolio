# Mon Portfolio - Emmanuel GHOMSI GHOMSI

Bienvenue dans le dépôt de mon portfolio personnel, où je présente mes compétences, mes expériences professionnelles, et mes projets. Ce projet utilise Next.js, TailwindCSS, ShadCN, et Framer Motion pour une expérience utilisateur dynamique et moderne.

## 🎨 Aperçu

[Lien vers mon portfolio en ligne](emmanuelghomsi.me)

Ce portfolio a pour but de :
- Présenter mon parcours professionnel et académique.
- Partager mes projets et compétences techniques.
- Offrir une interface de prise de rendez-vous.

## 🚀 Fonctionnalités

- Animations fluides grâce à Framer Motion.
- Interface responsive et moderne avec TailwindCSS et ShadCN.
- Système de filtres pour trier les projets par technologie.
- Prise de rendez-vous intégrée via Calendly.

## 🛠️ Stack Technique

- [Next.js](https://nextjs.org/) : Framework React pour le rendu côté serveur et la génération statique.
- [TailwindCSS](https://tailwindcss.com/) : Pour une personnalisation rapide du style.
- [ShadCN](https://ui.shadcn.com/) : Pour des composants UI accessibles et performants.
- [Framer Motion](https://www.framer.com/motion/) : Pour des animations et transitions fluides.
- [TypeScript](https://www.typescriptlang.org/) : Pour une base de code robuste et maintenable.

## 📂 Structure du Projet

```plaintext
├── public                         # Fichiers statiques (images, favicon, etc.)
├── src                            # Fichiers statiques (images, favicon, etc.)
│   ├── app                        # Composants de l'interface utilisateur
│   │   ├── about                  # Dossier spécifiques à la page "À propos"
│   │   ├── appointment            # Dossier spécifiques à la page "Prendre rendez-vous"
│   │   ├── projects               # Dossier spécifiques à la page "Projets"
│   │   ├── layout.tsx             # Point d'entrée principal
│   │   ├── error.tsx              # Page d'erreur globale
│   │   ├── not-found.tsx          # Page 404 personnalisée
│   │   └── page.tsx               # Page d'accueil
│   ├── components                 # Composants de l'interface utilisateur
│   │   ├── about                  # Composants spécifiques à la page "À propos"
│   │   ├── appointment            # Composants spécifiques à la page "Prendre rendez-vous"
│   │   ├── home                   # Composants spécifiques à la page "Accueil"
│   │   ├── layout                 # Composants globaux
│   │   ├── projects               # Composants spécifiques à la page "Projets"
│   │   ├── ui                     # Composants d'interface génériques (boutons, cartes, etc.)
│   │   └── theme-provider.tsx     # Theme provider pour le "dark mode"
│   ├── data                       # Constantes globales
│   └── lib                        # Librairie de fonctions
└──
```

## 🖥️ Installation et Lancement

### Prérequis
- [Node.js](https://nodejs.org/fr) (v14 ou plus recommandé)
- [npm](https://www.npmjs.com/) ou [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) pour gérer les dépendances

### Étapes
1. Clonez le dépôt

```bash
git clone https://github.com/Emmanuel-Ghomsi/portfolio.git
cd portfolio
```
2. Installez les dépendances

```bash
npm install
# ou
yarn install
```

3. Démarrez le serveur de développement

```bash
npm run dev
# ou
yarn dev
```

4. Accédez au site

    Ouvrez votre navigateur et allez à http://localhost:3000.

### Compilation pour la production

Pour compiler le projet pour la production, exécutez :

```bash
npm run build
# ou
yarn build
```

Les fichiers seront générés dans le dossier out (si configuré pour une exportation statique).

## 📞 Contact

Pour toute question ou proposition d'amélioration, vous pouvez me contacter via :
- Email : emmanuelghomsi21@gmail.com
- LinkedIn : [Emmanuel Ghomsi Ghomsi](https://www.linkedin.com/in/emmanuel-ghomsi-ghomsi-7b97671b4)

N'hésitez pas à ouvrir des issues ou à proposer des PR si vous souhaitez contribuer !
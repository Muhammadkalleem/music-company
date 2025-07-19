 🎵 Music Company Website

A modern and interactive music courses platform built with **Next.js**, **Tailwind CSS**, and **Aceternity UI** components.

## ✨ Features

- 🎸 Browse beginner to advanced music courses
- 🎹 Interactive 3D cards using Aceternity UI
- 🎧 Responsive design
- 📸 Image-based course showcase
- 🔥 Clean, modern dark mode support

---

## 🚀 Technologies Used

- **Next.js 14**
- **Tailwind CSS**
- **TypeScript**
- **Aceternity UI**
- **React 3D Card**
- **Custom JSON Data**

---

## 📦 Folder Stru


music-company/
│
├── public/
│ └── courses/ # All course images (e.g., Guitar.jpg, Piano.jpg)
│
├── src/
│ ├── components/
│ │ └── ui/
│ │ └── 3d-card.tsx # Aceternity UI 3D Card component
│ ├── app/
│ │ └── courses/
│ │ └── page.tsx # Courses listing page
│
├── data/
│ └── music_company.json # Course data used in UI
│
├── README.md


---

## 🧩 Aceternity UI Setup

This project uses [Aceternity UI](https://ui.aceternity.com) for modern UI animations and 3D card components.

### How I Used It:

- Used `CardContainer`, `CardBody`, and `CardItem` from `@/components/ui/3d-card`
- Included 3D hover effect and `translateZ` animations
- Imported Tailwind + blur for visual effect

> To customize, edit `3d-card.tsx` inside `components/ui`.

---

## 🛠️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/music-company.git
cd music-company

2. Install Dependencies

npm install

3. Run Development Server

npm run dev

Visit: http://localhost:3000
🔐 Author

    👤 Muhammad Kaleem

    📧 kaleemburhan7@gmail.com

    🔗 GitHub Profile
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

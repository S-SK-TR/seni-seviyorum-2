import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { HeroSection } from '@/features/hero/HeroSection';
import { MemoriesSection } from '@/features/memories/MemoriesSection';

// Örnek anılar verisi
const memories = [
  {
    id: 1,
    title: 'İlk Buluşma',
    description: 'İlk defa tanıştığımız gün, şimdi anı olarak kalıyor.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'Doğum Günü',
    description: 'Doğum günü hediyem, kalbime yazılmış bir mesaj.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Yaz Tatili',
    description: 'Yaz tatili boyunca birlikte geçirdiğimiz anılar.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HeroSection title="Seni Seviyorum" subtitle="Her anımız, kalbimizdeki en güzel hikayelerden biri." />} />
          <Route path="/memories" element={<MemoriesSection memories={memories} />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
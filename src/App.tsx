import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ChefSpecialsSection } from './components/ChefSpecialsSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DegustationModal } from './components/DegustationModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MenuItem, ChefSpecial, GalleryItem } from './types/restaurant';

export default function App() {
  const [degustationOpen, setDegustationOpen] = useState(false);
  const [selectedDishForReservation, setSelectedDishForReservation] = useState<string | undefined>(undefined);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
    description: '',
  });

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveItem = (item: MenuItem | ChefSpecial) => {
    const title = 'title' in item ? item.title : item.name;
    setSelectedDishForReservation(title);
    scrollToReservation();
  };

  const handleViewImage = (image: string, title: string, description: string) => {
    setLightboxState({
      isOpen: true,
      image,
      title,
      description,
    });
  };

  const handleSelectGalleryItem = (item: GalleryItem) => {
    setLightboxState({
      isOpen: true,
      image: item.image,
      title: item.title,
      description: item.description,
    });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#FAF6F0] antialiased selection:bg-[#DFC283] selection:text-[#070707]">
      {/* Top Navigation Bar */}
      <Navbar
        onReserveClick={scrollToReservation}
        onMenuClick={scrollToMenu}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onReserveTable={scrollToReservation}
        />

        {/* 2. About Section */}
        <AboutSection
          onOpenDegustationModal={() => setDegustationOpen(true)}
          onReserveTable={scrollToReservation}
        />

        {/* 4. Chef's Special Dishes (Placed prominently for immediate culinary intrigue) */}
        <ChefSpecialsSection
          onReserveItem={handleReserveItem}
          onViewImage={handleViewImage}
        />

        {/* 3. Signature Food Menu with Images and Prices */}
        <MenuSection
          onReserveItem={handleReserveItem}
          onOpenDegustationModal={() => setDegustationOpen(true)}
          onViewImage={handleViewImage}
        />

        {/* 5. Luxury Restaurant Gallery */}
        <GallerySection
          onSelectImage={handleSelectGalleryItem}
        />

        {/* 6. Table Reservation Form */}
        <ReservationSection
          preselectedDish={selectedDishForReservation}
          onClearPreselectedDish={() => setSelectedDishForReservation(undefined)}
        />

        {/* 7. Contact Information and Opening Hours */}
        <ContactSection />
      </main>

      {/* 8. Elegant Footer */}
      <Footer />

      {/* Interactive 7-Course Degustation Modal */}
      <DegustationModal
        isOpen={degustationOpen}
        onClose={() => setDegustationOpen(false)}
        onReserve={() => {
          setDegustationOpen(false);
          scrollToReservation();
        }}
      />

      {/* Interactive High-Res Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        title={lightboxState.title}
        description={lightboxState.description}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

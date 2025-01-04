// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import LandingSection from "@/components/landing-section";

export default function LandingPage() {
  const router = useRouter();

  const navigateToOnboarding = () => {
    router.push('/onboarding'); // Navigate to onboarding page
  };

  return (
    <div>
      <LandingSection/>
    </div>
  );
}

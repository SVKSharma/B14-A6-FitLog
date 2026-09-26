import type { Metadata } from 'next';
import Hero from "@/components/layout/Hero";
import Library from "@/components/workouts/Library";

export const metadata: Metadata = {
  title: 'Workout Library',
};

export default function Home() {
  return (
    <>
      <Hero/>
      <Library/>
    </>
  );
}

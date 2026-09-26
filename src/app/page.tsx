import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import Library from "@/components/Library";

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

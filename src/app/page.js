'use client';
import NavBar from '@/features/navbar';
import Banner from '@/features/banner';
import Service from '@/features/service';
import Support from '@/features/support';
import Footer from '@/features/footer';

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Banner />
      <Service />
      <Support />
      <Footer />
    </main>
  );
}

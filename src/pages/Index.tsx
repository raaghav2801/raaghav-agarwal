import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyHireMe } from '@/components/WhyHireMe';
import { CaseStudies } from '@/components/CaseStudies';
import { ExperienceEducation } from '@/components/ExperienceEducation';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Raaghav Agarwal | Product Manager Portfolio</title>
        <meta
          name="description"
          content="Product Manager with engineering depth. Ex-SWE turned product builder with experience launching low-code automation products, driving adoption, and delivering operational savings at scale."
        />
        <meta property="og:title" content="Raaghav Agarwal | Product Manager Portfolio" />
        <meta
          property="og:description"
          content="Product Manager with engineering depth. Turning ambiguity into shipped products and measurable impact."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[WEBSITE_URL]" />
        <meta property="og:image" content="[OG_IMAGE_URL]" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Raaghav Agarwal | Product Manager" />
        <meta
          name="twitter:description"
          content="PM who ships: Research, Roadmaps, Results."
        />
        <link rel="canonical" href="[WEBSITE_URL]" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <WhyHireMe />
          <CaseStudies />
          <ExperienceEducation />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;

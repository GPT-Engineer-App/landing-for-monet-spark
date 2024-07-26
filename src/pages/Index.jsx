import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-32 parallax" style={{backgroundImage: "url('/placeholder.svg')"}}>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl font-bold mb-4 text-center brush-stroke">Claude Monet</h1>
          <p className="text-2xl text-center">Master of Impressionism</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <img src="/placeholder.svg" alt="Claude Monet" className="mx-auto object-cover w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg image-hover" />
            <div className="brush-stroke">
              <h2 className="text-3xl font-semibold mb-6 text-secondary">Biography</h2>
              <p className="text-lg leading-relaxed">Claude Monet (1840-1926) was a French painter and founder of impressionist painting. He is known for his vibrant outdoor scenes and his study of the play of light and its reflection, especially on water. Monet's long career and unwavering dedication to his craft led to a vast body of work that continues to captivate audiences worldwide.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <img src="/placeholder.svg" alt="Water Lilies by Monet" className="mx-auto object-cover w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg image-hover" />
            <div className="brush-stroke">
              <h2 className="text-3xl font-semibold mb-6 text-accent">Famous Works</h2>
              <ul className="text-lg leading-relaxed space-y-2">
                <li>Water Lilies series</li>
                <li>Impression, Sunrise</li>
                <li>Haystacks series</li>
                <li>Rouen Cathedral series</li>
                <li>Poppy Field in a Hollow near Giverny</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <img src="/placeholder.svg" alt="Monet painting outdoors" className="mx-auto object-cover w-full lg:w-1/2 h-[400px] rounded-lg shadow-lg image-hover" />
            <div className="brush-stroke">
              <h2 className="text-3xl font-semibold mb-6 text-secondary">Impact on Art</h2>
              <p className="text-lg leading-relaxed">Monet's approach to light and color revolutionized painting. His work was crucial to the development of Impressionism, which broke away from traditional artistic styles and paved the way for modern art movements. Monet's emphasis on capturing the fleeting effects of light and atmosphere in nature inspired generations of artists and continues to influence contemporary painting.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center text-accent brush-stroke">Visitor Testimonials</h2>
          <TestimonialsCarousel />
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2023 Monet Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

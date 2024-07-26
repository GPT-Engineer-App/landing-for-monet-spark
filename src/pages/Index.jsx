const Index = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Claude Monet: Master of Impressionism</h1>
      
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/placeholder.svg" alt="Claude Monet" className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <p>Claude Monet (1840-1926) was a French painter and founder of impressionist painting. He is known for his vibrant outdoor scenes and his study of the play of light and its reflection, especially on water. Monet's long career and unwavering dedication to his craft led to a vast body of work that continues to captivate audiences worldwide.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img src="/placeholder.svg" alt="Water Lilies by Monet" className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Famous Works</h2>
            <ul className="list-disc list-inside">
              <li>Water Lilies series</li>
              <li>Impression, Sunrise</li>
              <li>Haystacks series</li>
              <li>Rouen Cathedral series</li>
              <li>Poppy Field in a Hollow near Giverny</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/placeholder.svg" alt="Monet painting outdoors" className="w-full md:w-1/2 h-[300px] object-cover rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Impact on Art</h2>
            <p>Monet's approach to light and color revolutionized painting. His work was crucial to the development of Impressionism, which broke away from traditional artistic styles and paved the way for modern art movements. Monet's emphasis on capturing the fleeting effects of light and atmosphere in nature inspired generations of artists and continues to influence contemporary painting.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

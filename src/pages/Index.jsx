import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabContent = {
    bio: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Biography</h2>
        <p>Claude Monet (1840-1926) was a French painter and founder of impressionist painting. He is known for his vibrant outdoor scenes and his study of the play of light and its reflection, especially on water.</p>
      </div>
    ),
    works: (
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
    ),
    impact: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Impact on Art</h2>
        <p>Monet's approach to light and color revolutionized painting. His work was crucial to the development of Impressionism, which broke away from traditional artistic styles and paved the way for modern art movements.</p>
      </div>
    ),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Claude Monet: Master of Impressionism</h1>
      <img src="/placeholder.svg" alt="Claude Monet" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-md mb-6" />
      <div className="flex justify-center space-x-4 mb-6">
        {['bio', 'works', 'impact'].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant={activeTab === tab ? "default" : "outline"}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Index;

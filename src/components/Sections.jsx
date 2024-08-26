
// Features Section
const Features = () => (
    <section className="py-20 bg-background dark:bg-black text-textLight">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-8 bg-gray-800 rounded-lg hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-2 text-primary">AI Integration</h3>
          <p>Seamlessly integrate AI into your workflows.</p>
        </div>
        {/* Feature 2 */}
        <div className="p-8 bg-gray-800 rounded-lg hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-2 text-primary">High Security</h3>
          <p>Protect your data with industry-leading security.</p>
        </div>
        {/* Feature 3 */}
        <div className="p-8 bg-gray-800 rounded-lg hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-2 text-primary">Scalable Solutions</h3>
          <p>Grow your business with our scalable technology.</p>
        </div>
      </div>
    </section>
  );
  
  // Footer Section
  const Footer = () => (
    <footer className="bg-background dark:bg-black text-textLight py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FuturisticApp. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export { Features, Footer };
  
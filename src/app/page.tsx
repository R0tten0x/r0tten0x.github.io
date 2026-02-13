export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 bg-background/80 backdrop-blur-md p-4 z-10">
        <div className="container mx-auto flex justify-center space-x-4">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>
      <main className="container mx-auto p-4 flex-grow">
        <section id="about" className="my-8 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,100,255,0.2)]">
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="mt-4">
            <p>
              Robert (R0tten0x) is an independent full-stack software developer with 27 years of experience in IT and technical leadership. His background spans system architecture, software engineering, and leading complex technical initiatives. Today, he focuses on building reliable, well-engineered solutions end to end, combining deep industry experience with hands-on development across modern stacks.
            </p>
          </div>
        </section>
        <section id="projects" className="my-8 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,100,255,0.2)]">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold">Bury Me Here</h3>
              <p className="mt-2">Sometimes we don't want a response, bury your secrets below and move on.</p>
              <a href="https://burymehere.app" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:text-blue-300">View Project</a>
            </div>
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold">MollisonTownhomes</h3>
              <p className="mt-2">To empower residents with the ability to keep up to date on theft, sales, upcoming events, missing packages.</p>
            </div>
          </div>
        </section>
        <section id="skills" className="my-8 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,100,255,0.2)]">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">Typescript</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">Javascript</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">Python</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">NextJs</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">NodeJs</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">SwiftUI</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">ReactNative</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">Kotlin</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full">C</span>
          </div>
        </section>
        <section id="contact" className="my-8 p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,100,255,0.2)]">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 flex space-x-4">
            <a href="https://instagram.com/r0tten0x_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Instagram</a>
            <a href="https://github.com/R0tten0x" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Github</a>
          </div>
        </section>
      </main>
    </div>
  );
}

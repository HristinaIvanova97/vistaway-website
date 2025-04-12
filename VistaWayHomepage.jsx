
export default function VistaWayHomepage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1F2F6F] font-sans">
      <header className="text-center py-12 bg-cover bg-center" style={{backgroundImage: 'url("path-to-your-image.jpg")'}}>
        <h1 className="text-6xl font-bold">VistaWay</h1>
        <p className="text-xl mt-4 italic">Cultural Connection Through Travel</p>
        <button className="mt-6 px-6 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#e35a5a] transition">
          Apply Now
        </button>
      </header>

      <section className="px-8 md:px-24 py-12">
        <h2 className="text-3xl font-semibold mb-4">What is VistaWay?</h2>
        <p className="text-gray-700">
          VistaWay connects young people with global cultures through meaningful travel experiences. We believe travel should inspire personal growth, authentic connections, and lifelong memories.
        </p>
      </section>

      <section className="bg-white px-8 md:px-24 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-[#3ACFC4]">Next Adventure: Italy Awaits!</h2>
        <p className="text-gray-700 mb-4">
          Experience the charm of Rome and Tuscany through authentic workshops, cultural storytelling, and unforgettable culinary moments. Join a small group of like-minded explorers and create memories for a lifetime.
        </p>
        <button className="px-6 py-2 bg-[#3ACFC4] text-white rounded-md hover:bg-[#2db6a9] transition">
          Discover More
        </button>
      </section>

      <section className="px-8 md:px-24 py-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose VistaWay?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Travel experiences that change perspectives and inspire growth.</li>
          <li>A supportive community of curious, adventurous individuals.</li>
          <li>Authentic cultural immersion that stays with you forever.</li>
        </ul>
      </section>

      <footer className="text-center py-8 bg-gray-100">
        <p className="text-gray-600">Follow us on Instagram: <strong>@vistaway.travel</strong></p>
        <p className="text-gray-600">Contact: vistaway.project@gmail.com</p>
      </footer>
    </div>
  );
}

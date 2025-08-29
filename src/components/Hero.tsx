export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Banking for the{' '}
          <span className="text-primary-500">Digital Generation</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience seamless financial services built for modern life. No
          hidden fees, no paperwork, just pure digital banking efficiency.
        </p>
        <a
          href="#open-account"
          className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Open your account
        </a>
      </div>
    </section>
  )
}

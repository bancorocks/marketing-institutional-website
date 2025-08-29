export default function Benefits() {
  const benefits = [
    {
      title: 'Lightning Fast',
      description: 'Instant transfers and real-time transactions',
    },
    {
      title: 'Secure by Design',
      description: 'Bank-grade security with modern encryption',
    },
    {
      title: 'Zero Fees',
      description: 'No monthly fees, no hidden charges',
    },
  ]

  return (
    <section className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-lg bg-neutral-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {benefit.title}
              </h3>
              <p className="text-neutral-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

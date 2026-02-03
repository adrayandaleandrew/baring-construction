import { Container } from '@/components/layout/Container';

const STEPS = [
  {
    step: 1,
    title: 'Consultation',
    description:
      'We discuss your vision, requirements, and budget to understand your project needs.',
  },
  {
    step: 2,
    title: 'Site Assessment',
    description:
      'Our team inspects the site to evaluate conditions and identify any potential challenges.',
  },
  {
    step: 3,
    title: 'Quotation',
    description:
      'You receive a detailed, transparent quotation with itemized costs and project timeline.',
  },
  {
    step: 4,
    title: 'Construction',
    description:
      'Our skilled team executes the project with regular progress updates and quality checks.',
  },
  {
    step: 5,
    title: 'Handover',
    description:
      'Final inspection, cleanup, and project handover with complete documentation and warranty.',
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A straightforward, transparent process from first consultation to
            project handover.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12">
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-4">
            {STEPS.map((item, i) => (
              <div key={item.step} className="relative flex-1 text-center">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[calc(50%+28px)] top-6 h-0.5 w-[calc(100%-56px)] bg-baring-blue-200" />
                )}

                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-baring-blue-500 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: vertical */}
          <div className="space-y-8 lg:hidden">
            {STEPS.map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-baring-blue-500 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-baring-blue-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

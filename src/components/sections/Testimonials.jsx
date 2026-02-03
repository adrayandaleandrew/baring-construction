import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/data/testimonials';

export function Testimonials() {
  const featured = TESTIMONIALS.filter((t) => t.featured).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from property owners and businesses who trusted us with their
            construction projects.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardBody className="flex h-full flex-col">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-baring-gold-500 text-baring-gold-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mt-4 flex-1">
                  <Quote className="absolute -left-1 -top-1 h-8 w-8 text-baring-blue-100" aria-hidden />
                  <p className="relative z-10 text-sm leading-relaxed text-gray-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-heading text-8xl font-bold text-baring-blue-500 sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist
            or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/" size="lg">
              Go Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

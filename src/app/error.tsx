'use client';

import { AlertTriangle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface ErrorProps {
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <AlertTriangle className="mx-auto h-16 w-16 text-baring-gold-500" />
          <h1 className="mt-6 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Something Went Wrong
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            An unexpected error occurred. Please try again or
            return to the homepage.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button onClick={reset} size="lg">
              Try Again
            </Button>
            <Button href="/" variant="outline" size="lg">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

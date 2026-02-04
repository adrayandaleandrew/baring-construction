import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock framer-motion to render children directly
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...filterDomProps(props)}>{children}</div>
    ),
  },
  AnimatePresence: ({
    children,
  }: React.PropsWithChildren) => <>{children}</>,
}));

function filterDomProps(
  props: Record<string, unknown>
): Record<string, unknown> {
  const invalid = [
    'initial',
    'animate',
    'exit',
    'transition',
    'layout',
    'whileHover',
    'whileTap',
    'variants',
    'mode',
  ];
  const filtered: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (!invalid.includes(k)) filtered[k] = v;
  }
  return filtered;
}

import { Accordion } from './Accordion';

const items = [
  {
    question: 'How long does construction take?',
    answer: 'It depends on the project scope.',
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes, we assist with permits.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Batangas, Laguna, and Cavite.',
  },
];

describe('Accordion', () => {
  it('returns null for empty items', () => {
    const { container } = render(<Accordion items={[]} />);
    expect(container.innerHTML).toBe('');
  });

  it('returns null when items prop is undefined', () => {
    const { container } = render(<Accordion />);
    expect(container.innerHTML).toBe('');
  });

  it('renders all questions', () => {
    render(<Accordion items={items} />);
    for (const item of items) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    }
  });

  it('opens answer on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(
      screen.getByText('How long does construction take?')
    );
    expect(
      screen.getByText('It depends on the project scope.')
    ).toBeInTheDocument();
  });

  it('closes previous when opening another (single-open)', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    // Open first
    await user.click(
      screen.getByText('How long does construction take?')
    );
    expect(
      screen.getByText('It depends on the project scope.')
    ).toBeInTheDocument();

    // Open second — first should close
    await user.click(screen.getByText('Do you handle permits?'));
    expect(
      screen.getByText('Yes, we assist with permits.')
    ).toBeInTheDocument();
  });

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');

    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles same item closed on second click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    const button = screen.getByText(
      'How long does construction take?'
    );
    await user.click(button);
    expect(button.closest('button')).toHaveAttribute(
      'aria-expanded',
      'true'
    );

    await user.click(button);
    expect(button.closest('button')).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });
});

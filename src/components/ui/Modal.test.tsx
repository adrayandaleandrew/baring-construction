import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
  it('renders nothing when not open', () => {
    const { container } = render(
      <Modal open={false}>
        <p>Content</p>
      </Modal>
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders content when open', () => {
    render(
      <Modal open={true}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <Modal open={true} title="Test Title">
        <p>Content</p>
      </Modal>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onClose when ESC is pressed', () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        <p>Content</p>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose}>
        <p>Content</p>
      </Modal>
    );
    // The overlay is the element with bg-black/50
    const overlay = document.querySelector('[aria-hidden]');
    if (overlay) fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(
      <Modal open={true} onClose={onClose} title="Title">
        <p>Content</p>
      </Modal>
    );
    const closeBtn = screen.getByRole('button', {
      name: /close/i,
    });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('sets scroll lock when open', () => {
    const { unmount } = render(
      <Modal open={true}>
        <p>Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  it('applies size class', () => {
    render(
      <Modal open={true} size="xl">
        <p>Content</p>
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    const panel = dialog.querySelector('.max-w-4xl');
    expect(panel).toBeTruthy();
  });

  it('has correct ARIA attributes', () => {
    render(
      <Modal open={true} title="Accessible Modal">
        <p>Content</p>
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute(
      'aria-label',
      'Accessible Modal'
    );
  });
});

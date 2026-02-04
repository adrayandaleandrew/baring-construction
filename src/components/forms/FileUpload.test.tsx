import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { FileUpload } from './FileUpload';

function createFile(
  name: string,
  size: number,
  type: string
): File {
  const buffer = new ArrayBuffer(size);
  return new File([buffer], name, { type });
}

describe('FileUpload', () => {
  it('renders drop zone', () => {
    render(
      <FileUpload files={[]} onFilesChange={vi.fn()} />
    );
    expect(screen.getByText(/drag & drop/i)).toBeInTheDocument();
  });

  it('renders browse label', () => {
    render(
      <FileUpload files={[]} onFilesChange={vi.fn()} />
    );
    expect(screen.getByText('browse')).toBeInTheDocument();
  });

  it('shows existing files', () => {
    const file = createFile('test.pdf', 1024, 'application/pdf');
    render(
      <FileUpload files={[file]} onFilesChange={vi.fn()} />
    );
    expect(screen.getByText('test.pdf')).toBeInTheDocument();
  });

  it('shows formatted file size', () => {
    const file = createFile(
      'photo.jpg',
      2 * 1024 * 1024,
      'image/jpeg'
    );
    render(
      <FileUpload files={[file]} onFilesChange={vi.fn()} />
    );
    expect(screen.getByText('2.0 MB')).toBeInTheDocument();
  });

  it('shows KB for smaller files', () => {
    const file = createFile('doc.pdf', 512 * 1024, 'application/pdf');
    render(
      <FileUpload files={[file]} onFilesChange={vi.fn()} />
    );
    expect(screen.getByText('512.0 KB')).toBeInTheDocument();
  });

  it('calls onFilesChange when removing a file', () => {
    const onChange = vi.fn();
    const file1 = createFile('a.pdf', 1024, 'application/pdf');
    const file2 = createFile('b.pdf', 1024, 'application/pdf');
    render(
      <FileUpload files={[file1, file2]} onFilesChange={onChange} />
    );

    const removeButtons = screen.getAllByRole('button', {
      name: /remove/i,
    });
    fireEvent.click(removeButtons[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([file2]);
  });

  it('shows error message when provided', () => {
    render(
      <FileUpload
        files={[]}
        onFilesChange={vi.fn()}
        error="Upload failed"
      />
    );
    expect(screen.getByText('Upload failed')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('accepts valid files via input change', () => {
    const onChange = vi.fn();
    render(
      <FileUpload files={[]} onFilesChange={onChange} />
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    const file = createFile('doc.pdf', 1024, 'application/pdf');

    fireEvent.change(input, { target: { files: [file] } });
    expect(onChange).toHaveBeenCalledWith([file]);
  });

  it('does not add files when at max limit', () => {
    const onChange = vi.fn();
    const files = Array.from({ length: 5 }, (_, i) =>
      createFile(`f${i}.pdf`, 100, 'application/pdf')
    );
    render(
      <FileUpload files={files} onFilesChange={onChange} />
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('filters invalid file types on add', () => {
    const onChange = vi.fn();
    render(
      <FileUpload files={[]} onFilesChange={onChange} />
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    const badFile = createFile(
      'virus.exe',
      1024,
      'application/x-msdownload'
    );

    fireEvent.change(input, { target: { files: [badFile] } });
    expect(onChange).not.toHaveBeenCalled();
  });
});

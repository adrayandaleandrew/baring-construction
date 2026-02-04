'use client';

import { useCallback } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES,
  MAX_FILES,
} from '@/lib/constants';

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  error?: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileUpload({
  files,
  onFilesChange,
  error,
}: FileUploadProps) {
  const validateAndAdd = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const remaining = MAX_FILES - files.length;
      if (remaining <= 0) return;

      const valid: File[] = [];
      for (let i = 0; i < Math.min(newFiles.length, remaining); i++) {
        const file = newFiles[i];
        if (
          ALLOWED_FILE_TYPES.includes(file.type) &&
          file.size <= MAX_FILE_SIZE
        ) {
          valid.push(file);
        }
      }

      if (valid.length > 0) {
        onFilesChange([...files, ...valid]);
      }
    },
    [files, onFilesChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      validateAndAdd(e.dataTransfer.files);
    },
    [validateAndAdd]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
    },
    []
  );

  const removeFile = useCallback(
    (index: number) => {
      onFilesChange(files.filter((_, i) => i !== index));
    },
    [files, onFilesChange]
  );

  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
        Attachments{' '}
        <span className="font-normal text-gray-400">
          (optional)
        </span>
      </label>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={cn(
          'flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8',
          'transition-colors duration-200',
          files.length >= MAX_FILES
            ? 'border-gray-200 bg-gray-50'
            : 'border-gray-300 hover:border-baring-blue-400',
          error && 'border-red-300'
        )}
      >
        <Upload className="h-8 w-8 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag & drop files here, or{' '}
          <label className="cursor-pointer font-semibold text-baring-blue-500 hover:text-baring-blue-600">
            browse
            <input
              type="file"
              className="sr-only"
              multiple
              accept={ALLOWED_FILE_TYPES.join(',')}
              onChange={(e) => validateAndAdd(e.target.files)}
              disabled={files.length >= MAX_FILES}
            />
          </label>
        </p>
        <p className="mt-1 text-xs text-gray-400">
          PDF, JPG, PNG, WebP. Max 5MB each. Up to{' '}
          {MAX_FILES} files.
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* File list */}
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
            >
              <FileText className="h-4 w-4 shrink-0 text-gray-400" />
              <span className="min-w-0 flex-1 truncate text-sm text-gray-700">
                {file.name}
              </span>
              <span className="shrink-0 text-xs text-gray-400">
                {formatFileSize(file.size)}
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
                aria-label={`Remove ${file.name}`}
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

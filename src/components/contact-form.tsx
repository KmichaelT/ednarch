'use client';

import { useState } from 'react';

interface ProjectType {
  value: string;
  label: string;
}

interface ContactFormProps {
  projectTypes: ProjectType[];
  messagePlaceholder: string;
  submitLabel: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({
  projectTypes,
  messagePlaceholder,
  submitLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString().trim() ?? '',
      email: formData.get('email')?.toString().trim() ?? '',
      projectType: formData.get('project')?.toString().trim() ?? '',
      message: formData.get('message')?.toString().trim() ?? '',
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setFeedback('Please fill in your name, email, and a short message.');
      return;
    }

    try {
      setStatus('loading');
      setFeedback('');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Unable to send your message right now.');
      }

      form.reset();
      setStatus('success');
      setFeedback('Thanks for reaching out. I will respond as soon as possible.');
    } catch (error) {
      setStatus('error');
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message.',
      );
    } finally {
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  }

  const feedbackStyles =
    status === 'success'
      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
      : 'border-red-500 bg-red-500/10 text-red-500';

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
          placeholder="you@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium mb-2">
          Project Type
        </label>
        <select
          id="project"
          name="project"
          className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
          placeholder={messagePlaceholder}
          required
        />
      </div>

      {feedback && status !== 'idle' && (
        <div className={`rounded-md border px-4 py-3 text-sm ${feedbackStyles}`} aria-live="polite">
          {feedback}
        </div>
      )}

      <button
        type="submit"
        className="px-8 py-3 bg-foreground text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}

import { useState, useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_dkdwimf',
          'template_x74bufd',
          formRef.current,
          'KXkVPzneAjt5ajlo-'
        )
        .then(
          () => {
            toast.success("Message sent successfully!");
            setSending(false);
            if (formRef.current) formRef.current.reset();
          },
          (error) => {
            console.error("EmailJS error:", error);
            toast.error("Failed to send message. Please try again later.");
            setSending(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to internships, freelance projects, and collaboration. Drop a message — I usually reply within a day."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="glow-card p-7 space-y-5">
            <a
              href="mailto:kvenmadhi@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail size={18} className="text-primary-glow" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium group-hover:text-gradient">kvenmadhi@gmail.com</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/venmadhi-k"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Linkedin size={18} className="text-primary-glow" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">LinkedIn</div>
                <div className="font-medium group-hover:text-gradient">venmadhi_k</div>
              </div>
            </a>
            <a
              href="https://github.com/venmadhi-k"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Github size={18} className="text-primary-glow" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">GitHub</div>
                <div className="font-medium group-hover:text-gradient">@venmadhi-k</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <MapPin size={18} className="text-primary-glow" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="font-medium">Coimbatore, India</div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="glow-card p-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                <input
                  required
                  name="name"
                  className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all disabled:opacity-60"
            >
              {sending ? "Sending…" : (<>Send Message <Send size={16} /></>)}
            </button>
          </form>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Venmadhi K — Built with React & Tailwind.</p>
          <p>Designed & developed in Coimbatore.</p>
        </footer>
      </div>
    </section>
  );
};

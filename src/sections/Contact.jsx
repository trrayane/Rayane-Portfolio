import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rayaneterki55@gmail.com",
    href: "mailto:rayaneterki55@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213 660 320 043",
    href: "tel:+213660320043",
    color: "text-accent",
    bg: "bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Algeria 🇩🇿",
    href: "#",
    color: "text-highlight",
    bg: "bg-highlight/10 group-hover:bg-highlight/20",
  },
];

const inputClass =
  "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/50";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading]     = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const set = (field) => (e) =>
    setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error(
          "Missing VITE_WEB3FORMS_KEY. Add it to your .env file (get a free key at https://web3forms.com)."
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New portfolio message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 reveal reveal-delay-1">
            <span className="text-secondary-foreground">Let's build </span>
            <span className="font-serif italic font-normal text-white/90">something great.</span>
          </h2>
          <p className="text-muted-foreground reveal reveal-delay-2">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* ── Form ──────────────────────────────────── */}
          <div className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/30 transition-colors duration-500 reveal reveal-delay-3">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Rayane Terki"
                  value={formData.name}
                  onChange={set("name")}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={set("message")}
                  placeholder="Tell me about your project…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Button
                className="w-full btn-shine"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              {/* Status message */}
              {submitStatus.type && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl border text-sm animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* ── Contact info ──────────────────────────── */}
          <div className="flex flex-col gap-5 reveal reveal-delay-4">
            {/* Info cards */}
            <div className="glass rounded-3xl p-8 border border-border/50">
              <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface/60 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm mt-0.5">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass rounded-3xl p-8 border border-primary/25 glow-border flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                I'm open to new opportunities and exciting projects — whether
                you need a full-time engineer or a freelance consultant, let's talk!
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full-time", "Freelance", "Remote", "Contract"].map((type) => (
                  <span key={type} className="tag-pill text-primary border-primary/20">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

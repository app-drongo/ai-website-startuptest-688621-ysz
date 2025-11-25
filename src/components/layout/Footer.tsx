'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Leaf } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'TechFlow',
  brandDescription:
    'Revolutionizing business workflows with intelligent automation and seamless integration',
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  ],
  contactEmail: 'hello@techflow.com',
  copyrightText: '© 2024 TechFlow. All rights reserved.',
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates on our automation solutions',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${config.contactEmail}`;
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      {/* Subtle green accent line */}
      <div className="h-1 bg-gradient-to-r from-green-500/20 via-green-400/40 to-green-500/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                <span data-editable="brandName">{config.brandName}</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              <span data-editable="brandDescription">{config.brandDescription}</span>
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-colors"
                  data-editable="newsletterPlaceholder"
                />
                <Button
                  size="sm"
                  className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-500/50 transition-all duration-200"
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Company
            </h4>
            <nav className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm group"
                  data-editable-href={`companyLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span className="flex items-center gap-1">
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Legal
            </h4>
            <nav className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm group"
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span className="flex items-center gap-1">
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-green-500/20" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Social Links & Contact */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-500/10"
              data-editable-href="contactEmail"
              data-href={`mailto:${config.contactEmail}`}
              aria-label="Contact us via email"
            >
              <Mail className="h-5 w-5" />
            </button>

            {config.socialLinks.map((social, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(social.href)}
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-500/10"
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={`Visit our ${social.label}`}
              >
                {renderSocialIcon(social.icon)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

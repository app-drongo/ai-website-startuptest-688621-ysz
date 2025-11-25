'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Transform Your Business with Intelligent Automation',
  subtitle:
    'StartupTest streamlines your workflows, reduces manual tasks by 80%, and scales with your growing business needs.',
  description:
    'Join hundreds of forward-thinking companies that trust StartupTest to automate their processes, increase productivity, and drive sustainable growth through cutting-edge AI technology.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  badge: '🚀 Now in Beta',
  heroImageUrl:
    'https://media.istockphoto.com/id/1398717821/fr/photo/%C3%A9quipe-daffaires-en-r%C3%A9union-virtuelle-par-appel-vid%C3%A9o.jpg?s=1024x1024&w=is&k=20&c=Z_eqi8v1fJKMtSp37GXrt3g9MpPk6RFcGvP4js0lD8g=',
  heroImageAlt: 'Modern office workspace with automation technology',
  features: [
    'AI-powered workflow automation',
    'Seamless third-party integrations',
    'Real-time analytics dashboard',
    'Enterprise-grade security',
  ],
  stats: [
    { value: '80%', label: 'Task Reduction' },
    { value: '500+', label: 'Companies Trust Us' },
    { value: '99.9%', label: 'Uptime SLA' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getFeatureIcon = (index: number) => {
    const icons = [Zap, Shield, BarChart3, CheckCircle];
    const Icon = icons[index] || CheckCircle;
    return <Icon className="h-5 w-5 text-primary" />;
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2"
              >
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                onClick={handlePrimaryCTA}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <Play className="mr-2 h-5 w-5" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {getFeatureIcon(idx)}
                  <span className="text-sm font-medium" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div
                    className="text-2xl font-bold text-primary"
                    data-editable={`stats[${idx}].value`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    data-editable={`stats[${idx}].label`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <Card className="bg-card border-border overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    data-editable-src="heroImageUrl"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

                  {/* Play button overlay */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-full h-16 w-16 p-0 shadow-lg backdrop-blur-sm"
                        onClick={handleSecondaryCTA}
                      >
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-bounce">
              <Zap className="h-6 w-6" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle, Leaf, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Sustainable Growth Through Smart Technology',
  subtitle:
    'EcoTech revolutionizes your business operations with green automation, reducing environmental impact by 75% while boosting efficiency.',
  description:
    'Join the movement of eco-conscious companies using EcoTech to automate sustainably, optimize resources, and build a greener future through intelligent technology.',
  ctaText: 'Start Green Journey',
  ctaHref: '/signup',
  secondaryCtaText: 'See Impact',
  secondaryCtaHref: '/demo',
  badge: '🌱 Carbon Neutral Platform',
  heroImageUrl:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  heroImageAlt: 'Sustainable office with green technology and natural lighting',
  features: [
    'AI-powered green automation',
    'Carbon footprint tracking',
    'Renewable energy optimization',
    'Sustainable supply chain',
  ],
  stats: [
    { value: '75%', label: 'CO₂ Reduction' },
    { value: '300+', label: 'Green Companies' },
    { value: '100%', label: 'Renewable Energy' },
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
    const icons = [Leaf, Shield, TrendingUp, CheckCircle];
    const Icon = icons[index] || CheckCircle;
    return <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />;
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 text-foreground py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 px-4 py-2"
              >
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
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
                className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/50"
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
                className="border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
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
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/50 dark:bg-green-900/10 rounded-lg p-3 backdrop-blur-sm"
                >
                  {getFeatureIcon(idx)}
                  <span className="text-sm font-medium" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-200 dark:border-green-800">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div
                    className="text-2xl font-bold text-green-600 dark:text-green-400"
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
            <Card className="bg-white/80 dark:bg-card/80 border-green-200 dark:border-green-800 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
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

                  {/* Green overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />

                  {/* Play button overlay */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-green-600/90 hover:bg-green-600 text-white rounded-full h-16 w-16 p-0 shadow-lg backdrop-blur-sm"
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
            <div className="absolute -top-4 -right-4 bg-green-600 text-white rounded-full p-3 shadow-lg animate-bounce">
              <Leaf className="h-6 w-6" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white rounded-full p-3 shadow-lg animate-pulse">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

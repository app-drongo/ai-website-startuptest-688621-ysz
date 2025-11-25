'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Simple, Transparent Pricing',
  subtitle: 'Choose the perfect plan for your business size and scale as you grow',
  plans: [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started with automation',
      features: [
        'Up to 5 team members',
        '10 automated workflows',
        'Basic integrations',
        'Email support',
        '1GB storage',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses that need advanced features',
      features: [
        'Up to 25 team members',
        'Unlimited workflows',
        'Advanced integrations',
        'Priority support',
        '10GB storage',
        'Custom reporting',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade solutions',
      features: [
        'Unlimited team members',
        'Unlimited workflows',
        'All integrations',
        '24/7 dedicated support',
        'Unlimited storage',
        'Advanced analytics',
        'Custom development',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
  guarantee: '14-day free trial • No credit card required • Cancel anytime',
  faqs: [
    {
      question: 'Can I change my plan at any time?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.',
    },
    {
      question: 'What happens after the free trial?',
      answer:
        "After your 14-day free trial, you'll be automatically enrolled in the plan you selected. You can cancel anytime before the trial ends.",
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20 relative overflow-hidden">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-background to-green-50/20 dark:from-green-950/20 dark:via-background dark:to-green-900/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-green-50 dark:bg-green-900/20 p-1 rounded-xl border border-green-200 dark:border-green-800">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'yearly'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200'
              }`}
            >
              Yearly
              <Badge className="ml-2 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'border-green-500 shadow-xl shadow-green-500/10 scale-105 bg-gradient-to-b from-green-50/50 to-background dark:from-green-900/20 dark:to-card'
                  : 'border-border hover:border-green-300 dark:hover:border-green-700 bg-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1 shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-700 dark:text-green-300">
                    <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                  </span>
                  <span className="text-muted-foreground">
                    <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                  </span>
                </div>
                <p className="text-muted-foreground">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span data-editable={`plans[${idx}].features[${featureIdx}]`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full transition-all duration-200 ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/25 hover:shadow-green-600/40'
                      : 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800 dark:hover:bg-green-900/30'
                  }`}
                  size="lg"
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span data-editable="guarantee">{config.guarantee}</span>
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-800 dark:text-green-200">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {config.faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-green-100 dark:border-green-900/30 hover:border-green-200 dark:hover:border-green-800 transition-colors"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                    <span data-editable={`faqs[${idx}].question`}>{faq.question}</span>
                  </h4>
                  <p className="text-muted-foreground">
                    <span data-editable={`faqs[${idx}].answer`}>{faq.answer}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

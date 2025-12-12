/**
 * HowToSchema Component
 * =====================
 * 
 * Adds HowTo structured data for step-by-step guides.
 * Helps search engines display rich results with steps,
 * and voice assistants read instructions aloud.
 * 
 * @see https://schema.org/HowTo
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 */

import JsonLd from '../JsonLd';

interface HowToStep {
    /** Step name/title */
    name: string;
    /** Step description/instructions */
    text: string;
    /** Optional image URL for this step */
    image?: string;
    /** Optional URL for more info about this step */
    url?: string;
}

interface HowToSchemaProps {
    /** Guide title */
    name: string;
    /** Guide description */
    description: string;
    /** Array of steps */
    steps: HowToStep[];
    /** Main image URL */
    image?: string;
    /** Estimated total time (ISO 8601 duration, e.g., "PT30M" for 30 minutes) */
    totalTime?: string;
    /** Estimated cost */
    estimatedCost?: {
        currency: string;
        value: string;
    };
    /** Tools/materials needed */
    supply?: string[];
    /** Equipment needed */
    tool?: string[];
}

export function HowToSchema({
    name,
    description,
    steps,
    image,
    totalTime,
    estimatedCost,
    supply,
    tool,
}: HowToSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        ...(image && { image }),
        ...(totalTime && { totalTime }),
        ...(estimatedCost && {
            estimatedCost: {
                '@type': 'MonetaryAmount',
                currency: estimatedCost.currency,
                value: estimatedCost.value,
            },
        }),
        ...(supply && {
            supply: supply.map((item) => ({
                '@type': 'HowToSupply',
                name: item,
            })),
        }),
        ...(tool && {
            tool: tool.map((item) => ({
                '@type': 'HowToTool',
                name: item,
            })),
        }),
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            ...(step.image && {
                image: {
                    '@type': 'ImageObject',
                    url: step.image,
                },
            }),
            ...(step.url && { url: step.url }),
        })),
    };

    return <JsonLd data={schema} />;
}

/**
 * Usage Example:
 * 
 * <HowToSchema
 *   name="How to Start a Forex Brokerage in 2025"
 *   description="Complete guide to launching your own forex brokerage"
 *   totalTime="P30D"
 *   estimatedCost={{ currency: "USD", value: "10000" }}
 *   steps={[
 *     {
 *       name: "Choose Your Business Model",
 *       text: "Decide between A-Book, B-Book, or Hybrid model...",
 *       image: "https://fxtrusts.com/images/step1.jpg"
 *     },
 *     {
 *       name: "Get Regulatory License",
 *       text: "Apply for forex broker license in your jurisdiction..."
 *     },
 *     {
 *       name: "Select Technology Provider",
 *       text: "Choose a CRM and trading platform provider like FXTrusts..."
 *     }
 *   ]}
 *   tool={["Computer", "Legal documentation", "Capital"]}
 * />
 */

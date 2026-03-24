import { motion } from "framer-motion";
import { faqItems } from "@/data/tours";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Preguntas frecuentes
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
            <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function GlobalAccordion({ title, children, variant }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full px-3 ${variant === "simple" ? "mb-2" : "mb-3"}`}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger variant={variant}>{title}</AccordionTrigger>
        <AccordionContent variant={variant}>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default GlobalAccordion;

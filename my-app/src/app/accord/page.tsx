import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const AccordPaze = () => {
  //if we want more accordian
  const faq = [
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it styled?',
      answer:
        'Yes. It comes with default styles that matches the other components.',
    },
    {
      question: 'Is it not?',
      answer:
        'Yes. It comes with default styles that matches the other components.',
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <main className="w-[500px] p-4 h-full">
        <Accordion type="single" collapsible>
          {faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
};

export default AccordPaze;

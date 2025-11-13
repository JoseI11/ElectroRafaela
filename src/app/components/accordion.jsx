import React from "react";
import { Accordion } from "flowbite-react";
/**
 * MyAccordion componente
 * @param {React.ReactNode} children El contenido del accordion
 * @param {string} title el titulo del accordion
 * @returns {React.ReactElement} The accordion component
 */
const MyAccordion = ({children,title}) => {
  return (
    <div>
     <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="flex items-center justify-center bg-title text-gray-900 flex-wrap text-center" >{title}</Accordion.Title>
        <Accordion.Content className="pt-6 pr-2 h-auto max-h-60 overflow-y-auto">
         {children}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  );
};

export default MyAccordion;

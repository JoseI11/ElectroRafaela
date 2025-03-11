import React from "react";
import { Accordion } from "flowbite-react";
const MyAccordion = ({children,title}) => {
  return (
    <div>
     <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="h-6 bg-title text-white hover:bg-red-300" >{title}</Accordion.Title>
        <Accordion.Content className="pt-6 pr-2 h-40">
         {children}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  );
};

export default MyAccordion;

import React from "react";

interface TarifasContent {
    titulo: React.ReactNode;
    precios: React.ReactNode;
}

interface TarifasProps {
    content: TarifasContent;
}

const Tarifas: React.FC<TarifasProps> = ({content}) => {
  return (
    <div className="flex justify-center p-6 flex-col bg-slate-100">
        <div>{content.titulo}</div>
        <div>{content.precios}</div>
    </div>
  );
};

export default Tarifas;

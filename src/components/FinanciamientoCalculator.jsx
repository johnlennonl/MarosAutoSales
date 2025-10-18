import React, { useState } from "react";

const FinanciamientoCalculator = ({ precio }) => {
  const [plazo, setPlazo] = useState(36);
  const [interes, setInteres] = useState(12);
  const [inicial, setInicial] = useState("");

  // Convertir inicial a número, si está vacío es 0
  const inicialNum = inicial === "" ? 0 : Number(inicial);
  const montoFinanciar = Math.max(precio - inicialNum, 0);
  const tasaMensual = interes / 100 / 12;
  const cuota = montoFinanciar > 0
    ? (montoFinanciar * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo))
    : 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Inicial ($)</label>
          <input
            type="number"
            min={0}
            max={precio}
            value={inicial}
            onChange={e => setInicial(e.target.value.replace(/^0+(?!$)/, ""))}
            placeholder="Capital inicial que aportas"
            className="px-3 py-2 border border-gray-300 bg-gray-100 text-[#101010] appearance-none"
            style={{MozAppearance:'textfield'}}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Plazo (meses)</label>
          <input type="number" min={12} max={72} value={plazo} onChange={e => setPlazo(Number(e.target.value))} className="px-3 py-2 border border-gray-300 bg-gray-100 text-[#101010] appearance-none" style={{MozAppearance:'textfield'}} />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Interés anual (%)</label>
          <input type="number" min={5} max={30} value={interes} onChange={e => setInteres(Number(e.target.value))} className="px-3 py-2 border border-gray-300 bg-gray-100 text-[#101010] appearance-none" style={{MozAppearance:'textfield'}} />
        </div>
      </div>
      <div className="mt-2 text-lg font-bold text-[#0B1C2A]">Cuota estimada: <span className="text-[#EA0029]">${cuota.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span> / mes</div>
      <div className="text-xs text-gray-500">* El cálculo es aproximado y no representa una oferta formal. Consulta condiciones reales con el asesor.</div>
    </div>
  );
};

// Eliminar spinners en Chrome, Safari, Edge
const spinnerStyles = `
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

function FinanciamientoCalculatorWrapper(props) {
  return <><style>{spinnerStyles}</style><FinanciamientoCalculator {...props} /></>;
}

export default FinanciamientoCalculatorWrapper;

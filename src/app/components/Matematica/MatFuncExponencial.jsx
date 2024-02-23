import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5, TbCircleNumber6 } from "react-icons/tb";

const MatFuncExponencial = () => {
  return (
    <div className='pt-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
        
            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-8 text-4xl font-bold px-4 text-slate-700">Função exponencial</h2>
                <p className='pb-4'>
                Funções exponenciais decrescentes ocorrem com frequência na natureza. Talvez o exemplo mais conhecido seja a variação da intensidade de radioatividade emitida por um material ao longo do tempo. Esses materiais são caracterizados pela meia-vida, isto é, o intervalo de tempo em que sua intensidade radioativa diminui pela metade.
                </p>
                <p>
                Funções exponenciais crescentes são raras e, quando ocorrem, duram pouco, pois na natureza os recursos são sempre limitados. Como as funções exponenciais crescentes têm um crescimento muito acentuado, o valor da função rapidamente excede o limite imposto pelos recursos disponíveis.
                </p>
            </div>

            
            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/function.webp"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>
        </div>

        
        
    </div>
    
  );
};

export default MatFuncExponencial;

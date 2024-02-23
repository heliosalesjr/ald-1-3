import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5, TbCircleNumber6 } from "react-icons/tb";

const MatPG = () => {
  return (
    <div className='pt-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
        
            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-8 text-4xl font-bold px-4 text-slate-700">Progressão geométrica</h2>
                <p className='pb-4'>
                Nesta etapa será trabalhada outro tipo de sequência, a progressão geométrica, que tem uma importante conexão com a função exponencial. O crescimento exponencial às vezes causa surpresa, uma sensação que precisa ser explorada. Essa sensação é bem expressa no caso dos juros compostos e tem uma boa referência na lenda do xadrez:
                </p>
                <p>
                Num antigo reino, um homem, o inventor do xadrez, apresentou ao rei seu jogo e o presenteou com um tabuleiro quadrado, dividido em 64 casas iguais, e dois conjuntos de peças de duas cores diferentes que podiam se movimentar no tabuleiro segundo determinadas regras.
                </p>
            </div>

            
            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/chess.jpg"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>
        </div>

        <div className='pt-8'>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                
                
                <div className='bg-slate-100 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <p className="text-4xl mb-4">♚</p>
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Depois de aprender o jogo e ganhar algumas partidas, o rei resolveu recompensar o inventor, que pediu o pagamento em grãos de trigo: um grão na primeira casa, dois grãos na segunda, quatro na terceira, oito na quarta, e assim por diante, até a 64ª casa do tabuleiro, formando assim uma progressão geométrica.</p>
                </div>

                <div className='bg-slate-100 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                    <p className="text-4xl mb-4">♞</p>
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>O rei concordou, mesmo considerando o homem insensato. Entretanto, na vigésima primeira casa, já eram necessários mais de um milhão de grãos de trigo, e antes de chegar na quinquagésima casa, já não havia mais trigo suficiente no mundo.</p>
                </div>

                <div className='bg-slate-100 p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                    <p className="text-4xl mb-4">♛</p>
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left'>Essa lenda mostra como o raciocínio humano não apreende bem crescimentos exponenciais, uma vez que eles adquirem proporções muito maiores do que conseguimos imaginar. Veja mais em <a href='https://www.google.com/url?q=https%3A%2F%2Fwww.flipsnack.com%2F7E8DB9BBDC9%2Fbei_educacao_ed_financeira_topicos_1ano_em_educador.html%3Fp%3D29&sa=D&sntz=1&usg=AOvVaw3y1f4QWx6QXrn-ti9tMGpC' target='blank' className='underline text-blue-800 hover:text-purple-900'>"Tópicos de Matemática"</a>(p. 29).</p>
                </div>

                
                
            </div>
        </div>
        
    </div>
    
  );
};

export default MatPG;

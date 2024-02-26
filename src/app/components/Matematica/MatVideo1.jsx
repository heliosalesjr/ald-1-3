'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
      <div className='bg-slate-100'>
        <div className='max-w-5xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full border-2 border-primary p-4 rounded-3xl">
                
                    <h1 className="text-4xl font-bold text-center text-slate-800 p-4">Como trabalhar os juros compostos</h1>
                
                    <p className=" text-slate-700 mb-4 py-2 p-4">Nas situações em que há juros compostos, o tomador do empréstimo terá juros não só sobre seu capital mas sobre o capital acumulado aos juros que ganhou no período anterior. Isso significa que, no primeiro período, há juros a serem contabilizados. No segundo período, os juros são calculados sobre o capital inicial acrescido dos juros do primeiro período, e assim sucessivamente. Desse modo, os juros resultantes não são constantes por período, e vão sempre aumentando. É como se, a cada novo período, a taxa fosse aumentando.</p>
                    <p className=" text-slate-700 mb-4 py-2 p-4">Confira em {' '}
                      <a href='https://www.google.com/url?q=https%3A%2F%2Fwww.flipsnack.com%2F7E8DB9BBDC9%2Fbei_educacao_ed_financeira_topicos_1ano_em_educador.html%3Fp%3D35&sa=D&sntz=1&usg=AOvVaw1mp1B6mGx-gRH2_wPI5_i_' target='blank' className='underline text-blue-800 hover:text-purple-900'>
                      Tópicos de Matemática
                      </a>{' '} (p. 35) mais um pouco sobre esse tema, caso você queira se aprofundar.</p>
                    
              </div>
              
            </div>
          </div>
        
        </div>
      </div>
        
      );
    }

export default MatVideo1
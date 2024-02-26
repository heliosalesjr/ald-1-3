import React from 'react';

const MatLogaritmo = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto py-6 sm:py-8 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/logaritmos.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">Logaritmo e função logarítmica</h2>
    
            <p className="mb-8 text-white">
            Em geral, os estudantes têm muita dificuldade com os logaritmos. Por isso, vale a pena deixá-los mais confortáveis, levando-os a perceber que o logaritmo é apenas o nome dado a um expoente.
            </p>

            <p className="mb-8 text-white">Em {''}
                <a href="https://drive.google.com/file/d/1OB6RNKwKCrpGmMY2oMTAaLAi_FcHa6zu/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='underline hover:text-sky-300'>
                    Tópicos de Matemática
                </a>
            {' '}(p. 31), há sugestões de abordagens apropriadas caso você decida se aprofundar nesse tema.</p>
    
            
            </div>
            {/* content - end */}
        </div>
        </div>
    </div>
  

  );
};

export default MatLogaritmo;




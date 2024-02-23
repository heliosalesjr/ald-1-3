import React from 'react'

function AtiDica() {
    return (
        <div className="bg-slate-500">
          <div className="flex items-center justify-center p-8">
            <div className="attention-box text-white text-center text-lg max-w-5xl mx-auto border-2 rounded-xl border-primary p-8 m-8">
              <p>
              Relembre o exemplo de PDA da professora Vilma{' '}
                <a
                  href="https://drive.google.com/file/d/1mTCPWHvvDZwulrkI2Xuc0lM8EjwGvk7g/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  (clique aqui)
                </a>{' '}e do professor Carlos {' '}
                <a
                  href="https://drive.google.com/file/d/1N3CqUpfYnzfR4G_tBm_F8DHZQ9SxX39H/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline"
                >
                  (clique aqui)
                </a>{''}. Veja as estratégias de avaliação descritas em cada um. </p>
            </div>
          </div>
        </div>
      );
    }

export default AtiDica
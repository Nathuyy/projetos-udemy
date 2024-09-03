import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment> 
        <Header {...props}/> {/* indica  que as propriedades definidas no main vao ser passadas para a header tbm */}
        <main className='content conteiner-fluid'>
            <div className="p-3 mt-3">
                {props.children} {/* todas as tags adicionadas no main vao entrar nessa div */}

            </div>
        </main>

    </React.Fragment>
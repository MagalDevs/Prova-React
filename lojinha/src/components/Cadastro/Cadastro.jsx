import './Cadastro.css'

import { useState } from 'react';

const Cadastro = () => {
    const [activeForm, setActiveForm] = useState('');
    //inputs-cliente
    const [nomeCliente, setNomeCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    //inputs-fornecedor
    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [emailFornecedor, setEmailFornecedor] = useState('');
    const [enderecoFornecedor, setEnderecoFornecedor] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefoneFornecedor, setTelefoneFornecedor] = useState('');
    //handles
    const handleNomeCliente = (event) => {
        setNomeCliente(event.target.value);
    }

    const handleEmailCliente = (event) => {
        setEmailCliente(event.target.value);
    }

    const handleEnderecoCliente = (event) => {
        setEnderecoCliente(event.target.value);
    }

    const handleCpf = (event) => {
        setCpf(validNumericInputs(event.target.value));
    }

    const handleTelefoneCliente = (event) => {
        setTelefoneCliente(validNumericInputs(event.target.value));
    }

    const handleNomeFornecedor = (event) => {
        setNomeFornecedor(event.target.value);
    }

    const handleEmailFornecedor = (event) => {
        setEmailFornecedor(event.target.value);
    }

    const handleEnderecoFornecedor = (event) => {
        setEnderecoFornecedor(event.target.value);
    }

    const handleCnpj = (event) => {
        setCnpj(validNumericInputs(event.target.value));
    }

    const handleTelefoneFornecedor = (event) => {
        setTelefoneFornecedor(validNumericInputs(event.target.value));
    }
    //cleanInputs
    const cleanInputsCliente = () =>{
        setNomeCliente('');
        setEmailCliente('');
        setEnderecoCliente('');
        setCpf('');
        setTelefoneCliente('');
    }

    const cleanInputsFornecedor = () =>{
        setNomeFornecedor('');
        setEmailFornecedor('');
        setEnderecoFornecedor('');
        setCnpj('');
        setTelefoneFornecedor('');
    }
    //validações
    const validNumericInputs = (value) =>{
        return value.replace(/[^0-9]/g, '')
    }

    const tudoPreenchidoCliente = () => {
        return (nomeCliente == "" || emailCliente == "" || enderecoCliente == "" || cpf == "" || telefoneCliente == "") ? true : false;
    }

    const tudoPreenchidoFornecedor = () => {
        return (nomeFornecedor == "" || emailFornecedor == "" || enderecoFornecedor == "" || cnpj == "" || telefoneFornecedor == "") ? true : false;
    }

    //funções
    const showOrHide = (elemento) => {
        setActiveForm(elemento);
    }

    //validação de cadastro
    const cadastroCliente = (e) => {
        e.preventDefault();
        if(tudoPreenchidoCliente()){
            alert('Preencha todos os campos');
            return;
        }
    }

    const cadastroFornecedor = (e) => {
        e.preventDefault();
        if(tudoPreenchidoFornecedor()){
            alert('Preencha todos os campos');
            return;
        }
    }


    return (
        <div className='tela'>
            <div className='container-cadastro'>
                <h1>Cadastro</h1>
                <div className='botoes'>
                    <button onClick={() => showOrHide("cliente")}>Cliente</button>
                    <button onClick={() => showOrHide("fornecedor")}>Fornecedor</button>
                </div>
                <div id='container-cliente' className={(activeForm === 'cliente') ? '' : 'hidden'}>
                    <form className='form' onSubmit={(e) => cadastroCliente(e)}>
                        <div className="inputs">
                            <label>Nome</label>
                            <input type='text' value={nomeCliente} onChange={(e) => handleNomeCliente(e)} placeholder='Nome'/>
                        </div>
                        <div className="inputs">
                            <label>E-mail</label>
                            <input type='email' value={emailCliente} onChange={(e) => handleEmailCliente(e)} placeholder='E-mail'/>
                        </div>
                        <div className="inputs">
                            <label>Endereço</label>
                            <input type="text" value={enderecoCliente} onChange={(e) => handleEnderecoCliente(e)} placeholder='Ex: Rua araguaia, 764'/>
                        </div>
                        <div className="inputs">
                            <label>CPF</label>
                            <input type='text' value={cpf} onChange={(e) => handleCpf(e)} placeholder='123.456.xx'/>
                        </div>
                        <div className="inputs">
                            <label>Telefone</label>
                            <input type='text' value={telefoneCliente} onChange={(e) => handleTelefoneCliente(e)} placeholder='Telefone'/>
                        </div>
                        <div className="botoes">
                            <button>Cadastrar</button>
                            <button className='limpar' onClick={(event) => {
                                event.preventDefault();
                                cleanInputsCliente();
                            }}>Limpar</button>
                        </div>
                    </form>
                </div>
                <div id='container-fornecedor' className={(activeForm === 'fornecedor') ? '' : 'hidden'}>
                    <form className='form' onSubmit={(e) => cadastroFornecedor(e)}>
                        <div className="inputs">
                            <label>Nome Fantasia</label>
                            <input type='text' value={nomeFornecedor} onChange={(e) => handleNomeFornecedor(e)} placeholder='Nome'/>
                        </div>
                        <div className="inputs">
                            <label>E-mail Corporativo</label>
                            <input type='email' value={emailFornecedor} onChange={(e) => handleEmailFornecedor(e)} placeholder='E-mail'/>
                        </div>
                        <div className="inputs">
                            <label>Endereço</label>
                            <input type="text" value={enderecoFornecedor} onChange={(e) => handleEnderecoFornecedor(e)} placeholder='Ex: Rua araguaia, 764'/>
                        </div>
                        <div className="inputs">
                            <label>CNPJ</label>
                            <input type='text' value={cnpj} onChange={(e) => handleCnpj(e)} placeholder='12.3456.789/0000-xx'/>
                        </div>
                        <div className="inputs">
                            <label>Telefone</label>
                            <input type='tel' value={telefoneFornecedor} onChange={(e) => handleTelefoneFornecedor(e)} placeholder='Telefone'/>
                        </div>
                        <div className="botoes">
                            <button>Cadastrar</button>
                            <button className='limpar' onClick={(event) =>{
                                event.preventDefault();
                                cleanInputsFornecedor();
                            }}>Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro

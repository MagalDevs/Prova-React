import './css/cadastro.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const Cadastro = () => {
    const [activeForm, setActiveForm] = useState('');
    //inputs-cliente
    const [nomeCliente, setNomeCliente] = useState('');
    const [idade, setIdade] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    //inputs-fornecedor
    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [tipoEmpresa, setTipoEmpresa] = useState('');
    const [emailFornecedor, setEmailFornecedor] = useState('');
    const [enderecoFornecedor, setEnderecoFornecedor] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefoneFornecedor, setTelefoneFornecedor] = useState('');
    //handles
    const handleNomeCliente = (event) => {
        setNomeCliente(event.target.value);
    }

    const handleIdade = (event) => {
        setIdade(validNumericInputs(event.target.value));
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

    const handleTipoEmpresa = (event) => {
        setTipoEmpresa(event.target.value);
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
        setIdade('');
        setEmailCliente('');
        setEnderecoCliente('');
        setCpf('');
        setTelefoneCliente('');
    }

    const cleanInputsFornecedor = () =>{
        setNomeFornecedor('');
        setTipoEmpresa('');
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

    const validEmail = async (email) => {
        try {
            let url = `https://api.invertexto.com/v1/email-validator/${email}?token=16216%7ChHPgZWYUgvqx3H1s6frfDKiCzCw7nYps`
            const response = await axios.get(url)
            console.log(response.data.valid_format);

            if(response.data.valid_format){
                console.log('E-mail válido');
                return true;
            }else{
                alert('E-mail inválido');
                return false;
            }
        } catch (error) {
            console.log(error);
            alert('Erro ao validar e-mail');
        }
    }

    const validTipoEmpresa = () => {
        return (tipoEmpresa == "MEI" || tipoEmpresa == "LTDA" || tipoEmpresa == "SS" || tipoEmpresa == "SA") ? true : false;
    }

    const validCpf = async () =>{
        try {
            let url = `https://api.invertexto.com/v1/validator?token=16216%7ChHPgZWYUgvqx3H1s6frfDKiCzCw7nYps&value=${cpf}&type=cpf`
            const response = await axios.get(url)
            console.log(response.data.valid);
            
            if(response.data.valid){
                console.log('CPF Válido');
                return true;
            }else{
                alert("CPF Inválido!");
                return false;
            }
        } catch (erro) {
            console.log(erro);
            alert('Erro ao validar CPF');
        }
    }

    const validCnpj = async () =>{
        try {
            let url = `https://api.invertexto.com/v1/validator?token=16216%7ChHPgZWYUgvqx3H1s6frfDKiCzCw7nYps&value=${cnpj}&type=cnpj`       
            const response = await axios.get(url)
            console.log(response.data.valid);

            if(response.data.valid){
                console.log('CNPJ Válido');
                return true;
            }else{
                alert("CNPJ Inválido!");
                return false;
            }
        } catch (erro) {
            console.log(erro);
            alert('Erro ao validar CNPJ');
        }
    }

    //funções
    const showOrHide = (elemento) => {
        setActiveForm(elemento);
    }

    //validação de cadastro
    const cadastroCliente = async(e) => {
        e.preventDefault();
        if(tudoPreenchidoCliente()){
            alert('Preencha todos os campos');
            return;
        }

        if(!(await validEmail(emailCliente))){
            return;
        }

        if(!(await validCpf())){
            return;
        }

        cleanInputsCliente();
        return alert('cadastrado com sucesso!');
    }

    const cadastroFornecedor = async(e) => {
        e.preventDefault();
        if(tudoPreenchidoFornecedor()){
            alert('Preencha todos os campos');
            return;
        }

        if(!validTipoEmpresa()){
            alert('Tipo de empresa inválido, utilize MEI, LTDA, SS ou SA');
            return;
        }

        if(!(await validEmail(emailFornecedor))){
            return;
        }

       if(!(await validCnpj())){
           return;
       }

        cleanInputsFornecedor();
        return alert('cadastrado com sucesso!');
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
                            <label>Idade</label>
                            <input type='number' value={idade} onChange={(e) => handleIdade(e)} placeholder='Idade'/>
                        </div>
                        <div className="inputs">
                            <label>E-mail</label>
                            <input type='text' value={emailCliente} onChange={(e) => handleEmailCliente(e)} placeholder='E-mail'/>
                        </div>
                        <div className="inputs">
                            <label>Endereço</label>
                            <input type="text" value={enderecoCliente} onChange={(e) => handleEnderecoCliente(e)} placeholder='Ex: Rua araguaia, 764'/>
                        </div>
                        <div className="inputs">
                            <label>CPF</label>
                            <input type='text' value={cpf} onChange={(e) => handleCpf(e)} placeholder='123.456.789-xx'/>
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
                            <label>Tipo de Empresa</label>
                            <input type='text' value={tipoEmpresa} onChange={(e) => handleTipoEmpresa(e)} placeholder='Ex: MEI, LTDA, SS, SA'/>
                        </div>
                        <div className="inputs">
                            <label>E-mail Corporativo</label>
                            <input type='text' value={emailFornecedor} onChange={(e) => handleEmailFornecedor(e)} placeholder='E-mail'/>
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
                <div className="voltar">
                    <Link className='voltar-link' to="/">Voltar à página principal</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cadastro
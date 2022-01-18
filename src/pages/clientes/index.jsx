import './style.css'
import Client from './client'
import HeaderClients from './headerClients'
import Layout from '../../components/template/index'

const Clientes = () => {
  return (
    <Layout>
      <HeaderClients />
      <ul className='headList-client'>
            <li>Detalhes</li>
            <li>Instrutor</li>
            <li>Cadastro</li>
            <li>Status</li>
            <li></li>
      </ul>
      <ul>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>

        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>

        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
        <Client instructor='Rodrigo' name='Mateus Marques' status='ATIVO'/>
      </ul>
    </Layout>
  )
}

export default Clientes
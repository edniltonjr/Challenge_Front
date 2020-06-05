import React, {useEffect, useState, useCallback} from 'react';
import { TableStyled } from './styles';
import moment from 'moment';

import api from '../services/api';
import myApi from '../services/MyApi';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loading from '../assets/5.gif';

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

interface RESULT {
  id: any;
  data: any;
  hora: any;
  origem: any;
  destino: any;
  tempo_total: any;
  sentido: any;
  codigo_usuario: any;
  nome_usuario: any;
  chave: any;
  dnis: any;
  status: any;
  resultado: any;
  cdr_disposition: any;
  codigo_campanha: any;
  nome_campanha: any;
  codigo_tronco: any;
  nome_tronco: any;
  tipo_ligacao: any;
  cadencia: any;
  tarifa: any;
  custo_ligacao: any;
  tabulacao: any;
  abordagem: any;
  conversao: any;
  gravacao_id: any;
  mailing_id: any;
  gravacao_inicio: any;
  gravacao_arquivo: any;
  amd_status: any;
  hangup_cause: any;
  origem_ligacao: any;
  hora_finalizacao: any;
  hora_encerramento: any;
  ligacao_id: any;
  codigo_conversao_nome: any;
  cpf: any;
  extension: any;
  call_nome: any;
  campolivre01: any;
  asterisk_channel: any;
  tempo_espera: any;
  protocolo_atendimento: any;
  obs_operador: any;
  anotacao_operador: any;
  tempo_tarifado: any;
  hora_dac: any;
  hora_atendida: any;
}

 interface RootObject {
  CODIGO: number;
  STATUS: string;
  RESULTADO: RESULT[];


}

const TableView: React.FC = () => {



  const classes = useStyles();
  const [crms, setCrms] = useState<RootObject[]>([]); //
  const [loading, setLoading] = useState<boolean>(false);

  const [data_inicial, setData_inicial] = useState('');
  const [data_final, setData_final] = useState('');
  const [servico, setServico] = useState('');
  const [status, setStatus] = useState('');
  const [resultado, setResultado] = useState('');

  

  // useEffect(() => {
  //   api
  //     .get('relatorio/chamadas.php?data_inicial=01/06/202000:00&data_final=02/06/202010:59&servico=12&status=ENCERRADA&resultado=ATENDIDA&formato=json')
  //     .then((res) => {
  //       setCrms([res.data]);
  //       console.log('useeffect', [res.data]);
  //       setLoading(bool => !bool);
  //     });
  // }, []);

  const dataFilter = useCallback((data_inicial, data_final, servico, status, resultado): void => {
    api.get(`relatorio/chamadas.php?data_inicial=${data_inicial}&data_final=${data_final}&servico=${servico}&status=${status}&resultado=${resultado}&formato=json`)
    .then((res) => {
      setCrms([res.data])
      // myApi.post('/crms/add', {

      // })
      setLoading(bool => !bool);
    }  ) 
  }, []);

  return (






<TableStyled>

<form>
  <section>
  <label style={{ margin: "10px" }}>Data Inicial:</label> 
  <input data-date-format='DD-MM-YYYY'  type="date" placeholder="Data Inicial" onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setData_inicial(event.target.value)} value={data_inicial} name="data_inicial"/>
   <label style={{ margin: "10px" }} >Data Final:</label>
   <input type="date" placeholder="Data Final" onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setData_final(event.target.value)} value={data_final} name="data_final"/>
  </section>
    <input style={{ marginTop: "10px", textAlign: "center"}} type="text" placeholder="Serviço" onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setServico(event.target.value)} value={servico} name="servico"/>
    <input style={{ marginTop: "10px", textAlign: "center" }} type="text" placeholder="Status" onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setStatus(event.target.value)} value={status} name="status"/>
    <input style={{ marginTop: "10px", textAlign: "center" }} type="text" placeholder="Resultado" onChange={(event: React.ChangeEvent<HTMLInputElement>)  => setResultado(event.target.value)} value={resultado} name="resultado"/>
    <button style={{ marginTop: "10px", background: "#1C7370", color: "#fff", border: "none", borderRadius: "5px" }} type="button" onClick={() => dataFilter(moment(data_inicial).format('DD/MM/yyyy'), moment(data_final).format('DD/MM/yyyy'), servico, status, resultado)}>Pesquisar</button>
  </form>

      <TableContainer component={Paper}>
      
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {crms[0] && Object.keys(crms[0]?.RESULTADO[0]).map(item => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { loading ? 

            <div>
              <p style={{ textAlign: "center", marginTop: "10vh" }} >Carregando Dados...</p>
              <img src={Loading} style={{ width: "30px" }} alt="loading"/>
            </div>
              :  (
              crms &&
              crms[0]?.RESULTADO.map(item => (
                <TableRow key={item.id}>
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell align="right">{item.data}</TableCell>
                  <TableCell align="right">{item.hora}</TableCell>
                  <TableCell align="right">{item.origem}</TableCell>
                  <TableCell align="right">{item.destino}</TableCell>
                  <TableCell align="right">{item.tempo_total}</TableCell>
                  <TableCell align="right">{item.sentido}</TableCell>
                  <TableCell align="right">{item.codigo_usuario}</TableCell>
                  <TableCell align="right">{item.nome_usuario}</TableCell>
                  <TableCell align="right">{item.chave}</TableCell>
                  <TableCell align="right">{item.dnis}</TableCell>
                  <TableCell align="right">{item.status}</TableCell>
                  <TableCell align="right">{item.resultado}</TableCell>
                  <TableCell align="right">{item.cdr_disposition}</TableCell>
                  <TableCell align="right">{item.codigo_campanha}</TableCell>
                  <TableCell align="right">{item.nome_campanha}</TableCell>
                  <TableCell align="right">{item.codigo_tronco}</TableCell>
                  <TableCell align="right">{item.nome_tronco}</TableCell>
                  <TableCell align="right">{item.tipo_ligacao}</TableCell>
                  <TableCell align="right">{item.cadencia}</TableCell>
                  <TableCell align="right">{item.tarifa}</TableCell>
                  <TableCell align="right">{item.custo_ligacao}</TableCell>
                  <TableCell align="right">{item.tabulacao}</TableCell>
                  <TableCell align="right">{item.abordagem}</TableCell>
                  <TableCell align="right">{item.conversao}</TableCell>
                  <TableCell align="right">{item.gravacao_id}</TableCell>
                  <TableCell align="right">{item.mailing_id}</TableCell>
                  <TableCell align="right">{item.gravacao_inicio}</TableCell>
                  <TableCell align="right">{item.gravacao_arquivo}</TableCell>
                  <TableCell align="right">{item.amd_status}</TableCell>
                  <TableCell align="right">{item.hangup_cause}</TableCell>
                  <TableCell align="right">{item.origem_ligacao}</TableCell>
                  <TableCell align="right">{item.hora_finalizacao}</TableCell>
                  <TableCell align="right">{item.hora_encerramento}</TableCell>
                  <TableCell align="right">{item.ligacao_id}</TableCell>
                  <TableCell align="right">{item.codigo_conversao_nome}</TableCell>
                  <TableCell align="right">{item.cpf}</TableCell>
                  <TableCell align="right">{item.extension}</TableCell>
                  <TableCell align="right">{item.codigo_conversao_nome}</TableCell>
                  <TableCell align="right">{item.call_nome}</TableCell>
                  <TableCell align="right">{item.campolivre01}</TableCell>
                  <TableCell align="right">{item.asterisk_channel}</TableCell>
                  <TableCell align="right">{item.tempo_espera}</TableCell>
                  <TableCell align="right">{item.protocolo_atendimento}</TableCell>
                  <TableCell align="right">{item.obs_operador}</TableCell>
                  <TableCell align="right">{item.tempo_tarifado}</TableCell>
                  <TableCell align="right">{item.hora_dac}</TableCell>
                  <TableCell align="right">{item.hora_atendida}</TableCell>
                </TableRow>
              ))
            ) }    

          </TableBody>
        </Table>
      </TableContainer>
      </TableStyled>


  );
}




export default TableView;

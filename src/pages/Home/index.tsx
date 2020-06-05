import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});




interface RESULT {
  id: string;
  data: string;
  hora: string;
  origem: string;
  destino: string;
  tempo_total: string;
  sentido: string;
  codigo_usuario: string;
  nome_usuario: string;
  chave: string;
  dnis: string;
  status: string;
  resultado: string;
  cdr_disposition: string;
  codigo_campanha: string;
  nome_campanha: string;
  codigo_tronco: string;
  nome_tronco: string;
  tipo_ligacao: string;
  cadencia: string;
  tarifa: string;
  custo_ligacao: string;
  tabulacao: string;
  abordagem: string;
  conversao: string;
  gravacao_id: string;
  mailing_id: string;
  gravacao_inicio: string;
  gravacao_arquivo: string;
  amd_status: string;
  hangup_cause: string;
  origem_ligacao: string;
  hora_finalizacao: string;
  hora_encerramento: string;
  ligacao_id: string;
  codigo_conversao_nome: string;
  cpf: string;
  extension: string;
  call_nome: string;
  campolivre01: string;
  asterisk_channel: string;
  tempo_espera: string;
  protocolo_atendimento: string;
  obs_operador: string;
  anotacao_operador: string;
  tempo_tarifado: string;
  hora_dac: string;
  hora_atendida: string;
}

 interface RootObject {
  CODIGO: number;
  STATUS: string;
  RESULTADO: RESULT[];
}



const Home: React.FC = () => {
  const classes = useStyles();
  const [crms, setCrms] = useState<RootObject[]>([]);

  useEffect(() => {
    api
      .get('relatorio/chamadas.php?data_inicial=01/06/202000:00&data_final=03/06/202023:59&servico=12&status=ENCERRADA&resultado=ATENDIDA&formato=json')
      .then((res) => {
        setCrms([res.data]);
      });
  }, []);

  return (
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
        {crms &&
            crms[0]?.RESULTADO.map(item => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
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
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




export default Home;

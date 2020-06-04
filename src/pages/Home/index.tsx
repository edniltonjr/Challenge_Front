import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import MaterialTable from 'material-table';
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
    minWidth: 650,
  },
});

const rows = {
  CODIGO: 10,
  STATUS: "SUCESSO",
  RESULTADO: [
    {
      id: "1",
      data: "01/06/2020",
      hora: "07:36:33",
      origem: "2032",
      destino: "123",
      tempo_total: "00:00:22",
      sentido: "SAINTE",
      codigo_usuario: "1234",
      nome_usuario: "John DOe",
      chave: "",
      dnis: "",
      status: "ENCERRADA"
    }
  ]
};




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

  console.log(crms)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          {/* INTERAÇÃO COM OBJECT KEYS */}
          <TableRow>
            {Object.keys(crms).map(item => (
              <TableCell key={item}>sss</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {crms.map(crms => (
            <div>
             {crms.RESULTADO.map((item) => (    
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.cpf}</TableCell>
              <TableCell align="right">{item.data}</TableCell>
            </TableRow>
          ))}
          </div>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




export default Home;

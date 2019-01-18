export interface DetalheAulasDto{

   hora_inicial:string;
  hora_final:string;
  data:string;
  titulo:string;
  matricula:string;
  veiculo:string;
  instrutor:string;

}
export function buildDetalheAulasDto(){
  let detalheAula = {hora_inicial: "", hora_final:"", data:"", titulo:"", matricula:"", veiculo:"", instrutor:""};
  return detalheAula;
}
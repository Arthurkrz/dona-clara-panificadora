export const products=[
{id:'pao',name:'Pão de fermentação natural',category:'Pães',price:2400,stock:18,icon:'◒',desc:'Casca crocante, miolo macio e 24 horas de cuidado.',tag:'O favorito do bairro'},
{id:'croissant',name:'Croissant de manteiga',category:'Pães',price:1200,stock:24,icon:'☽',desc:'Camadas delicadas, feito à mão todas as manhãs.',tag:'Fornada do dia'},
{id:'bolo',name:'Bolo caseiro de laranja',category:'Doces',price:3800,stock:8,icon:'▤',desc:'Receita da Clara, com suco e raspas de laranja.',tag:'Receita de família'},
{id:'cuca',name:'Cuca de banana',category:'Doces',price:1600,stock:12,icon:'▥',desc:'Banana, canela e aquela farofa que abraça.',tag:'Tradição colonial'},
{id:'frios',name:'Tábua colonial · 4 pessoas',category:'Coloniais',price:8900,stock:6,icon:'◉',desc:'Queijos, frios, geleia e nosso pão artesanal.',tag:'Para compartilhar'},
{id:'cafe',name:'Kit café da manhã · 2 pessoas',category:'Coloniais',price:5900,stock:10,icon:'♧',desc:'Pães, croissants, manteiga e geleia colonial.',tag:'Uma manhã especial'}];
export const money=cents=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
export const total=cart=>cart.reduce((sum,line)=>sum+products.find(p=>p.id===line.id).price*line.qty,0);
export function validateOrder({name,phone,date,time,cart},today){
if(!name?.trim()||!/^\d{10,11}$/.test(phone?.replace(/\D/g,'')))throw Error('Informe seu nome e telefone com DDD.');
if(!date||date<today||!['08:00','10:00','14:00','16:00','18:00'].includes(time))throw Error('Escolha uma data válida e um horário de retirada.');
if(!cart?.length||cart.some(l=>!products.some(p=>p.id===l.id&&Number.isInteger(l.qty)&&l.qty>0&&l.qty<=p.stock)))throw Error('Revise os itens e as quantidades.');
return true;
}

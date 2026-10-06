import test from 'node:test';import assert from 'node:assert/strict';import {total,validateOrder} from '../src/domain.js';
const valid={name:'Cliente Teste',phone:'11999999999',date:'2026-10-08',time:'10:00',cart:[{id:'pao',qty:2}]};
test('soma preços em centavos sem erro de ponto flutuante',()=>assert.equal(total([{id:'pao',qty:2},{id:'croissant',qty:1}]),6000));
test('aceita pedido válido',()=>assert.equal(validateOrder(valid,'2026-10-06'),true));
test('rejeita retirada no passado',()=>assert.throws(()=>validateOrder({...valid,date:'2026-10-05'},'2026-10-06')));
test('rejeita quantidade acima do limite',()=>assert.throws(()=>validateOrder({...valid,cart:[{id:'pao',qty:19}]},'2026-10-06')));
test('rejeita sacola vazia e produto desconhecido',()=>{assert.throws(()=>validateOrder({...valid,cart:[]},'2026-10-06'));assert.throws(()=>validateOrder({...valid,cart:[{id:'x',qty:1}]},'2026-10-06'));});
test('rejeita telefone e horário inválidos',()=>{assert.throws(()=>validateOrder({...valid,phone:'123'},'2026-10-06'));assert.throws(()=>validateOrder({...valid,time:'23:00'},'2026-10-06'));});

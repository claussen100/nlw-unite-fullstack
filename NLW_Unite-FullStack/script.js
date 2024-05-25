import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
dayjs.extend(relativeTime);

let participantes = [
  {
    nome: "Patrick Claussen",
    email: "claussenpatrick@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 20, 25),
    dataCheckIn: new Date(2024, 2, 25, 22, 0),
  },
  {
    nome: "David Dutra",
    email: "dvd.gd762@gmail.com",
    dataInscricao: new Date(2023, 1, 12, 11, 0),
    dataCheckIn: new Date(2024, 5, 28, 22, 0),
  },
  {
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    dataInscricao: new Date(2024, 0, 5, 15, 30),
    dataCheckIn: new Date(2024, 3, 10, 9, 0),
  },
  {
    nome: "Carlos Sousa",
    email: "carlos.sousa@example.com",
    dataInscricao: new Date(2024, 1, 20, 14, 45),
    dataCheckIn: new Date(2024, 2, 15, 10, 0),
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 1, 18, 0),
    dataCheckIn: new Date(2024, 2, 25, 22, 0),
  },
  {
    nome: "João Pereira",
    email: "joao.pereira@example.com",
    dataInscricao: new Date(2024, 0, 22, 9, 30),
    dataCheckIn: new Date(2024, 4, 5, 14, 0),
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    dataInscricao: new Date(2024, 2, 3, 10, 15),
    dataCheckIn: new Date(2024, 2, 27, 11, 0),
  },
  {
    nome: "Rodrigo Alves",
    email: "rodrigo.alves@example.com",
    dataInscricao: new Date(2024, 1, 15, 13, 0),
    dataCheckIn: new Date(2024, 3, 20, 16, 0),
  },
  {
    nome: "Beatriz Santos",
    email: "beatriz.santos@example.com",
    dataInscricao: new Date(2024, 0, 8, 12, 45),
    dataCheckIn: new Date(2024, 5, 10, 10, 0),
  },
  {
    nome: "Gabriel Costa",
    email: "gabriel.costa@example.com",
    dataInscricao: new Date(2024, 1, 28, 8, 30),
    dataCheckIn: new Date(2024, 3, 15, 13, 0),
  },
];

const criarNovoParticipante = (participante) => {
  console.log(dayjs());
  const dataInscricao = dayjs().to(participante.dataInscricao);
  const dataCheckIn = dayjs().to(participante.dataCheckIn);

  return `
  <tr>
        <td>
         <strong> ${participante.nome} </strong>
         <br />
         <small> ${participante.email} </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
  `;
};

const attLista = (participantes) => {
  let output = "";

  for (let participante of participantes) {
    output += criarNovoParticipante(participante);
  }

  document.querySelector("tbody").innerHTML = output;
};

attLista(participantes);

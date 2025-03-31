import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("votantes")
export class Votante {
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Column({ nullable: true })
  id_aluno: String;

  @Column({ nullable: true })
  id_visitante: String;

  @Column({ nullable: true })
  id_evento: String;

  @Column()
  situacao_votante: String;
}

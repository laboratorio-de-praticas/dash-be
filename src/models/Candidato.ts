import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("candidatos")
export class Candidato {
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Column({ nullable: true })
  id_aluno: String;

  @Column({ nullable: true })
  id_projeto: String;

  @Column({ nullable: true })
  id_evento: String;

  @Column()
  situacao_candidato: String;

  @Column({ type: "bytea" })
  qrcode: Buffer;
}

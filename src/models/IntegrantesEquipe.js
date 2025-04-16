import { EntitySchema, Exclusion } from "typeorm";
const IntegrantesEquipe = new EntitySchema({
    name: "IntegrantesEquipe",
    tableName: "IntegrantesEquipe",
    columns:{
        id_integrante: {
            primary: true,
            type: "int",
            generated: "increment"
        },
        fk_projeto_id:{
            type: "int",
            nullable: false
        },
        fk_aluno_id:{
            type: "int",
            nullable: false
        }
    }
});
export default IntegrantesEquipe;

import {MigrationInterface, QueryRunner} from "typeorm";

export class tablePurchaseAndProduct1651939549223 implements MigrationInterface {
    name = 'tablePurchaseAndProduct1651939549223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`preco\` double NOT NULL, \`data_criacao\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`data_atualizacao\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`purchase\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`total\` double NOT NULL, \`data_criacao\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`tipo_pagamento\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`purchase_products_product\` (\`purchaseId\` bigint NOT NULL, \`productId\` bigint NOT NULL, INDEX \`IDX_60f37c2b142964ed7e6c38c32c\` (\`purchaseId\`), INDEX \`IDX_6cdd70374e621d22a3f466eb7a\` (\`productId\`), PRIMARY KEY (\`purchaseId\`, \`productId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`purchase_products_product\` ADD CONSTRAINT \`FK_60f37c2b142964ed7e6c38c32cf\` FOREIGN KEY (\`purchaseId\`) REFERENCES \`purchase\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`purchase_products_product\` ADD CONSTRAINT \`FK_6cdd70374e621d22a3f466eb7ae\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchase_products_product\` DROP FOREIGN KEY \`FK_6cdd70374e621d22a3f466eb7ae\``);
        await queryRunner.query(`ALTER TABLE \`purchase_products_product\` DROP FOREIGN KEY \`FK_60f37c2b142964ed7e6c38c32cf\``);
        await queryRunner.query(`DROP INDEX \`IDX_6cdd70374e621d22a3f466eb7a\` ON \`purchase_products_product\``);
        await queryRunner.query(`DROP INDEX \`IDX_60f37c2b142964ed7e6c38c32c\` ON \`purchase_products_product\``);
        await queryRunner.query(`DROP TABLE \`purchase_products_product\``);
        await queryRunner.query(`DROP TABLE \`purchase\``);
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}

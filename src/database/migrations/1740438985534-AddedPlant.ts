import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedPlant1740438985534 implements MigrationInterface {
  name = 'AddedPlant1740438985534';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "plant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "seedId" uuid NOT NULL, CONSTRAINT "PK_97e1eb0d045aadea59401ece5ba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "plant" ADD CONSTRAINT "FK_491e7ac15b762a271f00054e6d4" FOREIGN KEY ("seedId") REFERENCES "seed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "plant" DROP CONSTRAINT "FK_491e7ac15b762a271f00054e6d4"`,
    );
    await queryRunner.query(`DROP TABLE "plant"`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedPlants1740439472391 implements MigrationInterface {
  name = 'AddedPlants1740439472391';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "plant" ADD "notes" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "plant" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "plant" ADD "planting_date" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "plant" ADD "locationId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "plant" ADD CONSTRAINT "FK_86694ea29d0d06a998a20ce513a" FOREIGN KEY ("locationId") REFERENCES "garden_bed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "plant" DROP CONSTRAINT "FK_86694ea29d0d06a998a20ce513a"`,
    );
    await queryRunner.query(`ALTER TABLE "plant" DROP COLUMN "locationId"`);
    await queryRunner.query(`ALTER TABLE "plant" DROP COLUMN "planting_date"`);
    await queryRunner.query(`ALTER TABLE "plant" DROP COLUMN "quantity"`);
    await queryRunner.query(`ALTER TABLE "plant" DROP COLUMN "notes"`);
  }
}

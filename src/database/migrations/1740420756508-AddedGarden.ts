import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedGarden1740420756508 implements MigrationInterface {
  name = 'AddedGarden1740420756508';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP CONSTRAINT "FK_2e64a09ecd7901faa230dfd1a1c"`,
    );
    await queryRunner.query(`ALTER TABLE "garden" DROP COLUMN "location"`);
    await queryRunner.query(`ALTER TABLE "garden" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "garden_bed" DROP COLUMN "width"`);
    await queryRunner.query(`ALTER TABLE "garden_bed" DROP COLUMN "length"`);
    await queryRunner.query(`ALTER TABLE "garden_bed" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP COLUMN "gardenIdId"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD "gardenIdId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD "length" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD "width" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" ADD "location" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD CONSTRAINT "FK_2e64a09ecd7901faa230dfd1a1c" FOREIGN KEY ("gardenIdId") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

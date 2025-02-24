import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedSeed1740437616840 implements MigrationInterface {
  name = 'AddedSeed1740437616840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "seed" ("notes" character varying, "harvest_period_end" TIMESTAMP, "harvest_period_start" TIMESTAMP, "planting_period_end" TIMESTAMP, "planting_period_start" TIMESTAMP, "seeding_period_end" TIMESTAMP, "seeding_period_start" TIMESTAMP, "seeding_depth" integer, "seeding_distance_plant" integer, "seeding_distance_row" integer, "expected_height" integer, "sun_exposure" integer, "sprouting_time_max" integer, "sprouting_time_min" integer, "greenhouse" boolean NOT NULL, "variety" character varying, "name" character varying NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e959d094217adb4d796a027d2c8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" ADD "userId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP CONSTRAINT "FK_23c12569f3565a0fa620aa824a9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ALTER COLUMN "gardenId" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" ADD CONSTRAINT "FK_b9973aae35c2a44922cf72ac5f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD CONSTRAINT "FK_23c12569f3565a0fa620aa824a9" FOREIGN KEY ("gardenId") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP CONSTRAINT "FK_23c12569f3565a0fa620aa824a9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" DROP CONSTRAINT "FK_b9973aae35c2a44922cf72ac5f5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ALTER COLUMN "gardenId" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD CONSTRAINT "FK_23c12569f3565a0fa620aa824a9" FOREIGN KEY ("gardenId") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "garden" DROP COLUMN "userId"`);
    await queryRunner.query(`DROP TABLE "seed"`);
  }
}

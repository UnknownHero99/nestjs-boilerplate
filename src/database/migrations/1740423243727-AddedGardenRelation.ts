import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedGardenRelation1740423243727 implements MigrationInterface {
  name = 'AddedGardenRelation1740423243727';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "garden_bed" ADD "gardenId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD CONSTRAINT "FK_23c12569f3565a0fa620aa824a9" FOREIGN KEY ("gardenId") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP CONSTRAINT "FK_23c12569f3565a0fa620aa824a9"`,
    );
    await queryRunner.query(`ALTER TABLE "garden_bed" DROP COLUMN "gardenId"`);
  }
}

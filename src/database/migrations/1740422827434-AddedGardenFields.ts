import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedGardenFields1740422827434 implements MigrationInterface {
  name = 'AddedGardenFields1740422827434';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" DROP CONSTRAINT "FK_23c12569f3565a0fa620aa824a9"`,
    );
    await queryRunner.query(`ALTER TABLE "garden_bed" DROP COLUMN "gardenId"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD "gardenId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden_bed" ADD CONSTRAINT "FK_23c12569f3565a0fa620aa824a9" FOREIGN KEY ("gardenId") REFERENCES "garden"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedGardenRelation1740423709716 implements MigrationInterface {
  name = 'AddedGardenRelation1740423709716';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden" ADD "userId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "garden" ADD CONSTRAINT "FK_b9973aae35c2a44922cf72ac5f5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "garden" DROP CONSTRAINT "FK_b9973aae35c2a44922cf72ac5f5"`,
    );
    await queryRunner.query(`ALTER TABLE "garden" DROP COLUMN "userId"`);
  }
}

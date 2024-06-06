import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUser1717661141692 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        for (let i = 0; i < 1000; i++) {
            await queryRunner.query(
                `INSERT INTO users(firstname, lastname, age, gender, hasproblems) VALUES ('Name${i}', 'Surname${i}', ${Math.floor(Math.random() * 100)}, '${Math.random() > 0.5 ? 'male' : 'female'}', ${Math.random() > 0.5})`,
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM users');
    }

}

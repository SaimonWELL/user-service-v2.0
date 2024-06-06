import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1623022800000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'firstname',
                    type: 'varchar',
                },
                {
                    name: 'lastname',
                    type: 'varchar',
                },
                {
                    name: 'age',
                    type: 'int',
                },
                {
                    name: 'gender',
                    type: 'varchar',
                },
                {
                    name: 'hasproblems',
                    type: 'boolean',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}

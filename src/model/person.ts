import {Table, Column, PrimaryKey, IsUUID, Model, Unique} from 'sequelize-typescript';

@Table({
    modelName: 'Person',
    tableName: 'Person'
})
export class Person extends Model<Person> {

    @PrimaryKey
    @Unique
    @IsUUID(4)
    @Column
    id: string;

    @Column
    name: String;

    @Unique
    @Column
    email: String;
}

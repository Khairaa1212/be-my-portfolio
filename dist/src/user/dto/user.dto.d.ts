export declare class CreateUserDto {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    hobby?: string;
}
export declare class CreateProjectDto {
    projectName: string;
    institutionName: string;
    userId: number;
}
